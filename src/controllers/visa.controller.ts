import dotenv from "dotenv";
import VisaService from "../services/visa.service";
dotenv.config();

/******************************************************************************
 *                              Visa Controller
 ******************************************************************************/
class VisaController {
  applyForVisa = async (req, res, next) => {
    try {
      console.log("User called apply For Visa !!!!");
      const visa = await VisaService.applyForVisa(req.body);

      if (visa.response) {
        res.send(visa);
      } else {
        res.send(visa);
      }
    } catch (error) {
      next(error);
    }
  };

  addVisaPackage = async (req, res, next) => {
    try {
      console.log("Admin called Visa !!!!");
      const visa = await VisaService.addVisaPackage(req.body);

      if (visa.response) {
        res.send(visa);
      } else {
        res.send(visa);
      }
    } catch (error) {
      next(error);
    }
  };

  getVisaByUserId = async (req, res, next) => {
    try {
      console.log("User called getAllVisasByUserId!!!!");
      const result = await VisaService.getVisaByUserId(
        req.params.user_id
      );
      res.send(result);
    } catch (error) {
      next(error);
    }
  };

  updateVisa = async (req, res, next) => {
    try {
      console.log("User called updateVisa!!!!");
      const result = await VisaService.updateVisa(req.body);
      res.send(result);
    } catch (error) {
      next(error);
    }
  };

  getVisaById = async (req, res, next) => {
    try {
      console.log("User called VisaById!!!!");
      const result = await VisaService.getVisaById(req.params.id);
      res.send(result);
    } catch (error) {
      next(error);
    }
  };

  deleteVisa = async (req, res, next) => {
    try {
      console.log("User called delete Visa!!!!");

      const result = await VisaService.deleteVisa(
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
export default new VisaController();
