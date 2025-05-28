import mongoose from "mongoose";
import { IVisa, IVisaPackage } from "../utils/types";


export const VisaSchema = new mongoose.Schema({
    user_id: { type: String, required: true },
    visa_type: { type: String, required: true },
    package_id: { type: String, required: true },
    created_at: { type: Date, required: true },
});

export const VisaPackagesSchema = new mongoose.Schema({
    name: { type: String, required: true },
    country: { type: String, required: true },
    duration: { type: Number, required: true },
    processing_time: { type: Number, required: true },
    amount: { type: String, required: true },
    created_at: { type: Date, required: true },
});

const VisaModel = mongoose.model<IVisa>('Visa', VisaSchema);
const VisaPackageModel = mongoose.model<IVisaPackage>('VisaPackage', VisaPackagesSchema);

export {VisaModel, VisaPackageModel}

//export default Visa;