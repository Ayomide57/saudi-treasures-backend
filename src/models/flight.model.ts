import mongoose from "mongoose";
import { IFlight } from "../utils/types";


export const FlightSchema = new mongoose.Schema({
    user_id: {type: String, required: true },
    booking_type: { type: String, required: true },
    flight_type: { type: String, required: true },
    date: { type: Date, required: true },
    booking_number: {type:Number, required: true},
    location_from: {type: String, required: true},
    location_to: {type: String, required: true},
    flight_class: {type: String, required: true},
    flight_company: {type: String, required: true},
    amount: { type: Number, required: true },
    created_at: { type: Date, required: true },
});

const FlightModel = mongoose.model<IFlight>('Flight', FlightSchema);
export default FlightModel;