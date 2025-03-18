import React, { useState } from 'react';
import './BookingForm.css'

const BookingForm = () => {
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');
    const [guests, setGuests] = useState(1);
    const [occasion, setOccasion] = useState('none');

    const availableTimeSlots = [
        "17:00", "18:00", "19:00", "20:00", "21:00", "22:00"
    ];

    const handleSubmit = (event) => {
        event.preventDefault();
        const bookingData = {
            date,
            time,
            guests,
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
        <div className="booking-form">
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
                <input type="number" value={guests} onChange={(e) => setGuests(e.target.valueAsNumber)} min="1" required />

                <label>Occasion:</label>
                <select value={occasion} onChange={(e) => setOccasion(e.target.value)}>
                    <option value="none">Select an Occasion</option>
                    <option value="birthday">Birthday</option>
                    <option value="anniversary">Anniversary</option>
                </select>

                <button type="submit">Submit Reservation</button>
            </form>
        </div>
    );

};

export default BookingForm;
