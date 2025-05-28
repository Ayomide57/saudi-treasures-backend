import { validationResult } from "express-validator";
import {VisaModel, VisaPackageModel} from "../models/visa.model";

class VisaService {

  static async applyForVisa(rawData) {
    const check = this.checkValidation(rawData);
    if (!check) {
      return {
        response: false,
        message: "Send data validation error",
        data: null,
      };
    }

    rawData.created_at = Date.now();
    const result = await VisaModel.create(rawData);
    if (!result) {
      return {
        response: false,
        message: "An error occur while adding new visa",
        data: null,
      };
    }
    if (result.errors) {
      return { response: false, message: result.errors, data: null };
    }

    return { response: true, message: "Success!", data: result._id };
  }

  static async deleteVisa(visaId, userId) {
    const visa = await VisaModel.findOne({
      user_id: userId,
    });

    if (visa && userId != visa.user_id) {
      return {
        response: false,
        message: "You are not authorize to delete this information",
        data: null,
      };
    }
    const result = await VisaModel.deleteOne({ _id: visaId });
    if (!result) {
      return {
        response: false,
        message: "The visa information does not exist.",
        data: null,
      };
    }
    console.log(result);
    if (result.deletedCount === 0) {
      return {
        response: false,
        message: "Failed to delete visa",
        data: null,
      };
    }

    return { response: true, message: "Successfully deleted.", data: null };
  }

  static async updateVisa(rawData) {
    const check = this.checkValidation(rawData);
    if (!check) {
      return {
        response: false,
        message: "Send data validation error",
        data: null,
      };
    }

    const visa = await VisaModel.findOne({
      _id: rawData.visa_id,
    });

    const result = await visa.updateOne({ ...rawData });

    if (!result) {
      return {
        response: false,
        message: "An error while updating an exiting visa.",
        data: null,
      };
    }
    if (result.acknowledged) {
      return { response: true, message: "Successfully Updated!", data: null };
    } else {
      return { response: false, message: result, data: null };
    }
  }

  static async getVisaById(visaId) {
    const visa = await VisaModel.findOne({
      _id: visaId,
    });
    if (!visa) {
      return {
        response: false,
        message: "Visa Information not found",
        data: null,
      };
    }

    return { response: true, message: "Success", data: visa };
  }

  static async getAllVisas() {
    const VisaList = await VisaModel.find();
    if (VisaList.length === 0) {
      return {
        response: false,
        message: "Visa Information not found",
        data: null,
      };
    }

    return { response: true, message: "Success", data: VisaList };
  }

  static async getVisaByUserId(userId) {
    const VisaList = await VisaModel.find({
      user_id: userId,
    });
    console.log(userId);
    if (VisaList.length === 0) {
      return {
        response: false,
        message: "Visa Information not found",
        data: null,
      };
    }

    return { response: true, message: "Success", data: VisaList };
  }

  // Visa Packages

  static async addVisaPackage(rawData) {
    const check = this.checkValidation(rawData);
    if (!check) {
      return {
        response: false,
        message: "Send data validation error",
        data: null,
      };
    }

    rawData.created_at = Date.now();
    const result = await VisaPackageModel.create(rawData);
    if (!result) {
      return {
        response: false,
        message: "An error occur while adding new visa package",
        data: null,
      };
    }
    if (result.errors) {
      return { response: false, message: result.errors, data: null };
    }

    return { response: true, message: "Success!", data: result._id };
  }

  static async deleteVisaPackage(visaPackageId) {
   
    const result = await VisaPackageModel.deleteOne({ _id: visaPackageId });
    if (!result) {
      return {
        response: false,
        message: "The visa package information does not exist.",
        data: null,
      };
    }
    console.log(result);
    if (result.deletedCount === 0) {
      return {
        response: false,
        message: "Failed to delete visa pakage",
        data: null,
      };
    }

    return { response: true, message: "Successfully deleted.", data: null };
  }

  static async updateVisaPackage(rawData) {
    const check = this.checkValidation(rawData);
    if (!check) {
      return {
        response: false,
        message: "Send data validation error",
        data: null,
      };
    }

    const visaPackage = await VisaPackageModel.findOne({
      _id: rawData.visa_package_id,
    });

    const result = await visaPackage.updateOne({ ...rawData });

    if (!result) {
      return {
        response: false,
        message: "An error while updating an exiting visa package.",
        data: null,
      };
    }
    if (result.acknowledged) {
      return { response: true, message: "Successfully Updated!", data: null };
    } else {
      return { response: false, message: result, data: null };
    }
  }

  static checkValidation(data) {
      const errors = validationResult(data);
      if (!errors.isEmpty()) {
        return false;
      }
      return true;
  }
}

export default VisaService;