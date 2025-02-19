
import mongoose from "mongoose";
import { IEmailVerify } from "../utils/types";


export const EmailVerifySchema = new mongoose.Schema({
    email: {type:String, required: true},
    verify_code: {type:String, required: true},
});

const EmailVerifyModel = mongoose.model<IEmailVerify>('EmailVerify', EmailVerifySchema);
export default EmailVerifyModel;

