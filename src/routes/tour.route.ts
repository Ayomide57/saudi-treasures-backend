import express from 'express';
import hotelController from '../controllers/hotel.controller';
import auth from '../middleware/auth.middleware';
import { bookHotelSchema, updateHotelSchema } from '../middleware/validators/hotelValidator.middleware';
import awaitHandlerFactory from '../middleware/awaitHandlerFactory.middleware';


const router = express.Router();

router.post('/book-hotel', bookHotelSchema, auth(), awaitHandlerFactory(hotelController.bookHotel));
router.get(
  "/booking/:id",
  auth(),
  awaitHandlerFactory(hotelController.getHotelBookingById)
);
router.get(
  "/user/booking/:user_id",
  auth(),
  awaitHandlerFactory(hotelController.getHotelBookingByUserId)
);
router.patch(
  "/update-hotel-booking",
  auth(),
  updateHotelSchema,
  awaitHandlerFactory(hotelController.updateHotelBooking)
);

router.delete(
    "/delete/:id",
    auth(),
    awaitHandlerFactory(hotelController.deleteHotelBooking)
);


export default router; 
