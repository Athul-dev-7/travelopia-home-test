import React, { useState, useRef } from 'react';
import styles from './bookingForm.module.css';
import { Link } from 'react-router-dom';
import { bookJourney } from '../../service/api';

const BookingForm = () => {
    const [bookingSuccess, setBookingSuccess] = useState(false);
    const [bookingError, setBookingError] = useState(false);
    const firstNameRef = useRef();
    const lastNameRef = useRef();
    const emailRef = useRef();
    const countryToVisitRef = useRef();
    const numberOfTravellersRef = useRef();
    const budgetPerPersonRef = useRef();

    const submitHandler = (event) => {
        event.preventDefault();

        const enteredValues = {
            firstName: firstNameRef.current.value,
            lastName: lastNameRef.current.value,
            email: emailRef.current.value,
            countryToVisit: countryToVisitRef.current.value,
            numberOfTravellers: parseInt(numberOfTravellersRef.current.value),
            budgetPerPerson: budgetPerPersonRef.current.value,
        };

        bookJourney({ ...enteredValues }).then((resp) => {
            if (resp.status === 201) {
                setBookingError(false);
                setBookingSuccess(true);
                firstNameRef.current.value = '';
                lastNameRef.current.value = '';
                emailRef.current.value = '';
                countryToVisitRef.current.value = '';
                numberOfTravellersRef.current.value = '';
                budgetPerPersonRef.current.value = '';
            } else {
                setBookingError(true);
            }
        });
    };

    return (
        <div className="container">
            <h1 className="title">Booking Form</h1>
            <form onSubmit={submitHandler} className={styles.form}>
                <div className={styles['control-group']}>
                    <div className={styles['form-control']}>
                        <label htmlFor="firstName">First Name</label>
                        <input
                            ref={firstNameRef}
                            type="text"
                            name="firstName"
                            id="firstName"
                            required
                        />
                    </div>
                    <div className={styles['form-control']}>
                        <label htmlFor="lastName">Last Name</label>
                        <input
                            ref={lastNameRef}
                            type="text"
                            name="lastName"
                            id="lastName"
                            required
                        />
                    </div>
                    <div className={styles['form-control']}>
                        <label htmlFor="email">Email</label>
                        <input
                            ref={emailRef}
                            type="email"
                            name="email"
                            id="email"
                            required
                        />
                    </div>
                </div>
                <div className={styles['control-group']}>
                    <div className={styles['form-control']}>
                        <label htmlFor="country">Country To Visit</label>
                        <select
                            ref={countryToVisitRef}
                            name="country"
                            id="country"
                            required
                        >
                            <option hidden></option>
                            <option value="Africa">Africa</option>
                            <option value="India">India</option>
                            <option value="Europe">Europe</option>
                        </select>
                    </div>
                    <div className={styles['form-control']}>
                        <label htmlFor="travelers">No. Of Travelers</label>
                        <input
                            ref={numberOfTravellersRef}
                            type="number"
                            min={1}
                            name="travelers"
                            id="travelers"
                            required
                        />
                    </div>
                    <div className={styles['form-control']}>
                        <label htmlFor="budget">
                            Budget Per Person (In Dollar)
                        </label>
                        <input
                            ref={budgetPerPersonRef}
                            type="text"
                            name="budget"
                            id="budget"
                            placeholder="$1000"
                            required
                        />
                    </div>
                </div>
                <div className={styles['form-actions']}>
                    <button>Submit</button>
                </div>
            </form>
            {bookingSuccess && (
                <h2 className={styles['success-text']}>Booking Successful</h2>
            )}
            {bookingError && (
                <h2 className={styles['error-text']}>Something went wrong</h2>
            )}
            <Link to="/bookings" className={styles.link}>
                Go to Booking List
            </Link>
        </div>
    );
};

export default BookingForm;
