import mongoose from "mongoose";
import { IAdmin } from "../utils/types";


export const AdminSchema = new mongoose.Schema({
    fullname: { type: String, required: true },
    username: { type: String, required: true },
    email: { type: String, required: true },
    role: {type:String, required: true},
    password: { type: String, required: true },
    created_at: { type: Date, required: true },
});

const Admin = mongoose.model<IAdmin>('Admin', AdminSchema);
export default Admin;