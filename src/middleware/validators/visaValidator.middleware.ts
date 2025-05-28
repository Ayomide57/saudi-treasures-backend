import { body, validationResult } from 'express-validator';
import valid from 'card-validator';

const validateApplyForVisaSchema = [
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
    body('visa_type')
        .exists()
        .withMessage('Visa Type is required')
        .trim(),
        function(req,res,next) { 
            const errorValidation = validationResult(req);
            const errors = errorValidation.array();
            if ( errors.length !== 0 ) {
                return res.send({response:false, message:errors[0].msg})
            }
            next()
    },
    
    body('package_id')
        .exists()
        .withMessage('Package Id is required')
        .isAlphanumeric()
        .withMessage('Wrong Package Id')
        .trim(),
        function(req,res,next) { 
            const errorValidation = validationResult(req);
            const errors = errorValidation.array();
            if ( errors.length !== 0 ) {
                return res.send({response:false, message:errors[0].msg})
            }
            next()
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

const addVisaPackageSchema = [
    body('name')
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
    body('duration')
        .exists()
        .withMessage('Duration is required')
        .isNumeric()
        .withMessage("Duration must be type number")
        .isLength({ min: 1 })
        .withMessage('Must be at least 1 chars long')
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
    body('processing_time')
        .exists()
        .withMessage('Processing time is required')
        .isNumeric()
        .withMessage("Processing time must be type number")
        .isLength({ min: 1 })
        .withMessage('Must be at least 1 chars long')
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
    body('amount')
        .exists()
        .withMessage('Amount is required')
        .isNumeric()
        .withMessage("Amount must be type number")
        .isLength({ min: 1 })
        .withMessage('Must be at least 1 chars long')
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

export { validateApplyForVisaSchema, addVisaPackageSchema }