import UserService from '../services/user.service';

import dotenv from 'dotenv';
dotenv.config();

/******************************************************************************
 *                              User Controller
 ******************************************************************************/
class UserController {
  verifyEmail = async (req, res, next) => {
    try {
      const result = await UserService.verifyEmail(
        req.body.email,
        req.body.locale || "En"
      );
      res.send(result);
    } catch (error) {
      next(error);
    }
  };

  getAllUsers = async (req, res, next) => {
    try {
      console.log("User called getAllUsers!!!!");
      const result = await UserService.getAllUsers();
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

  getCurrentUser = async (req, res, next) => {
    try {
      console.log("User called getCurrentUser!!!!");
      const result = UserService.getCurrentUser(req.currentUser);
      res.send(result);
    } catch (error) {
      next(error);
    }
  };

  createUser = async (req, res, next) => {
    try {
      console.log("User called createUser!!!!");
      const result = await UserService.createUser(req.body);
      res.send(result);
    } catch (error) {
      next(error);
    }
  };

  updateUser = async (req, res, next) => {
    try {
      console.log("User called updateUser!!!!");
      const result = await UserService.updateUser(req.body, req.currentUser.id);
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

  userLogin = async (req, res, next) => {
    try {
      console.log("User called userLogin!!!!");
      const result = await UserService.userLogin(req.body);
      res.send(result);
    } catch (error) {
      next(error);
    }
  };

  userSignup = async (req, res, next) => {
    try {
      console.log("User called userSignup!!!!");
      //const password = req.body.password;
      const result = await UserService.verifyEmail(
        req.body.email,
        req.body.locale || "En"
      );
      //res.send(result)
      const signup = await UserService.signUp(req.body);

      if (result.response && signup.response) {
        //const result = await UserService.userLogin({email:req.body.email, password: password})
        //res.send(result)
        res.send(signup);
      } else {
        res.send(signup);
      }
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

  addCard = async (req, res, next) => {
    try {
      console.log("User called add Card !!!!");
      const addcard = await UserService.addCard(req.body);

      if (addcard.response) {
        res.send(addcard);
      } else {
        res.send(addcard);
      }
    } catch (error) {
      next(error);
    }
  };

  deleteUser = async (req, res, next) => {
    try {
      console.log("User called deleteUser!!!!");
      if (req.currentUser._id != req.params.id) {
        return {
          response: false,
          message: "You are not authorize to delete this account",
          data: null,
        };
      }
      const result = await UserService.deleteUser(req.params.id);
      res.send(result);
    } catch (error) {
      next(error);
    }
  };
  
  deletePaymentMethod = async (req, res, next) => {
    try {
      console.log("User called deletePayment Method!!!!");

      const result = await UserService.deletePaymentMethod(
        req.params.id,
        req.currentUser._id
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
export default new UserController;