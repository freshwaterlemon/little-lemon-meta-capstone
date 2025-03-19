import React, { useReducer, useState } from 'react';
import './Reservation.css';
import BookingForm from '../BookingForm/BookingForm';
import { fetchAPI, submitAPI } from '../../api.jsx';

// Initialize available times using API
export const initializeTimes = () => ({
    availableTimeSlots: fetchAPI(new Date())
});

// Update times based on selected date using API
export const updateTimes = (state, action) => ({
    availableTimeSlots: fetchAPI(new Date(action.date))
});


const reducer = (state, action) => {
    switch (action.type) {
        case 'UPDATE_TIMES':
            return updateTimes(state, action);
        default:
            return state;
    }
};

const Reservation = () => {
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');
    const [guests, setGuests] = useState('1');
    const [occasion, setOccasion] = useState('none');

    const [state, dispatch] = useReducer(reducer, initializeTimes());

    const guestOptions = Array.from({ length: 10 }, (_, i) => (i + 1).toString());

    const occasionOptions = [
        { value: 'casual', label: 'Casual Dining' },
        { value: 'birthday', label: 'Birthday' },
        { value: 'anniversary', label: 'Anniversary' },
    ];

    // Form submission handler using submitAPI
    const handleSubmit = (event) => {
        event.preventDefault();
        const bookingData = { date, time, guests: parseInt(guests), occasion };

        if (submitAPI(bookingData)) {
            alert('Reservation submitted successfully!');
            // Optionally reset form fields here
        } else {
            alert('Failed to submit reservation. Please try again.');
        }
    };

    return (
        <BookingForm
            date={date}
            setDate={setDate}
            time={time}
            setTime={setTime}
            guests={guests}
            setGuests={setGuests}
            occasion={occasion}
            setOccasion={setOccasion}
            availableTimeSlots={state.availableTimeSlots}
            guestOptions={guestOptions}
            occasionOptions={occasionOptions}
            handleSubmit={handleSubmit}
            dispatch={dispatch}
        />
    );
};

export default Reservation;
