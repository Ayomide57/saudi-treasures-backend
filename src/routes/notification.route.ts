import express from "express";
import noticationController from "../controllers/notification.controller";
import auth from "../middleware/auth.middleware";
import {
  notificationSchema,
  updateNotificationSchema,
} from "../middleware/validators/notificationValidator.middleware";
import awaitHandlerFactory from "../middleware/awaitHandlerFactory.middleware";

const router = express.Router();

router.post(
  "/add-notification",
  notificationSchema,
  auth(),
  awaitHandlerFactory(noticationController.addNotification)
);
router.get(
  "/fetch/:id",
  auth(),
  awaitHandlerFactory(noticationController.getNotificationById)
);
router.get(
  "/user/notification/:user_id",
  auth(),
  awaitHandlerFactory(noticationController.getNotificationByUserId)
);
router.patch(
  "/update-notification",
  auth(),
  updateNotificationSchema,
  awaitHandlerFactory(noticationController.updateNotification)
);
router.delete(
  "/delete/:id",
  auth(),
  awaitHandlerFactory(noticationController.deleteNotification)
);

export default router;
