import { validationResult } from "express-validator";
import {} from "../models/tour.model";

class TourService {
    static checkValidation(data) {
        const errors = validationResult(data);
        if (!errors.isEmpty()) {
          return false;
        }
        return true;
      }
}