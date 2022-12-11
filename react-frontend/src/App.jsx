import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Form from './pages/bookingForm/bookingForm';
import Bookings from './pages/bookingList/bookingsList';

const App = () => {
    return (
        <div className="app">
            <BrowserRouter>
                <Routes>
                    <Route index path="/" element={<Form />} />
                    <Route path="/bookings" element={<Bookings />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
};

export default App;
