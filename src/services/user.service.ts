/* eslint-disable @typescript-eslint/no-unused-vars */
import UserModel from '../models/user.model';
import EmailVerifyModel from '../models/emailVerify.model';
import { validationResult } from 'express-validator';
import nodemailer from 'nodemailer';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import emailService from './emailer.service';
import bcrypt from 'bcryptjs';
import i18n from 'i18n';
import { IEmail } from '../utils/types';
import PaymentModel from '../models/payment.model';

dotenv.config();


const emailType: IEmail = {    EmailVerify: 'EmailVerify',
    ResetPassword: 'ResetPassword'
}

class UserService {
  static sendEmail(email, uniqueString, emailType) {
    const transport = nodemailer.createTransport({
      //service: process.env.EMAIL_SERVICE,
      host: process.env.EMAIL_HOST,
      port: Number(process.env.EMAIL_PORT),
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PWD,
      },
    });
    let mailOptions = {};
    if (emailType === emailType.EmailVerify) {
      mailOptions = {
        from: process.env.EMAIL,
        to: email,
        subject: "Email Verification",
        text:
          "Your Email verification code is : " +
          uniqueString +
          ". Send this with your information.",
      };
    } else if (emailType === emailType.ResetPassword) {
      mailOptions = {
        from: process.env.EMAIL,
        to: email,
        subject: "Reset Password",
        text:
          "Did you forget your password? To reset your password please visit here : " +
          uniqueString,
      };
    }

