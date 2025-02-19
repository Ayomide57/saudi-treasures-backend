import UserService from '../services/user.service';
import AdminService from '../services/admin.service';

import dotenv from 'dotenv';
dotenv.config();

/******************************************************************************
 *                              Admin Controller
 ******************************************************************************/
class AdminController {
  getAllUsers = async (req, res, next) => {
    try {
      console.log("User called getAllUsers!!!!");
      const result = await UserService.getAllUsers();
      res.send(result);
    } catch (error) {
      next(error);
    }
  };

  getAllAdmins = async (req, res, next) => {
    try {
      console.log("User called getAllUsers!!!!");
      const result = await AdminService.getAllUsers();
      res.send(result);
    } catch (error) {
      next(error);
    }
  };

  getUserById = async (req, res, next) => {
    try {
      console.log("User called getUserById!!!!");
      const result = await UserService.getUserById(req.params.id);
      res.send(result);
    } catch (error) {
      next(error);
    }
  };

  getCurrentAdmin = async (req, res, next) => {
    try {
      console.log("Admin called getCurrentAdmin!!!!");
      const result = AdminService.getCurrentAdmin(req.currentUser);
      res.send(result);
    } catch (error) {
      next(error);
    }
  };

  createAdmin = async (req, res, next) => {
    try {
      console.log("Admin called createAdmin!!!!");
      const result = await AdminService.createAdmin(req.body);
      res.send(result);
    } catch (error) {
      next(error);
    }
  };

  updateAdmin = async (req, res, next) => {
    try {
      console.log("Admin called updateAdmin!!!!");
      const result = await AdminService.updateAdmin(
        req.body,
        req.currentUser.id
      );
      res.send(result);
    } catch (error) {
      next(error);
    }
  };

  updatePassword = async (req, res, next) => {
    try {
      console.log("User called updatePassword!!!!");
      const result = await UserService.updatePassword(
        req.body,
        req.currentUser.id
      );
      res.send(result);
    } catch (error) {
      next(error);
    }
  };

  adminLogin = async (req, res, next) => {
    try {
      console.log("Admin called adminLogin!!!!");
      const result = await AdminService.adminLogin(req.body);
      res.send(result);
    } catch (error) {
      next(error);
    }
  };

  deleteAdmin = async (req, res, next) => {
    try {
      console.log("Admin called deleteAdmin!!!!");
      console.log(req.currentUser.role);
      if (req.currentUser.role != "super") {
        return res.send({
          response: false,
          message: "Cannot delete admin user.",
          data: null,
        });
      }
      const result = await AdminService.deleteAdmin(
        req.params.id
      );
      res.send(result);
    } catch (error) {
      next(error);
    }
  };

  forgotPassword = async (req, res, next) => {
    try {
      const result = await UserService.forgotPassword(req.body);
      res.send(result);
    } catch (error) {
      next(error);
    }
  };

  resetPassword = async (req, res, next) => {
    try {
      const result = await UserService.updatePassword(
        req.body,
        req.currentUser.id
      );
      res.send(result);
    } catch (error) {
      next(error);
    }
  };
}



/******************************************************************************
 *                               Export
 ******************************************************************************/
export default new AdminController;