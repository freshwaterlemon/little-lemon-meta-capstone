import React from 'react';
import './BookingForm.css'
import restaurant from '../../assets/restaurant.jpg';

const BookingForm = ({
    date,
    setDate,
    time,
    setTime,
    guests,
    setGuests,
    occasion,
    setOccasion,
    availableTimeSlots,
    guestOptions,
    occasionOptions,
    handleSubmit,
    dispatch
}) => {

    const handleDateChange = (event) => {
        setDate(event.target.value);
        dispatch({ type: 'UPDATE_TIMES', date: event.target.value });
    };

    const onSubmit = (event) => {
        event.preventDefault();
        const formData = {
            date,
            time,
            guests: parseInt(guests),
            occasion,
        };
        handleSubmit(formData); // Call handleSubmit passed via props
    };

    return (
        <>
            <div className="booking-form-container">
                <div className="booking-form">
                    <h2>Reserve Table</h2>
                    <p>Please fill the form below accurately for us serve you better!</p>
                    <form onSubmit={onSubmit}>
                        <label>Date:</label>
                        <input type="date" value={date} onChange={handleDateChange} required />

                        <label>Time:</label>
                        <select value={time} onChange={(e) => setTime(e.target.value)} required>
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
                        <select value={occasion} onChange={(e) => setOccasion(e.target.value)} required>
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
