
import mongoose from "mongoose";
import { IHotel, IHotelBooking, IHotelRoom } from "../utils/types";

export const HotelSchema = new mongoose.Schema({
  hotel_name: { type: String, required: true },
  address: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  image: { type: String, required: true },
  created_at: { type: Date, required: true },
});

export const HotelRoomSchema = new mongoose.Schema({
  hotel_id: { type: String, required: true },
  room_type: { type: String, required: true },
  price: { type: Number, required: true },
  guests: { type: Number, required: true },
  image: { type: String, required: true },
  created_at: { type: Date, required: true },
});

export const HotelBookingSchema = new mongoose.Schema({
  user_id: { type: String, required: true },
  room_type: { type: String, required: true },
  guests: { type: Number, required: true },
  check_in: { type: Date, required: true },
  check_out: { type: Date, required: true },
  reason: { type: String, required: true },
  amount: { type: Number, required: true },
  created_at: { type: Date, required: true },
});

const HotelBookingModel = mongoose.model<IHotelBooking>('HotelBooking', HotelBookingSchema);
const HotelRoomModel = mongoose.model<IHotelRoom>('HotelRoomSchema', HotelRoomSchema);
const HotelModel = mongoose.model<IHotel>('Hotel', HotelSchema);

export {HotelModel,HotelBookingModel, HotelRoomModel}

//export default HotelModel;

