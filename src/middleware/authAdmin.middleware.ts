import AdminModel from '../models/admin.model';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

const authAdmin = () => {
    return async function (req, res, next) {
        try {
            const authHeader = req.headers.authorization;
            const bearer = 'Bearer ';

            if (!authHeader || !authHeader.startsWith(bearer)) {
                res.send({response:false, message:'Access denied. No credentials sent!', data:null})
            }

            const token = authHeader.replace(bearer, '');
            const secretKey = process.env.SECRET_JWT || "";

            // Verify Token
            const decoded = jwt.verify(token, secretKey);
            const user = await AdminModel.findOne({ _id: decoded.admin_id });

            if (!user) {
                res.send({response:false, message:'Authentication failed!', data:null})
            }

            // if the user has permissions
            req.currentUser = user;
            next();

        } catch (e) {
            e.status = 401;
            next(e);
        }
    }
}

export default authAdmin;