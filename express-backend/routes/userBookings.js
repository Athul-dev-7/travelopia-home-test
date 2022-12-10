const express = require('express');
const router = express.Router();
const models = require('../models');
const { body, validationResult } = require('express-validator');

/* GET all bookings. */
router.get('/list', async function (req, res) {
    try {
        const bookings = await models.Booking.findAll();
        return res.status(200).json({
            message: 'success',
            data: bookings,
        });
    } catch (error) {
        return res.status(500).json({ error: `${error.message}` });
    }
});

/* POST a booking. */
router.post(
    '/create',
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
        try {
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                return res.status(400).json({
                    success: false,
                    errors: errors.array(),
                });
            }

            const booking = await models.Booking.create({
                firstName: req.body.firstName,
                lastName: req.body.lastName,
                email: req.body.email,
                countryToVisit: req.body.countryToVisit,
                numberOfTravellers: req.body.numberOfTravellers,
                budgetPerPerson: req.body.budgetPerPerson,
            });

            if (booking) {
                return res
                    .status(201)
                    .json({ message: 'success', data: booking });
            } else {
                return res
                    .status(400)
                    .json({ message: 'something went wrong' });
            }
        } catch (error) {
            return res.status(500).json({ error: `${error.message}` });
        }
    }
);

module.exports = router;
