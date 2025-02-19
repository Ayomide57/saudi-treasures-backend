import express from 'express';
import flightController from '../controllers/flight.controller';
import auth from '../middleware/auth.middleware';
import {
  createFlightSchema,
  updateFlightSchema,
  searchFlightSchema,
} from "../middleware/validators/flightValidator.middleware";
import awaitHandlerFactory from '../middleware/awaitHandlerFactory.middleware';


const router = express.Router();


router.post('/book-flight', createFlightSchema, auth(), awaitHandlerFactory(flightController.bookFlight));
router.get('/booking/:id', auth(), awaitHandlerFactory(flightController.getFlightBookingById));
router.get('/user/booking/:user_id', auth(), awaitHandlerFactory(flightController.getFlightBookingByUserId));
router.patch('/update-flight-booking', auth(), updateFlightSchema, awaitHandlerFactory(flightController.updateFlightBooking));
router.get(
  "/search-location/:location",
  auth(),
  awaitHandlerFactory(flightController.getSearchCityAndAirport)
);
router.post(
  "/search-flight",
  searchFlightSchema,
  auth(),
  awaitHandlerFactory(flightController.searchFlight)
);

router.delete(
  "/delete/:id",
  auth(),
  awaitHandlerFactory(flightController.deleteFlightBooking)
);



export default router; 
