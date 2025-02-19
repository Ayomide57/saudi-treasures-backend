import mongoose from "mongoose";
import { IInvoice } from "../utils/types";


export const InvoiceSchema = new mongoose.Schema({
    invoice_type: { type: String, required: true },
    seen: {type: Boolean, required: true},
    reason: { type: String, required: true },
    created_at: { type: Date, required: true },
});

const Invoice = mongoose.model<IInvoice>('Invoice', InvoiceSchema);
export default Invoice;