    transport.sendMail(mailOptions, function (error, info) {
      if (error) {
        console.log(error);
      } else {
        console.log("Email sent: " + info.response);
      }
    });
  }

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

  static async verifyEmail(email, locale) {
    if (!this.emailValidation(email)) {
      return {
        response: false,
        message: "Email validation failed.",
        data: null,
      };
    }
    const verificationCode = this.makeRandomString(4);

    const subject = i18n.__({
      phrase: "MGL Exchange: Email Verification",
      locale: locale,
    });
    const body = i18n.__(
      { phrase: "Your Email verification code is %s", locale: locale },
      verificationCode
    );
    emailService.deliverEmail(email, subject, body)

    const prev = await EmailVerifyModel.findOne({ email: email });
    if (prev) {
      const result = await EmailVerifyModel.updateOne(
        { verify_code: verificationCode },
        prev.id
      );
      if (!result) {
        return {
          response: false,
          message:
            "An error was caused during the Email Verification Code generation.",
          data: null,
        };
      }
      if (result) {
        return { response: false, message: result, data: null };
      }
    } else {
      const result = await EmailVerifyModel.create({
        email: email,
        verify_code: verificationCode,
      });
      if (!result) {
        return {
          response: false,
          message:
            "An error was caused during the Email Verification Code generation.",
          data: null,
        };
      }
      if (result.errors) {
        return { response: false, message: result.errors, data: null };
      }
    }
    console.log(verificationCode);
    return {
      response: true,
      message:
        "Success. Email Verification Code was send to your Email address.",
      data: null,
    };
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

  static getCurrentUser(currentUser) {
    const { password, ...userWithoutPassword } = currentUser._doc;

    return { response: true, message: "Success", data: userWithoutPassword };
  }

  static async createUser(rawData) {
    const check = this.checkValidation(rawData);
    if (!check) {
      return {
        response: false,
        message: "Send data validation error",
        data: null,
      };
    }
    const user = await UserModel.findOne({ email: rawData.email });
    if (user) {
      return {
        response: false,
        message: "Already registered user.",
        data: null,
      };
    }
    rawData.password = await this.hashPassword(rawData.password);
    rawData.created_at = Date.now();
    const result = await UserModel.create(rawData);

    if (!result) {
      return {
        response: false,
        message: "An error caused during creating new user",
        data: null,
      };
    }
    if (result.errors) {
      return { response: false, message: result.errors, data: null };
    }
    return { response: true, message: "Success", data: null };
  }

  static async updateUser(rawData, userId) {
    const check = this.checkValidation(rawData);
    if (!check) {
      return {
        response: false,
        message: "Send data validation error",
        data: null,
      };
    }

    const user = await UserModel.findOne({ _id: userId });

    const result = await user.updateOne({ ...rawData });

    if (!result) {
      return {
        response: false,
        message: "An error caused during updating an exiting user.",
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
          message: "An error caused during updating your password.",
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
          message: "An error caused during updating your password.",
          data: null,
        };
      }
      if (result) {
        return { response: false, message: result, data: null };
      }
    }

    return { response: true, message: "Successfully updated", data: null };
  }

  static async signUp(rawData) {
    const check = this.checkValidation(rawData);
    if (!check) {
      return {
        response: false,
        message: "Send data validation error",
        data: null,
      };
    }
    rawData.password = await this.hashPassword(rawData.password);
    const checker = await UserModel.findOne({ email: rawData.email });
    if (checker) {
      return {
        response: false,
        message: "This Email already in use",
        data: null,
      };
    }

    const { confirm_password, ...registerData } = rawData;

    const result = await UserModel.create(rawData);

    if (!result) {
      return {
        response: false,
        message: "An error was caused during user registeration.",
        data: null,
      };
    }
    if (result.errors) {
      return { response: false, message: result.errors, data: null };
    }

    const subject = i18n.__({
      phrase: "MGL Exchange: Account Created Sucessfully",
      locale: rawData.locale || "En",
    });
    const body = i18n.__({
      phrase:
        "Your MGL Exchange account has been created sucessfully. Thank you.",
      locale: rawData.locale || "En",
    });
    emailService.deliverEmail(rawData.email, subject, body);

    return { response: true, message: "Success!", data: null };
  }

  static async userLogin(rawData) {
    const check = this.checkValidation(rawData);
    if (!check) {
      return {
        response: false,
        message: "Send data validation error",
        data: null,
      };
    }
    //check email verification
    const verifier = await EmailVerifyModel.findOne({ email: rawData.email });
    if (!verifier) {
      return {
        response: false,
        message: "Please receive and resend the Email verification code.",
        data: null,
      };
    }
    /**  if (verifier.verify_code !== rawData.email_verify) {
            return {response:false, message:"Email verification code is wrong.", data:null}
        }**/
    const { email, password: pass } = rawData;
    const user = await UserModel.findOne({ email });
    if (!user) {
      return { response: false, message: "Unregistered user!", data: null };
    }
    const isMatch = await bcrypt.compare(pass, user.password);
    if (!isMatch) {
      return { response: false, message: "Incorrect password!", data: null };
    }

    // user matched!
    const secretKey = process.env.SECRET_JWT || "";
    const token = jwt.sign({ user_id: user.id.toString() }, secretKey, {
      expiresIn: "24h",
    });

    const { password, _id } = user;

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

  static async addCard(rawData) {
    const check = this.checkValidation(rawData);
    if (!check) {
      return {
        response: false,
        message: "Send data validation error",
        data: null,
      };
    }
    rawData.created_at = Date.now();
    const result = await PaymentModel.create(rawData);
    if (!result) {
      return {
        response: false,
        message: "An error caused during creating new user",
        data: null,
      };
    }
    if (result.errors) {
      return { response: false, message: result.errors, data: null };
    }

    return { response: true, message: "Success!", data: result._id };
  }

  static async deleteUser(userId) {
    const result = await UserModel.deleteOne({ _id: userId });
    if (!result) {
      return {
        response: false,
        message: "The user does not exist.",
        data: null,
      };
    }
    console.log(result);
    if (result.deletedCount === 0) {
      return {
        response: false,
        message: "Failed to delete User",
        data: null,
      };
    }

    return { response: true, message: "Successfully deleted.", data: null };
  }

  static async deletePaymentMethod(paymentId, userId) {
        const user = await PaymentModel.findOne({
          user_id: userId,
        });
    
    if (user && userId != user.user_id) {
      return {
        response: false,
        message: "You are not authorize to delete this information",
        data: null,
      };
    }
      const result = await PaymentModel.deleteOne({ _id: paymentId });
      if (!result) {
        return {
          response: false,
          message: "The payment method does not exist.",
          data: null,
        };
      }
      console.log(result);
      if (result.deletedCount === 0) {
        return {
          response: false,
          message: "Failed to delete payment method",
          data: null,
        };
      }

    return { response: true, message: "Successfully deleted.", data: null };
  }
}

export default UserService;