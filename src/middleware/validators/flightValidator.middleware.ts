import { body, validationResult } from 'express-validator';

const createFlightSchema = [
  body("user_id")
    .exists()
    .withMessage("User Id is required")
    .isAlphanumeric()
    .withMessage("Wrong User ID")
    .trim(),
  function (req, res, next) {
    const errorValidation = validationResult(req);
    const errors = errorValidation.array();
    if (errors.length !== 0) {
      return res.send({ response: false, message: errors[0].msg });
    }
    next();
  },
  body("booking_type")
    .exists()
    .withMessage("Flight Booking Type is required")
    .isLength({ min: 4 })
    .withMessage("Must be at least 4 chars long")
    .isString()
    .withMessage("Must be a string")
    .notEmpty()
    .trim(),
  function (req, res, next) {
    const errorValidation = validationResult(req);
    const errors = errorValidation.array();
    if (errors.length !== 0) {
      return res.send({ response: false, message: errors[0].msg });
    }
    next();
  },

  body("flight_type")
    .exists()
    .withMessage("Flight Type is required")
    .isString()
    .withMessage("Must be a string")
    .notEmpty()
    .trim(),
  function (req, res, next) {
    const errorValidation = validationResult(req);
    const errors = errorValidation.array();
    if (errors.length !== 0) {
      return res.send({ response: false, message: errors[0].msg });
    }
    next();
  },
  body("date").exists().withMessage("Date is required").trim(),
  function (req, res, next) {
    const errorValidation = validationResult(req);
    const errors = errorValidation.array();
    if (errors.length !== 0) {
      return res.send({ response: false, message: errors[0].msg });
    }
    next();
  },

  body("booking_number")
    .exists()
    .withMessage("Booking Number is required")
    .notEmpty()
    .withMessage("Booking Number must be filled")
    .isNumeric()
    .withMessage("Booking Number must be type number")
    .notEmpty()
    .trim(),
  function (req, res, next) {
    const errorValidation = validationResult(req);
    const errors = errorValidation.array();
    if (errors.length !== 0) {
      return res.send({ response: false, message: errors[0].msg });
    }
    next();
  },
  body("location_from")
    .exists()
    .withMessage("Location from is required")
    .isLength({ max: 100 })
    .withMessage("Must be at least 100 chars long")
    .notEmpty()
    .trim(),
  function (req, res, next) {
    const errorValidation = validationResult(req);
    const errors = errorValidation.array();
    if (errors.length !== 0) {
      return res.send({ response: false, message: errors[0].msg });
    }
    next();
  },
  body("location_to")
    .exists()
    .withMessage("Location to is required")
    .isLength({ max: 100 })
    .withMessage("Must be at least 100 chars long")
    .notEmpty()
    .trim(),
  function (req, res, next) {
    const errorValidation = validationResult(req);
    const errors = errorValidation.array();
    if (errors.length !== 0) {
      return res.send({ response: false, message: errors[0].msg });
    }
    next();
  },
  body("flight_class")
    .exists()
    .withMessage("Flight class is required")
    .isLength({ min: 4 })
    .withMessage("Flight Company must be at least 4 chars long")
    .notEmpty()
    .trim(),
  function (req, res, next) {
    const errorValidation = validationResult(req);
    const errors = errorValidation.array();
    if (errors.length !== 0) {
      return res.send({ response: false, message: errors[0].msg });
    }
    next();
  },
  body("flight_company")
    .exists()
    .withMessage("Flight Company is required")
    .isLength({ min: 4 })
    .withMessage("Flight Company must be at least 4 chars long")
    .notEmpty()
    .trim(),
  function (req, res, next) {
    const errorValidation = validationResult(req);
    const errors = errorValidation.array();
    if (errors.length !== 0) {
      return res.send({ response: false, message: errors[0].msg });
    }
    next();
  },
  body("amount")
    .exists()
    .withMessage("Amount is required")
    .isNumeric()
    .withMessage("Booking Amount must be type number")
    .notEmpty()
    .trim(),
  function (req, res, next) {
    const errorValidation = validationResult(req);
    const errors = errorValidation.array();
    if (errors.length !== 0) {
      return res.send({ response: false, message: errors[0].msg });
    }
    next();
  },
  body("created_at").exists().withMessage("Created at is required").trim(),
  function (req, res, next) {
    const errorValidation = validationResult(req);
    const errors = errorValidation.array();
    if (errors.length !== 0) {
      return res.send({ response: false, message: errors[0].msg });
    }
    next();
  },
];
const updateFlightSchema = [
  body("flight_id")
    .exists()
    .withMessage("Flight Id is required")
    .isAlphanumeric()
    .withMessage("Wrong Flight ID")
    .trim(),
  function (req, res, next) {
    const errorValidation = validationResult(req);
    const errors = errorValidation.array();
    if (errors.length !== 0) {
      return res.send({ response: false, message: errors[0].msg });
    }
    next();
  },
  body("booking_type")
    .exists()
    .withMessage("Flight Booking Type is required")
    .isLength({ min: 4 })
    .withMessage("Must be at least 4 chars long")
    .isString()
    .withMessage("Must be a string")
    .notEmpty()
    .trim(),
  function (req, res, next) {
    const errorValidation = validationResult(req);
    const errors = errorValidation.array();
    if (errors.length !== 0) {
      return res.send({ response: false, message: errors[0].msg });
    }
    next();
  },

  body("flight_type")
    .exists()
    .withMessage("Flight Type is required")
    .isString()
    .withMessage("Must be a string")
    .notEmpty()
    .trim(),
  function (req, res, next) {
    const errorValidation = validationResult(req);
    const errors = errorValidation.array();
    if (errors.length !== 0) {
      return res.send({ response: false, message: errors[0].msg });
    }
    next();
  },
  body("date").exists().withMessage("Date is required").trim(),
  function (req, res, next) {
    const errorValidation = validationResult(req);
    const errors = errorValidation.array();
    if (errors.length !== 0) {
      return res.send({ response: false, message: errors[0].msg });
    }
    next();
  },

  body("booking_number")
    .exists()
    .withMessage("Booking Number is required")
    .notEmpty()
    .withMessage("Booking Number must be filled")
    .isNumeric()
    .withMessage("Booking Number must be type number")
    .notEmpty()
    .trim(),
  function (req, res, next) {
    const errorValidation = validationResult(req);
    const errors = errorValidation.array();
    if (errors.length !== 0) {
      return res.send({ response: false, message: errors[0].msg });
    }
    next();
  },
  body("location_from")
    .exists()
    .withMessage("Location from is required")
    .isLength({ max: 100 })
    .withMessage("Must be at least 100 chars long")
    .notEmpty()
    .trim(),
  function (req, res, next) {
    const errorValidation = validationResult(req);
    const errors = errorValidation.array();
    if (errors.length !== 0) {
      return res.send({ response: false, message: errors[0].msg });
    }
    next();
  },
  body("location_to")
    .exists()
    .withMessage("Location to is required")
    .isLength({ max: 100 })
    .withMessage("Must be at least 100 chars long")
    .notEmpty()
    .trim(),
  function (req, res, next) {
    const errorValidation = validationResult(req);
    const errors = errorValidation.array();
    if (errors.length !== 0) {
      return res.send({ response: false, message: errors[0].msg });
    }
    next();
  },
  body("flight_class")
    .exists()
    .withMessage("Flight class is required")
    .isLength({ min: 4 })
    .withMessage("Flight Company must be at least 4 chars long")
    .notEmpty()
    .trim(),
  function (req, res, next) {
    const errorValidation = validationResult(req);
    const errors = errorValidation.array();
    if (errors.length !== 0) {
      return res.send({ response: false, message: errors[0].msg });
    }
    next();
  },
  body("flight_company")
    .exists()
    .withMessage("Flight Company is required")
    .isLength({ min: 4 })
    .withMessage("Flight Company must be at least 4 chars long")
    .notEmpty()
    .trim(),
  function (req, res, next) {
    const errorValidation = validationResult(req);
    const errors = errorValidation.array();
    if (errors.length !== 0) {
      return res.send({ response: false, message: errors[0].msg });
    }
    next();
  },
  body("amount")
    .exists()
    .withMessage("Amount is required")
    .isNumeric()
    .withMessage("Booking Amount must be type number")
    .notEmpty()
    .trim(),
  function (req, res, next) {
    const errorValidation = validationResult(req);
    const errors = errorValidation.array();
    if (errors.length !== 0) {
      return res.send({ response: false, message: errors[0].msg });
    }
    next();
  },
];

