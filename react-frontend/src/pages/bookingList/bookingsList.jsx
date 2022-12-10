import React, { useState, useEffect } from 'react';
import styles from './bookingsList.module.css';
import { Link } from 'react-router-dom';
import { getAllBookings } from '../../service/api';

const BookingsList = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
        getAllBookings().then((resp) => {
            if (resp.status === 200) {
                setData(resp.data.data);
            }
        });
    }, []);

    return (
        <div className="container">
            <h1 className="title">Booking List</h1>
            {data.length ? (
                <div className={styles['table-container']}>
                    <table>
                        <thead>
                            <tr>
                                <th>FirstName</th>
                                <th>LastName</th>
                                <th>Email</th>
                                <th>CountryToVisit</th>
                                <th>numberOfTravellers</th>
                                <th>BudgetPerPerson</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data.map((val) => (
                                <tr key={val.uuid}>
                                    <td>{val.firstName}</td>
                                    <td>{val.lastName}</td>
                                    <td>{val.email}</td>
                                    <td>{val.countryToVisit}</td>
                                    <td>{val.numberOfTravellers}</td>
                                    <td>{val.budgetPerPerson}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            ) : (
                'There are no bookings'
            )}

            <Link to="/" className={styles.link}>
                Back to Booking Form
            </Link>
        </div>
    );
};

export default BookingsList;
