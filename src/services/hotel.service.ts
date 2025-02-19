import { validationResult } from "express-validator";
import HotelModel from "../models/hotel.model";

class HotelService {
  static async addHotelBooking(rawData) {
    const check = this.checkValidation(rawData);
    if (!check) {
      return {
        response: false,
        message: "Send data validation error",
        data: null,
      };
    }

    rawData.created_at = Date.now();
    const result = await HotelModel.create(rawData);
    if (!result) {
      return {
        response: false,
        message: "An error occur while adding new hotel booking",
        data: null,
      };
    }
    if (result.errors) {
      return { response: false, message: result.errors, data: null };
    }

    return { response: true, message: "Success!", data: result._id };
  }

  static async deleteHotelBooking(paymentId, userId) {
    const user = await HotelModel.findOne({
      user_id: userId,
    });

    if (user && userId != user.user_id) {
      return {
        response: false,
        message: "You are not authorize to delete this information",
        data: null,
      };
    }
    const result = await HotelModel.deleteOne({ _id: paymentId });
    if (!result) {
      return {
        response: false,
        message: "The hotel booking does not exist.",
        data: null,
      };
    }
    console.log(result);
    if (result.deletedCount === 0) {
      return {
        response: false,
        message: "Failed to delete hotel booking",
        data: null,
      };
    }

    return { response: true, message: "Successfully deleted.", data: null };
  }

  static async updateHotelBooking(rawData) {
    const check = this.checkValidation(rawData);
    if (!check) {
      return {
        response: false,
        message: "Send data validation error",
        data: null,
      };
    }

    const hotel = await HotelModel.findOne({ _id: rawData.hotel_id });

    const result = await hotel.updateOne({ ...rawData });

    if (!result) {
      return {
        response: false,
        message:
          "An error caused during updating an exiting hotel booking order.",
        data: null,
      };
    }
    if (result.acknowledged) {
      return { response: true, message: "Successfully Updated!", data: null };
    } else {
      return { response: false, message: result, data: null };
    }
  }

  static async getHotelBookingById(hotelId) {
    const hotel = await HotelModel.findOne({ _id: hotelId });
    if (!hotel) {
      return {
        response: false,
        message: "Hotel Booking not found",
        data: null,
      };
    }

    return { response: true, message: "Success", data: hotel };
  }

  static async getAllHotelBookings() {
    const hotelBookingList = await HotelModel.find();
    if (hotelBookingList.length === 0) {
      return {
        response: false,
        message: "Hotel Bookings not found",
        data: null,
      };
    }

    return { response: true, message: "Success", data: hotelBookingList };
  }

  static async getHotelBookingByUserId(userId) {
    const hotelBookingList = await HotelModel.find({ user_id: userId });
    if (hotelBookingList.length === 0) {
      return {
        response: false,
        message: "Hotel Bookings not found",
        data: null,
      };
    }

    return { response: true, message: "Success", data: hotelBookingList };
  }

  static checkValidation(data) {
    const errors = validationResult(data);
    if (!errors.isEmpty()) {
      return false;
    }
    return true;
  }
}

export default HotelService;