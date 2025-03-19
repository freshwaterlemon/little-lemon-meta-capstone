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
            <h2 className='section-categories'>Booking Confirmed!</h2>
            <div className="booking-details">

                <h2 className='section-categories'>Your Reservation Details:</h2>
                <div className='booking-details-list'>
                    <p className='paragraph-text'>📅 Date: {bookingData.date}</p>
                    <p className='paragraph-text'>⏰ Time: {bookingData.time}</p>
                    <p className='paragraph-text'>👥 Guests: {bookingData.guests}</p>
                    <p className='paragraph-text'>🎉 Occasion: {bookingData.occasion}</p>
                </div>
            </div>
            <p className='paragraph-text'>Thank you for choosing Little Lemon. We look forward to serving you!</p>
        </div>
    );
};

export default ConfirmedBooking;
