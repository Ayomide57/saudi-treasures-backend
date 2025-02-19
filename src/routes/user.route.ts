import express from 'express';
import userController from '../controllers/user.controller';
import auth from '../middleware/auth.middleware';
import { createUserSchema, validateLogin, validatePaymentCard, updatePasswordSchema, updateUserSchema } from '../middleware/validators/userValidator.middleware';
import awaitHandlerFactory from '../middleware/awaitHandlerFactory.middleware';


const router = express.Router();


router.post('/signup', createUserSchema , awaitHandlerFactory(userController.userSignup));
router.post('/login', validateLogin, awaitHandlerFactory(userController.userLogin));
router.post('/settings/add-card', validatePaymentCard, auth(), awaitHandlerFactory(userController.addCard));
router.get('/user/:id', auth(), awaitHandlerFactory(userController.getUserById));
router.patch('/settings/update-account', auth(), updateUserSchema, awaitHandlerFactory(userController.updateUser));
router.get('/settings/profile', auth(), awaitHandlerFactory(userController.getCurrentUser)); 
router.patch('/settings/resetpassword', updatePasswordSchema, auth(), awaitHandlerFactory(userController.resetPassword));
router.post('/settings/forgotpassword', awaitHandlerFactory(userController.forgotPassword));
router.delete(
  "/delete/:id",
  auth(),
  awaitHandlerFactory(userController.deleteUser)
);
router.delete(
  "/settings/payment/delete/:id",
  auth(),
  awaitHandlerFactory(userController.deletePaymentMethod)
);



export default router; 
