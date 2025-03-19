import React from 'react';
import './ConfirmedBooking.css';
import { useLocation } from 'react-router-dom';

const ConfirmedBooking = () => {
    const { state } = useLocation();
    const bookingData = state?.formData || {
        date: 'N/A',
        time: 'N/A',
        guests: 'N/A',
        occasion: 'N/A'
    };

    return (
        <div className="confirmed-booking">
            <h2>Booking Confirmed!</h2>
            <div className="booking-details">

                <h2>Your Reservation Details:</h2>
                <div className='booking-details-list'>
                    <p>📅 Date: {bookingData.date}</p>
                    <p>⏰ Time: {bookingData.time}</p>
                    <p>👥 Guests: {bookingData.guests}</p>
                    <p>🎉 Occasion: {bookingData.occasion}</p>
                </div>
            </div>
            <p>Thank you for choosing Little Lemon. We look forward to serving you!</p>
        </div>
    );
};

export default ConfirmedBooking;
