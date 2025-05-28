import { body, validationResult } from 'express-validator';

const createAdminSchema = [
    body('username')
        .exists()
        .withMessage('Username is required')
        .isLength({min: 4 })
        .withMessage('Username Must be at least 3 chars long')
        .isLength({max: 50 })
        .withMessage('Username Must not exceed 50 characters')
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
    body('fullname')
        .exists()
        .withMessage('Fullname is required')
        .isLength({min: 4 })
        .withMessage('Fullname Must be at least 3 chars long')
        .isLength({max: 50 })
        .withMessage('Fullname Must not exceed 50 characters')
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
        body('role')
        .exists()
        .withMessage('Role is required')
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
        
    body('email')
        .exists()
        .withMessage('Email is required')
        .isEmail()
        .withMessage('Must be a valid email')
        .isLength({max: 50 })
        .withMessage('Email should contain less than 50 characters')
        .normalizeEmail()
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
    
    body('password')
        .exists()
        .withMessage('Password is required')
        .notEmpty()
        .withMessage('Password must be filled')
        .isLength({ min: 8 })
        .withMessage('Password must contain at least 8 characters')
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

const updateAdminSchema = [
  body("username")
    .exists()
    .withMessage("Username is required")
    .isLength({ min: 4 })
    .withMessage("Username Must be at least 3 chars long")
    .isLength({ max: 50 })
    .withMessage("Username Must not exceed 50 characters")
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
  body("fullname")
    .exists()
    .withMessage("Fullname is required")
    .isLength({ min: 4 })
    .withMessage("Must be at least 3 chars long")
    .isLength({ max: 50 })
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
  body("role").exists().withMessage("Role is required").notEmpty().trim(),
  function (req, res, next) {
    const errorValidation = validationResult(req);
    const errors = errorValidation.array();
    if (errors.length !== 0) {
      return res.send({ response: false, message: errors[0].msg });
    }
    next();
  },
];

const validateLogin = [
    body('email')
        .exists()
        .withMessage('Email is required')
        .isEmail()
        .withMessage('Must be a valid email')
        .isLength({max: 50 })
        .withMessage('Invite code should contain 50 characters')
        .normalizeEmail(),
        function(req,res,next) { 
            const errorValidation = validationResult(req);
            const errors = errorValidation.array();
            if ( errors.length !== 0 ) {
                return res.send({response:false, message:errors[0].msg})
            }
            next()
        },
    body('password')
        .exists()
        .withMessage('Password is required')
        .notEmpty()
        .withMessage('Password must be filled')
        .isLength({ min: 8 })
        .withMessage('Password must contain at least 8 characters'),
        function(req,res,next) { 
            const errorValidation = validationResult(req);
            const errors = errorValidation.array();
            if ( errors.length !== 0 ) {
                return res.send({response:false, message:errors[0].msg})
            }
            next()
        },
];







export {createAdminSchema,updateAdminSchema, validateLogin }