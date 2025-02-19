
import mongoose from "mongoose";
import { IPayment } from "../utils/types";


export const PaymentSchema = new mongoose.Schema({
    user_id: {type: String, required: true },
    card_number: {type: Number, required: true},
    expiry_date: {type: String, required: true },
    cvv: { type: Number, required: true },
    created_at: { type: Date, required: true },
});

const PaymentModel = mongoose.model<IPayment>('Payment', PaymentSchema);
export default PaymentModel;

