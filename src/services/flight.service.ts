import { validationResult } from "express-validator";
import FlightModel from "../models/flight.model";



class FlightService {
  
  static async bookFlight(rawData) {
    const check = this.checkValidation(rawData);
    if (!check) {
      return {
        response: false,
        message: "Send data validation error",
        data: null,
      };
    }
    rawData.created_at = Date.now();
    const result = await FlightModel.create(rawData);
    if (!result) {
      return {
        response: false,
        message: "An error occur while adding new flight booking",
        data: null,
      };
    }
    if (result.errors) {
      return { response: false, message: result.errors, data: null };
    }

    return { response: true, message: "Success!", data: result._id };
  }

  static async updateFlightBooking(rawData) {
    const check = this.checkValidation(rawData);
    if (!check) {
      return {
        response: false,
        message: "Send data validation error",
        data: null,
      };
    }

    const flight = await FlightModel.findOne({ _id: rawData.flight_id });

    const result = await flight.updateOne({ ...rawData });

    if (!result) {
      return {
        response: false,
        message:
          "An error while updating an exiting flight booking order.",
        data: null,
      };
    }
    if (result.acknowledged) {
      return { response: true, message: "Successfully Updated!", data: null };
    } else {
      return { response: false, message: result, data: null };
    }
  }

  static async getFlightBookingById(flightId) {
    const flight = await FlightModel.findOne({ _id: flightId });
    if (!flight) {
      return {
        response: false,
        message: "Flight Booking not found",
        data: null,
      };
    }

    return { response: true, message: "Success", data: flight };
  }

  static async getAllFlightBookings() {
    const flightBookingList = await FlightModel.find();
    if (flightBookingList.length === 0) {
      return {
        response: false,
        message: "Flight Bookings not found",
        data: null,
      };
    }

    return { response: true, message: "Success", data: flightBookingList };
  }

  static async getFlightBookingByUserId(userId) {
    const flightBookingList = await FlightModel.find({ user_id: userId });
    if (flightBookingList.length === 0) {
      return {
        response: false,
        message: "Flight Bookings not found",
        data: null,
      };
    }

    return { response: true, message: "Success", data: flightBookingList };
  }

  static async deleteFlightBooking(paymentId, userId) {
    const user = await FlightModel.findOne({
      user_id: userId,
    });

    if (user && userId != user.user_id) {
      return {
        response: false,
        message: "You are not authorize to delete this information",
        data: null,
      };
    }
    const result = await FlightModel.deleteOne({ _id: paymentId });
    if (!result) {
      return {
        response: false,
        message: "The flight booking does not exist.",
        data: null,
      };
    }
    console.log(result);
    if (result.deletedCount === 0) {
      return {
        response: false,
        message: "Failed to delete flight booking",
        data: null,
      };
    }

    return { response: true, message: "Successfully deleted.", data: null };
  }

  static checkValidation(data) {
    const errors = validationResult(data);
    if (!errors.isEmpty()) {
      return false;
    }
    return true;
  }
}

export default FlightService;