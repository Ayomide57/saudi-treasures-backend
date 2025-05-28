import { validationResult } from "express-validator";
import NotificationModel from "../models/notification.model";

class NotificationService {
  static async addNotification(rawData) {
    const check = this.checkValidation(rawData);
    if (!check) {
      return {
        response: false,
        message: "Send data validation error",
        data: null,
      };
    }

    rawData.created_at = Date.now();
    const result = await NotificationModel.create(rawData);
    if (!result) {
      return {
        response: false,
        message: "An error occur while adding new notification",
        data: null,
      };
    }
    if (result.errors) {
      return { response: false, message: result.errors, data: null };
    }

    return { response: true, message: "Success!", data: result._id };
  }

  static async deleteNotification(paymentId, userId) {
    const notification = await NotificationModel.findOne({
      user_id: userId,
    });

    if (notification && userId != notification.recipient_id) {
      return {
        response: false,
        message: "You are not authorize to delete this information",
        data: null,
      };
    }
    const result = await NotificationModel.deleteOne({ _id: paymentId });
    if (!result) {
      return {
        response: false,
        message: "The notification does not exist.",
        data: null,
      };
    }
    console.log(result);
    if (result.deletedCount === 0) {
      return {
        response: false,
        message: "Failed to delete notification",
        data: null,
      };
    }

    return { response: true, message: "Successfully deleted.", data: null };
  }

  static async updateNotification(rawData) {
    const check = this.checkValidation(rawData);
    if (!check) {
      return {
        response: false,
        message: "Send data validation error",
        data: null,
      };
    }

    const notification = await NotificationModel.findOne({
      _id: rawData.hotel_id,
    });

    const result = await notification.updateOne({ ...rawData });

    if (!result) {
      return {
        response: false,
        message: "An error while updating an exiting notification.",
        data: null,
      };
    }
    if (result.acknowledged) {
      return { response: true, message: "Successfully Updated!", data: null };
    } else {
      return { response: false, message: result, data: null };
    }
  }

  static async getNotificationById(notificationId) {
    const notification = await NotificationModel.findOne({
      _id: notificationId,
    });
    if (!notification) {
      return {
        response: false,
        message: "Notification not found",
        data: null,
      };
    }

    return { response: true, message: "Success", data: notification };
  }

  static async getAllNotifications() {
    const NotificationList = await NotificationModel.find();
    if (NotificationList.length === 0) {
      return {
        response: false,
        message: "Notification not found",
        data: null,
      };
    }

    return { response: true, message: "Success", data: NotificationList };
  }

  static async getNotificationByUserId(userId) {
    const NotificationList = await NotificationModel.find({
      recipient_id: userId,
    });
    console.log(userId);
    if (NotificationList.length === 0) {
      return {
        response: false,
        message: "Notification not found",
        data: null,
      };
    }

    return { response: true, message: "Success", data: NotificationList };
  }

  static checkValidation(data) {
    const errors = validationResult(data);
    if (!errors.isEmpty()) {
      return false;
    }
    return true;
  }
}

export default NotificationService;