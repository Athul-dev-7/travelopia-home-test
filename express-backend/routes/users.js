const express = require('express');
const router = express.Router();
const models = require('../models');
const { body, validationResult } = require('express-validator');

/* GET users listing. */
router.post(
    '/createUser',
    body('firstName').custom((value) => {
        let regex = /^[a-zA-Z]+$/;
        if (!regex.test(value)) {
            return Promise.reject(
                'FirstName can only contain letters of the alphabet'
            );
        }
        return Promise.resolve();
    }),
    body('lastName').custom((value) => {
        let regex = /^[a-zA-Z]+$/;
        if (!regex.test(value)) {
            return Promise.reject(
                'LastName can only contain letters of the alphabet'
            );
        }
        return Promise.resolve();
    }),
    body('email')
        .isEmail()
        .normalizeEmail()
        .withMessage('Enter a valid email address'),
    body('countryToVisit').custom((value) => {
        if (!['India', 'Africa', 'Europe'].includes(value)) {
            return Promise.reject('The country entered is not on our list');
        }
        return Promise.resolve();
    }),
    body('numberOfTravellers').custom((value) => {
        if (value < 1) {
            return Promise.reject(
                'Number of travellers must be greater than 0'
            );
        }
        return Promise.resolve();
    }),
    body('budgetPerPerson')
        .contains('$')
        .withMessage('The currency should be in dollars'),
    async function (req, res) {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({
                success: false,
                errors: errors.array(),
            });
        }

        res.status(200).json({
            success: true,
            message: 'User created successful',
        });
    }
);

module.exports = router;
