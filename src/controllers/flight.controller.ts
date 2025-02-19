import dotenv from "dotenv";
import FlightService from "../services/flight.service";
dotenv.config();
import Amadeus from "amadeus";

/******************************************************************************
 *                              Flight Controller
 ******************************************************************************/
export const AMADEUS_SECRET = process.env.AMADEUS_SECRET
  ? process.env.AMADEUS_SECRET
  : "";
export const AMADEUS_KEY = process.env.AMADEUS_KEY
  ? process.env.AMADEUS_KEY
  : "";

export const amadeus = new Amadeus({
  clientId: AMADEUS_KEY,
  clientSecret: AMADEUS_SECRET,
});
class FlightController {
  bookFlight = async (req, res, next) => {
    try {
      console.log("User called book flight !!!!");
      const bookflight = await FlightService.bookFlight(req.body);

      if (bookflight.response) {
        res.send(bookflight);
      } else {
        res.send(bookflight);
      }
    } catch (error) {
      next(error);
    }
  };

  getFlightBookingByUserId = async (req, res, next) => {
    try {
      console.log("User called getAllFlightBookingsByUserId!!!!");
      const result = await FlightService.getFlightBookingByUserId(
        req.params.user_id
      );
      res.send(result);
    } catch (error) {
      next(error);
    }
  };

  updateFlightBooking = async (req, res, next) => {
    try {
      console.log("User called updateFlightBooking!!!!");
      const result = await FlightService.updateFlightBooking(req.body);
      res.send(result);
    } catch (error) {
      next(error);
    }
  };

  getFlightBookingById = async (req, res, next) => {
    try {
      console.log("User called FlightBookingById!!!!");
      const result = await FlightService.getFlightBookingById(req.params.id);
      res.send(result);
    } catch (error) {
      next(error);
    }
  };

  deleteFlightBooking = async (req, res, next) => {
    try {
      console.log("User called delete Flight Booking!!!!");

      const result = await FlightService.deleteFlightBooking(
        req.params.id,
        req.currentUser._id
      );
      res.send(result);
    } catch (error) {
      next(error);
    }
  };

  getSearchCityAndAirport = async (req, res, next) => {
    console.log("User called getSearchCityAndAirport!!!!");
    await amadeus.referenceData.locations
      .get({
        keyword: req.params.location,
        subType: Amadeus.location.any,
      })
      .then(function (response) {
        res.send({
          response: true,
          message: "Success!",
          data: response.result,
        });
      })
      .catch(function (response) {
        next({
          response: false,
          message: "Location not found",
          data: response,
        });
      });
  };

  searchFlight = async (req, res, next) => {
    console.log("User called getSearchFlight!!!!");
    await amadeus.shopping.flightOffersSearch
      .get({
        originLocationCode: `${req.body.location_from}`,
        destinationLocationCode: `${req.body.location_to}`,
        departureDate: `${req.body.date}`,
        adults: `${req.body.booking_number}`,
        max: "7",
      })
      .then(function (response) {
        res.send({
          response: true,
          message: "Success!",
          data: response.result,
        });
      })
      .catch(function (response) {
        console.log(`response: ${response.data}`);
        next({
          response: false,
          message: "Zero Flight Found",
          data: response,
        });
      });
  };
}

/******************************************************************************
 *                               Export
 ******************************************************************************/
export default new FlightController();
