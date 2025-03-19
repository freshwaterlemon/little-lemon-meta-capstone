import React from 'react';
import './BookingForm.css';
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
        handleSubmit(formData);
    };

    return (
        <>
            <div className="booking-form-container">
                <div className="booking-form">
                    <h2 id="form-heading">Reserve Table</h2>
                    <p id="form-instructions">Please fill the form below accurately for us to serve you better!</p>
                    <form
                        onSubmit={onSubmit}
                        aria-labelledby="form-heading"
                        aria-describedby="form-instructions"
                    >
                        {/* Date Input */}
                        <div className="form-group">
                            <label htmlFor="reservation-date">
                                Date:
                            </label>
                            <input
                                id="reservation-date"
                                type="date"
                                value={date}
                                onChange={handleDateChange}
                                required
                                aria-required="true"
                                aria-invalid={!date}
                            />
                        </div>

                        {/* Time Select */}
                        <div className="form-group">
                            <label htmlFor="reservation-time">
                                Time:
                            </label>
                            <select
                                id="reservation-time"
                                value={time}
                                onChange={(e) => setTime(e.target.value)}
                                required
                                aria-required="true"
                                aria-invalid={!time}
                            >
                                <option value="">Select a Time</option>
                                {availableTimeSlots.map((slot, index) => (
                                    <option key={index} value={slot}>
                                        {slot}
                                    </option>
                                ))}
                            </select>
                        </div>

                        {/* Guests Select */}
                        <div className="form-group">
                            <label htmlFor="reservation-guests">
                                Number of Guests:
                            </label>
                            <select
                                id="reservation-guests"
                                value={guests}
                                onChange={(e) => setGuests(e.target.value)}
                                aria-describedby="guests-description"
                            >
                                {guestOptions.map((option, index) => (
                                    <option key={index} value={option}>
                                        {option}
                                    </option>
                                ))}
                            </select>
                            <span id="guests-description" className="sr-only">
                                Select number of guests between 1 and 10
                            </span>
                        </div>

                        {/* Occasion Select */}
                        <div className="form-group">
                            <label htmlFor="reservation-occasion">
                                Occasion:
                            </label>
                            <select
                                id="reservation-occasion"
                                value={occasion}
                                onChange={(e) => setOccasion(e.target.value)}
                                required
                                aria-required="true"
                                aria-invalid={!occasion}
                            >
                                {occasionOptions.map((option, index) => (
                                    <option key={index} value={option.value}>
                                        {option.label}
                                    </option>
                                ))}
                            </select>
                        </div>

                        <button
                            type="submit"
                            aria-label="Submit reservation form"
                        >
                            Submit Reservation
                        </button>
                    </form>
                </div>
                <img
                    src={restaurant}
                    alt=""
                    className="form-image"
                    aria-hidden="true"
                />
            </div>
        </>
    );
};

export default BookingForm;
