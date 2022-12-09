import React from 'react';
import styles from './bookingsList.module.css';
import { Link } from 'react-router-dom';

const BookingsList = () => {
    return (
        <div className={styles.container}>
            <h1>Booking List</h1>
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
                    <tr>
                        <td>Athul</td>
                        <td>Das</td>
                        <td>athuldas@gmail.com</td>
                        <td>India</td>
                        <td>2</td>
                        <td>$1000</td>
                    </tr>
                    <tr>
                        <td>Athul</td>
                        <td>Das</td>
                        <td>athuldas@gmail.com</td>
                        <td>India</td>
                        <td>2</td>
                        <td>$1000</td>
                    </tr>
                    <tr>
                        <td>Athul</td>
                        <td>Das</td>
                        <td>athuldas@gmail.com</td>
                        <td>India</td>
                        <td>2</td>
                        <td>$1000</td>
                    </tr>
                    <tr>
                        <td>Athul</td>
                        <td>Das</td>
                        <td>athuldas@gmail.com</td>
                        <td>India</td>
                        <td>2</td>
                        <td>$1000</td>
                    </tr>
                    <tr>
                        <td>Athul</td>
                        <td>Das</td>
                        <td>athuldas@gmail.com</td>
                        <td>India</td>
                        <td>2</td>
                        <td>$1000</td>
                    </tr>
                    <tr>
                        <td>Athul</td>
                        <td>Das</td>
                        <td>athuldas@gmail.com</td>
                        <td>India</td>
                        <td>2</td>
                        <td>$1000</td>
                    </tr>
                    <tr>
                        <td>Athul</td>
                        <td>Das</td>
                        <td>athuldas@gmail.com</td>
                        <td>India</td>
                        <td>2</td>
                        <td>$1000</td>
                    </tr>
                    <tr>
                        <td>Athul</td>
                        <td>Das</td>
                        <td>athuldas@gmail.com</td>
                        <td>India</td>
                        <td>2</td>
                        <td>$1000</td>
                    </tr>
                    <tr>
                        <td>Athul</td>
                        <td>Das</td>
                        <td>athuldas@gmail.com</td>
                        <td>India</td>
                        <td>2</td>
                        <td>$1000</td>
                    </tr>
                    <tr>
                        <td>Athul</td>
                        <td>Das</td>
                        <td>athuldas@gmail.com</td>
                        <td>India</td>
                        <td>2</td>
                        <td>$1000</td>
                    </tr>
                </tbody>
            </table>
            <Link to="/" className={styles.link}>
                Back to Booking Form
            </Link>
        </div>
    );
};

export default BookingsList;
