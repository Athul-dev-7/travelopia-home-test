import instance from './axios';

function bookJourney({ ...values }) {
    return instance
        .post('/bookings/create', {
            ...values,
        })
        .then(
            (res) => res,
            (error) => error.response
        );
}

function getAllBookings() {
    return instance.get('/bookings/list').then(
        (res) => res,
        (error) => error.response
    );
}

export { bookJourney, getAllBookings };
