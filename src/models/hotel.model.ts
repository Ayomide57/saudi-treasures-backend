
import mongoose from "mongoose";
import { IHotel } from "../utils/types";

export const HotelSchema = new mongoose.Schema({
  user_id: { type: String, required: true },
  room_type: { type: String, required: true },
  guests: { type: Number, required: true },
  check_in: { type: Date, required: true },
  check_out: { type: Date, required: true },
  reason: { type: String, required: true },
  amount: { type: Number, required: true },
  created_at: { type: Date, required: true },
});

const HotelModel = mongoose.model<IHotel>('Hotel', HotelSchema);

export default HotelModel;

