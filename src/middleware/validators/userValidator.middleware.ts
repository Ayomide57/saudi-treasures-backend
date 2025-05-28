import { body, validationResult } from 'express-validator';
import valid from 'card-validator';

const createUserSchema = [
    body('fullname')
        .exists()
        .withMessage('Fullname is required')
        .isLength({min: 4 })
        .withMessage('Must be at least 3 chars long')
        .isLength({max: 50 })
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
        body('confirm_password')
        .exists()
        .withMessage('Confirm Password is required')
        .custom((value, { req }) => value === req.body.password)
        .withMessage('confirm_password field must have the same value as the password field'),
        function(req,res,next) { 
             const errorValidation = validationResult(req);
            const errors = errorValidation.array();
            if ( errors.length !== 0 ) {
                return res.send({response:false, message:errors[0].msg})
            }
            next()
        },
    body('phonenumber')
        .exists()
        .withMessage('Phone number is required')
        .isMobilePhone('any', { strictMode: true })
        .withMessage('Please Type a valid phone number')
        .isLength({ min: 3 })
        .withMessage('Must be at least 11 chars long')
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
    body('gender')
        .exists()
        .withMessage('gender is required')
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
    body('country')
        .exists()
        .withMessage('Country is required')
        .isLength({min: 4 })
        .withMessage('Must be at least 3 chars long')
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
        body('state')
        .exists()
        .withMessage('State is required')
        .isLength({min: 4 })
        .withMessage('Must be at least 3 chars long')
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

const updateUserSchema = [
    body('fullname')
        .exists()
        .withMessage('Fullname is required')
        .isLength({min: 4 })
        .withMessage('Must be at least 3 chars long')
        .isLength({max: 50 })
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
        
    body('phonenumber')
        .exists()
        .withMessage('Phone number is required')
        .isMobilePhone('any', { strictMode: true })
        .withMessage('Please Type a valid phone number')
        .isLength({ min: 3 })
        .withMessage('Must be at least 11 chars long')
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
    body('gender')
        .exists()
        .withMessage('gender is required')
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
        body('country')
        .exists()
        .withMessage('Country is required')
        .isLength({min: 4 })
        .withMessage('Must be at least 3 chars long')
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
        body('state')
        .exists()
        .withMessage('State is required')
        .isLength({min: 4 })
        .withMessage('Must be at least 3 chars long')
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
       
];

const updatePasswordSchema = [
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
        .withMessage('Password can not be empty')
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
    body('confirm_password')
        .exists()
        .custom((value, { req }) => value === req.body.password)
        .withMessage('confirm_password field must have the same value as the password field'),
        function(req,res,next) { 
            const errorValidation = validationResult(req);
            const errors = errorValidation.array();
            if ( errors.length !== 0 ) {
                return res.send({response:false, message:errors[0].msg})
            }
            next()
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

const validateEmail = [
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
];

const validatePaymentCard = [
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
    body('card_number')
        .exists()
        .withMessage('Card Number is required')
        .isNumeric()
        .withMessage('Email verification code must contain numeric characters')
        .isLength({min: 16 })
        .withMessage('Card Number should contain 16 characters')
        .isLength({max: 16 })
        .withMessage('Card Number should contain 16 characters')
        .custom((value, { req }) => valid.number(req.body.card_number).isPotentiallyValid)
        .withMessage('Please insert a valid card')
        .trim(),
        function(req,res,next) { 
            const errorValidation = validationResult(req);
            const errors = errorValidation.array();
            if ( errors.length !== 0 ) {
                return res.send({response:false, message:errors[0].msg})
            }
            next()
    },
    body('expiry_date')
        .exists()
        .withMessage('Expiry Date is required')
        .trim(),
        function(req,res,next) { 
            const errorValidation = validationResult(req);
            const errors = errorValidation.array();
            if ( errors.length !== 0 ) {
                return res.send({response:false, message:errors[0].msg})
            }
            next()
    },
    body('cvv')
        .exists()
        .withMessage('CVV is required')
        .isNumeric()
        .withMessage('Email verification code must contain numeric characters')
        .isLength({min: 3 })
        .withMessage('Invite code should contain 4 characters')
        .isLength({max: 3 })
        .withMessage('Invite code should contain 4 characters')
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


const validateReportSchema = [
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
    body("report")
        .exists()
        .withMessage("Report is required")
        .isLength({ min: 4 })
        .withMessage("Report must be at least 3 chars long")
        .isLength({ max: 200 })
        .withMessage("Report must not exceed 200 characters")
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



export {
    createUserSchema,
    updateUserSchema, 
    updatePasswordSchema, 
    validateLogin, 
    validateEmail, 
    validatePaymentCard, 
    validateReportSchema,
}