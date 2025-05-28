import { body, validationResult } from 'express-validator';

const notificationSchema = [
  body("recipient_id")
    .exists()
    .withMessage("Recipient ID is required")
    .isAlphanumeric()
    .withMessage("Wrong Recipient ID")
    .trim(),
  function (req, res, next) {
    const errorValidation = validationResult(req);
    const errors = errorValidation.array();
    if (errors.length !== 0) {
      return res.send({ response: false, message: errors[0].msg });
    }
    next();
  },

  body("notification_type")
    .exists()
    .withMessage("Notification Type is required")
    .isString()
    .withMessage("Notification Type must be a string")
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

  body("read").exists().isBoolean().withMessage("Read must be of type boolean").withMessage("Read Recipient is required").trim(),
  function (req, res, next) {
    const errorValidation = validationResult(req);
    const errors = errorValidation.array();
    if (errors.length !== 0) {
      return res.send({ response: false, message: errors[0].msg });
    }
    next();
  },

  body("message")
    .exists()
    .withMessage("Message is required")
    .isLength({ min: 4 })
    .withMessage("Message mst be at least 3 chars long")
    .isLength({ max: 200 })
    .withMessage("Message must not exceed 50 characters")
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

const updateNotificationSchema = [
  body("notification_id")
    .exists()
    .withMessage("Notification ID is required")
    .isAlphanumeric()
    .withMessage("Wrong Recipient ID")
    .trim(),
  function (req, res, next) {
    const errorValidation = validationResult(req);
    const errors = errorValidation.array();
    if (errors.length !== 0) {
      return res.send({ response: false, message: errors[0].msg });
    }
    next();
  },

  body("read")
    .exists()
    .withMessage("Read Status is required")
    .isBoolean()
    .withMessage("Read Status must be of type boolean")
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



export { notificationSchema, updateNotificationSchema };