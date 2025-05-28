/* eslint-disable @typescript-eslint/no-unused-vars */
import UserModel from '../models/user.model';
import AdminModel from '../models/admin.model';
import {VisaPackageModel} from '../models/visa.model';
import { validationResult } from 'express-validator';
import nodemailer from 'nodemailer';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import emailService from './emailer.service';
import bcrypt from 'bcryptjs';
import i18n from 'i18n';

dotenv.config();

class AdminService {
  static makeRandomString(length) {
    let result = "";
    const characters = "0123456789";
    for (let i = 0; i < length; i++) {
      result += characters.charAt(
        Math.floor(Math.random() * characters.length)
      );
    }
    return result;
  }

  static async getAllUsers() {
    const userList = await UserModel.find();
    if (userList.length === 0) {
      return { response: false, message: "Users not found", data: null };
    }

    const newUserList = userList.map((user) => {
      const { password, ...userWithoutPassword } = user;
      return userWithoutPassword;
    });

    return { response: true, message: "Success", data: newUserList };
  }

  static async getUserById(userId) {
    const user = await UserModel.findOne({ _id: userId });
    if (!user) {
      return { response: false, message: "User not found", data: null };
    }
    console.log(user);
    const { password, ...userWithoutPassword } = user;

    return { response: true, message: "Success", data: userWithoutPassword };
  }

  static async getAdminById(userId) {
    const admin = await AdminModel.findOne({ _id: userId });
    if (!admin) {
      return { response: false, message: "Admin not found", data: null };
    }
    console.log(admin);
    const { password, ...adminWithoutPassword } = admin;

    return { response: true, message: "Success", data: adminWithoutPassword };
  }

  static getCurrentAdmin(currentUser) {
    const { password, ...userWithoutPassword } = currentUser._doc;

    return { response: true, message: "Success", data: userWithoutPassword };
  }

  static async createAdmin(rawData) {
    const check = this.checkValidation(rawData);
    if (!check) {
      return {
        response: false,
        message: "Send data validation error",
        data: null,
      };
    }
    const user = await AdminModel.findOne({ email: rawData.email });
    if (user) {
      return {
        response: false,
        message: "Already registered admin.",
        data: null,
      };
    }
    rawData.password = await this.hashPassword(rawData.password);
    rawData.created_at = Date.now();
    const result = await AdminModel.create(rawData);

    if (!result) {
      return {
        response: false,
        message: "An error occor while creating new admin",
        data: null,
      };
    }
    if (result.errors) {
      return { response: false, message: result.errors, data: null };
    }
    return { response: true, message: "Success", data: null };
  }

  static async updateAdmin(rawData, userId) {
    const check = this.checkValidation(rawData);
    if (!check) {
      return {
        response: false,
        message: "Send data validation error",
        data: null,
      };
    }

    const admin = await AdminModel.findOne({ _id: userId });

    const result = await admin.updateOne({ ...rawData });

    if (!result) {
      return {
        response: false,
        message: "An error while updating an exiting admin.",
        data: null,
      };
    }
    if (result.acknowledged) {
      return { response: true, message: "Successfully Updated!", data: null };
    } else {
      return { response: false, message: result, data: null };
    }
  }

  static async updatePassword(rawData, userId) {
    const user = await UserModel.findOne({ id: userId });
    if (!user) {
      return { response: false, message: "Unregistered User.", data: null };
    }
    if (user.email !== rawData.email) {
      return {
        response: false,
        message: "Email address is wrong.",
        data: null,
      };
    }
    if (rawData.currentPassword) {
      const isMatch = await bcrypt.compare(
        rawData.currentPassword,
        user.password
      );
      if (!isMatch) {
        return {
          response: false,
          message: "Current password is incorrect",
          data: null,
        };
      }
      rawData.password = await this.hashPassword(rawData.password);
      const result = await UserModel.updateOne(
        { password: rawData.password },
        userId
      );

      if (!result) {
        return {
          response: false,
          message: "An error while updating your password.",
          data: null,
        };
      }
      if (result) {
        return { response: false, message: result, data: null };
      }
    } else {
      rawData.password = await this.hashPassword(rawData.password);
      const result = await UserModel.updateOne(
        { password: rawData.password },
        userId
      );

      if (!result) {
        return {
          response: false,
          message: "An error while updating your password.",
          data: null,
        };
      }
      if (result) {
        return { response: false, message: result, data: null };
      }
    }

    return { response: true, message: "Successfully updated", data: null };
  }

  static async adminLogin(rawData) {
    const check = this.checkValidation(rawData);
    if (!check) {
      return {
        response: false,
        message: "Send data validation error",
        data: null,
      };
    }
    const { email, password: pass } = rawData;
    const admin = await AdminModel.findOne({ email });
    if (!admin) {
      return { response: false, message: "Unregistered admin!", data: null };
    }
    const isMatch = await bcrypt.compare(pass, admin.password);
    if (!isMatch) {
      return { response: false, message: "Incorrect password!", data: null };
    }

    // admin matched!
    const secretKey = process.env.SECRET_JWT || "";
    const token = jwt.sign({ admin_id: admin.id.toString() }, secretKey, {
      expiresIn: "24h",
    });

    const { password, _id } = admin;

    return { response: true, message: "Success!", data: { _id, email, token } };
  }

  static async forgotPassword(rawData) {
    if (!this.emailValidation(rawData.email)) {
      return {
        response: false,
        message: "Email validation failed.",
        data: null,
      };
    }
    const user = await UserModel.findOne({ email: rawData.email });
    if (!user) {
      return { response: false, message: "Unregistered user.", data: false };
    }
    const secretKey = process.env.SECRET_JWT || "";
    const token = jwt.sign({ user_id: user.id.toString() }, secretKey, {
      expiresIn: "2h",
    });
    const link = `${process.env.FRONT_URL}resetpassword/${token}`;
    console.log(link);

    const subject = i18n.__({
      phrase: "MGL Exchange - Password Reset",
      locale: rawData.locale || "En",
    });
    const body = i18n.__(
      {
        phrase: "To reset your password, please click on this link: %s",
        locale: rawData.locale || "En",
      },
      link
    );
    emailService.deliverEmail(user.email, subject, body);

    return {
      response: true,
      message: "Success. Please check your Email inbox.",
      data: null,
    };
  }

  static checkValidation(data) {
    const errors = validationResult(data);
    if (!errors.isEmpty()) {
      return false;
    }
    return true;
  }

  // hash password if it exists
  static async hashPassword(password) {
    if (password) {
      password = await bcrypt.hash(password, 8);
      return password;
    }
  }

  static emailValidation(enteredEmail) {
    // eslint-disable-next-line no-useless-escape
    const mail_format = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if (enteredEmail.match(mail_format)) {
      return true;
    } else {
      return false;
    }
  }

    static async deleteAdmin(userId) {
      
    const result = await AdminModel.deleteOne({ _id: userId });
    if (!result) {
      return {
        response: false,
        message: "The user does not exist.",
        data: null,
      };
    }
    if (result.deletedCount === 0) {
      return { response: false, message: "Failed to delete Admin", data: null };
    }
    return { response: true, message: "Successfully deleted.", data: null };
  }

  
}

export default AdminService;