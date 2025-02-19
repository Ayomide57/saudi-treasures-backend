import dotenv from "dotenv";
import HotelService from "../services/hotel.service";
dotenv.config();

/******************************************************************************
 *                              Hotel Controller
 ******************************************************************************/
class HotelController {
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
