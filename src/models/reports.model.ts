import mongoose from "mongoose";
import { IReport } from "../utils/types";


export const ReportSchema = new mongoose.Schema({
    user_id: { type: String, required: true },
    report: {type: String, required: true},
    created_at: { type: Date, required: true },
});

const ReportModel = mongoose.model<IReport>('Report', ReportSchema);
export default ReportModel;