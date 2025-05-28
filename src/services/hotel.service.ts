import { validationResult } from "express-validator";
import {HotelBookingModel, HotelModel, HotelRoomModel} from "../models/hotel.model";

class HotelService {

  //Hotel

  static async addHotel(rawData) {
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
        message: "An error occur while adding adding hotel",
        data: null,
      };
    }
    if (result.errors) {
      return { response: false, message: result.errors, data: null };
    }

    return { response: true, message: "Success!", data: result._id };
  }

  static async updateHotel(rawData) {
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
          "An error while updating an existing hotel.",
        data: null,
      };
    }
    if (result.acknowledged) {
      return { response: true, message: "Successfully Updated!", data: null };
    } else {
      return { response: false, message: result, data: null };
    }
  }

  static async deleteHotel(hotelId) {
    
    const result = await HotelModel.deleteOne({ _id: hotelId });
    if (!result) {
      return {
        response: false,
        message: "The hotel does not exist.",
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

  static async getHotelById(hotelId) {
    const hotel = await HotelModel.findOne({ _id: hotelId });
    if (!hotel) {
      return {
        response: false,
        message: "Hotel not found",
        data: null,
      };
    }

    return { response: true, message: "Success", data: hotel };
  }

  static async getAllHotel() {
    const hotelList = await HotelModel.find();
    if (hotelList.length === 0) {
      return {
        response: false,
        message: "Hotel not found",
        data: null,
      };
    }

    return { response: true, message: "Success", data: hotelList };
  }

    //Hotel Rooms

  static async addHotelRoom(rawData) {
      const check = this.checkValidation(rawData);
      if (!check) {
        return {
          response: false,
          message: "Send data validation error",
          data: null,
        };
      }
  
      rawData.created_at = Date.now();
      const result = await HotelRoomModel.create(rawData);
      if (!result) {
        return {
          response: false,
          message: "An error occur while adding adding hotel room",
          data: null,
        };
      }
      if (result.errors) {
        return { response: false, message: result.errors, data: null };
      }
  
      return { response: true, message: "Success!", data: result._id };
    }
  
  static async updateHotelRoom(rawData) {
      const check = this.checkValidation(rawData);
      if (!check) {
        return {
          response: false,
          message: "Send data validation error",
          data: null,
        };
      }
  
      const hotelroom = await HotelRoomModel.findOne({ _id: rawData.hotel_room_id });
  
      const result = await hotelroom.updateOne({ ...rawData });
  
      if (!result) {
        return {
          response: false,
          message:
            "An error white updating an existing hotel room.",
          data: null,
        };
      }
      if (result.acknowledged) {
        return { response: true, message: "Successfully Updated!", data: null };
      } else {
        return { response: false, message: result, data: null };
      }
    }

    static async deleteHotelRoom(hotelRoomId, adminId) {
      
      const result = await HotelRoomModel.deleteOne({ _id: hotelRoomId });
      if (!result) {
        return {
          response: false,
          message: "The hotel room does not exist.",
          data: null,
        };
      }
      console.log(result);
      if (result.deletedCount === 0) {
        return {
          response: false,
          message: "Failed to delete hotel room",
          data: null,
        };
      }
  
      return { response: true, message: "Successfully deleted.", data: null };
    }
  
    static async getHotelRoomById(hotelRoomId) {
      const hotelroom = await HotelRoomModel.findOne({ _id: hotelRoomId });
      if (!hotelroom) {
        return {
          response: false,
          message: "Hotel room not found",
          data: null,
        };
      }
  
      return { response: true, message: "Success", data: hotelroom };
    }
  
    static async getAllHotelRooms(hotelId) {
      const hotelRoomList = await HotelRoomModel.find();
      if (hotelRoomList.length === 0) {
        return {
          response: false,
          message: "Hotel not found",
          data: null,
        };
      }
  
      return { response: true, message: "Success", data: hotelRoomList };
    }

  //Hotel Booking
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
    const result = await HotelBookingModel.create(rawData);
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

  static async deleteHotelBooking(bookingId, userId) {
    const user = await HotelBookingModel.findOne({
      user_id: userId,
    });

    if (user && userId != user.user_id) {
      return {
        response: false,
        message: "You are not authorize to delete this information",
        data: null,
      };
    }
    const result = await HotelBookingModel.deleteOne({ _id: bookingId });
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

    const hotelbooking = await HotelBookingModel.findOne({ _id: rawData.hotel_booking_id });

    const result = await hotelbooking.updateOne({ ...rawData });

    if (!result) {
      return {
        response: false,
        message:
          "An error while updating an existing hotel booking order.",
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
    const hotel = await HotelBookingModel.findOne({ _id: hotelId });
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
    const hotelBookingList = await HotelBookingModel.find();
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
    const hotelBookingList = await HotelBookingModel.find({ user_id: userId });
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