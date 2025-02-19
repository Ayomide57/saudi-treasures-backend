import mongoose from "mongoose";
import { IUser } from "../utils/types";


export const UserSchema = new mongoose.Schema({
    fullname: { type: String, required: true },
    email: {type:String, required: true},
    phonenumber: {type:Number, required: true},
    gender: { type: String, required: true },
    password: { type: String, required: true },
    country: {type:String, required: true},
    state: { type: String, required: true },
    created_at: { type: Date, required: true },
});

const User = mongoose.model<IUser>('User', UserSchema);
export default User;