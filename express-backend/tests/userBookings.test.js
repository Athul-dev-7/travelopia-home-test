const request = require('supertest');
const app = require('../app');
require('dotenv').config();

describe('GET /bookings/list', () => {
    it('should return all bookings', async () => {
        const res = await request(app).get('/bookings/list');
        expect(res.statusCode).toBe(200);
        expect(res._body.data.length).toBeGreaterThan(0);
    });
});

describe('POST /bookings/create', () => {
    // Change email address each time you run the test
    it('should create a booking', async () => {
        const res = await request(app).post('/bookings/create').send({
            firstName: 'Athul',
            lastName: 'Das',
            email: 'athul@gmail.com',
            countryToVisit: 'India',
            numberOfTravellers: 2,
            budgetPerPerson: '$1000',
        });
        expect(res.statusCode).toBe(201);
        expect(res._body.data.firstName).toBe('Athul');
    });
});
