import React, { useState } from 'react';
import './BookingForm.css'
import restaurant from '../../assets/restaurant.jpg';

const BookingForm = () => {
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');
    const [guests, setGuests] = useState('1');
    const [occasion, setOccasion] = useState('none');

    const availableTimeSlots = [
        "17:00", "18:00", "19:00", "20:00", "21:00", "22:00"
    ];

    const guestOptions = Array.from({ length: 10 }, (_, i) => (i + 1).toString());

    const occasionOptions = [
        { value: 'none', label: 'Select an Occasion' },
        { value: 'casual', label: 'Casual Dining' },
        { value: 'birthday', label: 'Birthday' },
        { value: 'anniversary', label: 'Anniversary' },
        // Add more occasions here
    ];

    const handleSubmit = (event) => {
        event.preventDefault();
        const bookingData = {
            date,
            time,
            guests: parseInt(guests), // Convert guests to a number
            occasion
        };

        // Handle form data (e.g., send it to a server)
        console.log(bookingData);

        // Example: Send data to a server using fetch API
        // fetch('/your-server-endpoint', {
        //     method: 'POST',
        //     headers: {
        //         'Content-Type': 'application/json'
        //     },
        //     body: JSON.stringify(bookingData)
        // })
        // .then(response => response.json())
        // .then(data => console.log(data))
        // .catch(error => console.error('Error:', error));
    };

    return (
        <>
            <div className="booking-form-container">
                <div className="booking-form">
                    <h2>Reserve Table</h2>
                    <p>Please fill the form below accurately for us serve you better!</p>
                    <form onSubmit={handleSubmit}>
                        <label>Date:</label>
                        <input type="date" value={date} onChange={(e) => setDate(e.target.value)} required />

                        <label>Time:</label>
                        <select value={time} onChange={(e) => setTime(e.target.value)}>
                            <option value="">Select a Time</option>
                            {availableTimeSlots.map((slot, index) => (
                                <option key={index} value={slot}>{slot}</option>
                            ))}
                        </select>

                        <label>Number of Guests:</label>
                        <select value={guests} onChange={(e) => setGuests(e.target.value)}>
                            {guestOptions.map((option, index) => (
                                <option key={index} value={option}>{option}</option>
                            ))}
                        </select>

                        <label>Occasion:</label>
                        <select value={occasion} onChange={(e) => setOccasion(e.target.value)}>
                            {occasionOptions.map((option, index) => (
                                <option key={index} value={option.value}>{option.label}</option>
                            ))}
                        </select>

                        <button type="submit">Submit Reservation</button>
                    </form>
                </div>
                <img src={restaurant} alt="Background Image" className="form-image" />

            </div>
        </>
    );

};

export default BookingForm;
