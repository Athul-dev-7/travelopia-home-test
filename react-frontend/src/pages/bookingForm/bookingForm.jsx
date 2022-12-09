import React, { useRef } from 'react';
import styles from './bookingForm.module.css';
import { Link } from 'react-router-dom';
import { bookJourney } from '../../service/api';

const BookingForm = () => {
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
        console.log({ ...enteredValues });
        console.log(enteredValues);
        bookJourney({ ...enteredValues }).then((resp) => {
            if (resp.status === 201) {
                console.log(resp);
            }
        });
    };

    return (
        <div className={styles.container}>
            <h1>Booking Form</h1>
            <form onSubmit={submitHandler} className={styles.form}>
                <div className={styles['control-group']}>
                    <div className={styles['form-control']}>
                        <label htmlFor="firstName">First Name</label>
                        <input
                            ref={firstNameRef}
                            type="text"
                            name="firstName"
                            id="firstName"
                        />
                    </div>
                    <div className={styles['form-control']}>
                        <label htmlFor="lastName">Last Name</label>
                        <input
                            ref={lastNameRef}
                            type="text"
                            name="lastName"
                            id="lastName"
                        />
                    </div>
                    <div className={styles['form-control']}>
                        <label htmlFor="email">Email</label>
                        <input
                            ref={emailRef}
                            type="email"
                            name="email"
                            id="email"
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
                        >
                            <option>-- Select city -- </option>
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
                        />
                    </div>
                    <div className={styles['form-control']}>
                        <label htmlFor="">Budget Per Person</label>
                        <select
                            ref={budgetPerPersonRef}
                            name="country"
                            id="country"
                        >
                            <option>-- Select budget -- </option>
                            <option value="$2000">$2,000</option>
                            <option value="$3000">$3,000</option>
                            <option value="$4000">$4,000</option>
                            <option value="$5000">$5,000</option>
                            <option value="$6000">$6,000</option>
                        </select>
                    </div>
                </div>
                <div className={styles['form-actions']}>
                    <button>Submit</button>
                </div>
            </form>
            <Link to="/bookings" className={styles.link}>
                Go to Booking List
            </Link>
        </div>
    );
};

export default BookingForm;
