import dotenv from "dotenv";
import NoticationService from "../services/notification.service";
dotenv.config();

/******************************************************************************
 *                              Notification Controller
 ******************************************************************************/
class NotificationController {
  addNotification = async (req, res, next) => {
    try {
      console.log("User called Notification !!!!");
      const notification = await NoticationService.addNotification(req.body);

      if (notification.response) {
        res.send(notification);
      } else {
        res.send(notification);
      }
    } catch (error) {
      next(error);
    }
  };

  getNotificationByUserId = async (req, res, next) => {
    try {
      console.log("User called getAllNotificationsByUserId!!!!");
      const result = await NoticationService.getNotificationByUserId(
        req.params.user_id
      );
      res.send(result);
    } catch (error) {
      next(error);
    }
  };

  updateNotification = async (req, res, next) => {
    try {
      console.log("User called updateNotification!!!!");
      const result = await NoticationService.updateNotification(req.body);
      res.send(result);
    } catch (error) {
      next(error);
    }
  };

  getNotificationById = async (req, res, next) => {
    try {
      console.log("User called NotificationById!!!!");
      const result = await NoticationService.getNotificationById(req.params.id);
      res.send(result);
    } catch (error) {
      next(error);
    }
  };

  deleteNotification = async (req, res, next) => {
    try {
      console.log("User called delete Notification!!!!");

      const result = await NoticationService.deleteNotification(
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
export default new NotificationController();
