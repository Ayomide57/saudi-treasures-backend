import express from 'express';
import userController from '../controllers/user.controller';
import adminController from '../controllers/admin.controller';
import authAdmin from '../middleware/authAdmin.middleware';
import {createAdminSchema,updateAdminSchema, validateLogin } from '../middleware/validators/adminValidator.middleware';
import awaitHandlerFactory from '../middleware/awaitHandlerFactory.middleware';


const router = express.Router();


router.post('/create_admin', createAdminSchema , awaitHandlerFactory(adminController.createAdmin));
router.post('/login', validateLogin, awaitHandlerFactory(adminController.adminLogin));
router.get(
  "/admin/:id",
  authAdmin(),
  awaitHandlerFactory(userController.getUserById)
);
router.patch(
  "/settings/update-account",
  authAdmin(),
  updateAdminSchema,
  awaitHandlerFactory(adminController.updateAdmin)
);
router.get(
  "/settings/profile",
  authAdmin(),
  awaitHandlerFactory(adminController.getCurrentAdmin)
); 

router.delete(
  "/delete/:id",
  authAdmin(),
  awaitHandlerFactory(adminController.deleteAdmin)
);




export default router; 
