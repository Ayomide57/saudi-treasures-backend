import { body, validationResult } from 'express-validator';

const bookHotelSchema = [
     body('user_id')
        .exists()
        .withMessage('User Id is required')
        .isAlphanumeric()
        .withMessage('Wrong User ID')
        .trim(),
        function(req,res,next) { 
            const errorValidation = validationResult(req);
            const errors = errorValidation.array();
            if ( errors.length !== 0 ) {
                return res.send({response:false, message:errors[0].msg})
            }
            next()
    },
    
    body('room_type')
        .exists()
        .withMessage('Room Type is required')
        .isString()
        .withMessage('Room Type must be a string')
        .notEmpty()
        .trim(),
        function(req,res,next) { 
            const errorValidation = validationResult(req);
            const errors = errorValidation.array();
            if ( errors.length !== 0 ) {
                return res.send({response:false, message:errors[0].msg})
            }
            next()
    },
    body('guests')
        .exists()
        .withMessage('Guest is required')
        .notEmpty()
        .withMessage('Guest must be filled')
        .isNumeric()
        .withMessage('Guest must be type number')
        .trim(),
        function(req,res,next) { 
            const errorValidation = validationResult(req);
            const errors = errorValidation.array();
            if ( errors.length !== 0 ) {
                return res.send({response:false, message:errors[0].msg})
            }
            next()
    },
    body('check_in')
        .exists()
        .withMessage('check In is required')
        .trim(),
        function(req,res,next) { 
            const errorValidation = validationResult(req);
            const errors = errorValidation.array();
            if ( errors.length !== 0 ) {
                return res.send({response:false, message:errors[0].msg})
            }
            next()
    },
        body('check_out')
        .exists()
        .withMessage('Check Out is required')
        .trim(),
        function(req,res,next) { 
            const errorValidation = validationResult(req);
            const errors = errorValidation.array();
            if ( errors.length !== 0 ) {
                return res.send({response:false, message:errors[0].msg})
            }
            next()
    },
    body('reason')
        .exists()
        .withMessage('Reason is required')
        .isLength({min: 4 })
        .withMessage('Must be at least 3 chars long')
        .isLength({max: 200 })
        .withMessage('Must not exceed 50 characters')
        .notEmpty()
        .trim(),
        function(req,res,next) { 
            const errorValidation = validationResult(req);
            const errors = errorValidation.array();
            if ( errors.length !== 0 ) {
                return res.send({response:false, message:errors[0].msg})
            }
            next()
    },
       body('created_at')
        .exists()
        .withMessage('Created at is required')
        .trim(),
        function(req,res,next) { 
            const errorValidation = validationResult(req);
            const errors = errorValidation.array();
            if ( errors.length !== 0 ) {
                return res.send({response:false, message:errors[0].msg})
            }
            next()
    },
];

const updateHotelSchema = [
  body("hotel_id")
    .exists()
    .withMessage("Hotel Id is required")
    .isAlphanumeric()
    .withMessage("Wrong Hotel ID")
    .trim(),
  function (req, res, next) {
    const errorValidation = validationResult(req);
    const errors = errorValidation.array();
    if (errors.length !== 0) {
      return res.send({ response: false, message: errors[0].msg });
    }
    next();
  },
  body("room_type")
    .exists()
    .withMessage("Room Type is required")
    .isString()
    .withMessage("Room Type must be a string")
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
  body("guests")
    .exists()
    .withMessage("Guest is required")
    .notEmpty()
    .withMessage("Guest must be filled")
    .isNumeric()
    .withMessage("Guest must be type number")
    .trim(),
  function (req, res, next) {
    const errorValidation = validationResult(req);
    const errors = errorValidation.array();
    if (errors.length !== 0) {
      return res.send({ response: false, message: errors[0].msg });
    }
    next();
  },
  body("check_in").exists().withMessage("check In is required").trim(),
  function (req, res, next) {
    const errorValidation = validationResult(req);
    const errors = errorValidation.array();
    if (errors.length !== 0) {
      return res.send({ response: false, message: errors[0].msg });
    }
    next();
  },
  body("check_out").exists().withMessage("Check Out is required").trim(),
  function (req, res, next) {
    const errorValidation = validationResult(req);
    const errors = errorValidation.array();
    if (errors.length !== 0) {
      return res.send({ response: false, message: errors[0].msg });
    }
    next();
  },
  body("reason")
    .exists()
    .withMessage("Reason is required")
    .isLength({ min: 4 })
    .withMessage("Must be at least 3 chars long")
    .isLength({ max: 200 })
    .withMessage("Must not exceed 50 characters")
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

export { bookHotelSchema, updateHotelSchema };