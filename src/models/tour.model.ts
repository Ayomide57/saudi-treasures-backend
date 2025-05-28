
import mongoose from "mongoose";
import { ITour } from "../utils/types";

export const TourSchema = new mongoose.Schema({
  package_name: { type: String, required: true },
  package_types: { type: String, required: true },
  service_types: { type: String, required: true },
  created_at: { type: Date, required: true },
});

export const TourServiceSchema = new mongoose.Schema({
  service_name: { type: String, required: true },
  amount: { type: Number, required: true },
  options: { type: String, required: true },
  created_at: { type: Date, required: true },
});

export const TourOptionsSchema = new mongoose.Schema({
  service_name: { type: String, required: true },
  option: { type: String, required: true },
  created_at: { type: Date, required: true },
});

export const TourBookingSchema = new mongoose.Schema({
  user_id: { type: String, required: true },
  package: { type: String, required: true },
  type: { type: String, required: true },
  service_type: { type: String, required: true },
  amount: { type: Number, required: true },
  created_at: { type: Date, required: true },
});

const TourModel = mongoose.model<ITour>('Tour', TourSchema);
const TourServiceModel = mongoose.model<ITour>('TourService', TourServiceSchema);
const TourOptionModel = mongoose.model<ITour>('TourOption', TourOptionsSchema);
const TourBookingModel = mongoose.model<ITour>('TourBooking', TourBookingSchema);

export {TourServiceModel, TourOptionModel, TourBookingModel}


export default TourModel;

