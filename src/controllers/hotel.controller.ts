import dotenv from "dotenv";
import HotelService from "../services/hotel.service";
dotenv.config();

/******************************************************************************
 *                              Hotel Controller
 ******************************************************************************/
class HotelController {

  // add Hotel

  addHotel = async (req, res, next) => {
    try {
      console.log("Admin called add hotel !!!!");
      const hotel = await HotelService.addHotel(req.body);

      if (hotel.response) {
        res.send(hotel);
      } else {
        res.send(hotel);
      }
    } catch (error) {
      next(error);
    }
  };

  updateHotel = async (req, res, next) => {
    try {
      console.log("User called updateHotel!!!!");
      const result = await HotelService.updateHotel(req.body);
      res.send(result);
    } catch (error) {
      next(error);
    }
  };

  getHotelById = async (req, res, next) => {
    try {
      console.log("User called HotelById!!!!");
      const result = await HotelService.getHotelById(req.params.id);
      res.send(result);
    } catch (error) {
      next(error);
    }
  };

  deleteHotel = async (req, res, next) => {
    try {
      console.log("User called delete Hotel !!!!");

      const result = await HotelService.deleteHotel(
        req.params.id
      );
      res.send(result);
    } catch (error) {
      next(error);
    }
  };

  // add hotel rooms

  addHotelRoom = async (req, res, next) => {
    try {
      console.log("Admin called add hotel !!!!");
      const hotelroom = await HotelService.addHotelRoom(req.body);

      if (hotelroom.response) {
        res.send(hotelroom);
      } else {
        res.send(hotelroom);
      }
    } catch (error) {
      next(error);
    }
  };

  updateRoom = async (req, res, next) => {
    try {
      console.log("User called update Hotel Room !!!!");
      const result = await HotelService.updateHotelRoom(req.body);
      res.send(result);
    } catch (error) {
      next(error);
    }
  };

  getHotelRoomById = async (req, res, next) => {
    try {
      console.log("User called HotelById!!!!");
      const result = await HotelService.getHotelRoomById(req.params.id);
      res.send(result);
    } catch (error) {
      next(error);
    }
  };

  deleteHotelRoom = async (req, res, next) => {
    try {
      console.log("User called delete Hotel !!!!");

      const result = await HotelService.deleteHotelRoom(
        req.params.id,
        req.currentUser._id
      );
      res.send(result);
    } catch (error) {
      next(error);
    }
  };

  //Hotel Booking

  bookHotel = async (req, res, next) => {
    try {
      console.log("User called book hotel !!!!");
      const bookHotel = await HotelService.addHotelBooking(req.body);

      if (bookHotel.response) {
        res.send(bookHotel);
      } else {
        res.send(bookHotel);
      }
    } catch (error) {
      next(error);
    }
  };

  getHotelBookingByUserId = async (req, res, next) => {
    try {
      console.log("User called getAllHotelBookingsByUserId!!!!");
      const result = await HotelService.getHotelBookingByUserId(
        req.params.user_id
      );
      res.send(result);
    } catch (error) {
      next(error);
    }
  };

  updateHotelBooking = async (req, res, next) => {
    try {
      console.log("User called updateHotelBooking!!!!");
      const result = await HotelService.updateHotelBooking(req.body);
      res.send(result);
    } catch (error) {
      next(error);
    }
  };

  getHotelBookingById = async (req, res, next) => {
    try {
      console.log("User called HotelBookingById!!!!");
      const result = await HotelService.getHotelBookingById(req.params.id);
      res.send(result);
    } catch (error) {
      next(error);
    }
  };

  deleteHotelBooking = async (req, res, next) => {
    try {
      console.log("User called delete Hotel Booking!!!!");

      const result = await HotelService.deleteHotelBooking(
        req.params.id,
        req.currentUser._id
      );
      res.send(result);
    } catch (error) {
      next(error);
    }
  };
}

/******************************************************************************
 *                               Export
 ******************************************************************************/
export default new HotelController();