const searchFlightSchema = [
  body("date").exists().withMessage("Date is required").trim(),
  function (req, res, next) {
    const errorValidation = validationResult(req);
    const errors = errorValidation.array();
    if (errors.length !== 0) {
      return res.send({ response: false, message: errors[0].msg });
    }
    next();
  },

  body("booking_number")
    .exists()
    .withMessage("Booking Number is required")
    .trim(),
  function (req, res, next) {
    const errorValidation = validationResult(req);
    const errors = errorValidation.array();
    if (errors.length !== 0) {
      return res.send({ response: false, message: errors[0].msg });
    }
    next();
  },
  body("location_from")
    .exists()
    .withMessage("Location from is required")
    .isLength({ max: 100 })
    .withMessage("Must be at least 100 chars long")
    .notEmpty()
    .trim(),
  function (req, res, next) {
    const errorValidation = validationResult(req);
    const errors = errorValidation.array();
    if (errors.length !== 0) {
      return res.send({ response: false, message: errors[0].msg });
    }
    next();
  },
  body("location_to")
    .exists()
    .withMessage("Location to is required")
    .isLength({ max: 100 })
    .withMessage("Must be at least 100 chars long")
    .notEmpty()
    .trim(),
  function (req, res, next) {
    const errorValidation = validationResult(req);
    const errors = errorValidation.array();
    if (errors.length !== 0) {
      return res.send({ response: false, message: errors[0].msg });
    }
    next();
  },
  
];

export { createFlightSchema, updateFlightSchema, searchFlightSchema };