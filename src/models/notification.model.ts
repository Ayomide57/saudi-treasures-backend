import mongoose from "mongoose";
import { INotification } from "../utils/types";

export const NotificationSchema = new mongoose.Schema({
    recipient_id: { type: String, required: true },
    notification_type: { type: String, required: true },
    message: { type: String, required: true },
    read: { type: Boolean, required: true },
    delete: {type: Boolean, required: true},
    created_at: { type: Date, required: true },
});

const Notification = mongoose.model<INotification>('Notification', NotificationSchema);
export default Notification;