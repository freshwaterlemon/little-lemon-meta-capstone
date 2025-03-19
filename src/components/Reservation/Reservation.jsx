import React, { useReducer, useState } from 'react';
import './Reservation.css'
import BookingForm from '../BookingForm/BookingForm'

export const initializeTimes = () => {
    return {
        availableTimeSlots: [
            "17:00", "18:00", "19:00", "20:00", "21:00", "22:00"
        ]
    };
};

export const updateTimes = (state, action) => {
    if (action.date === '2025-03-19') {
        return {
            availableTimeSlots: ["18:00", "19:00", "20:00"]
        };
    } else {
        return {
            availableTimeSlots: state.availableTimeSlots
        };
    }
};


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

    const handleSubmit = (event) => {
        event.preventDefault();
        const bookingData = {
            date,
            time,
            guests: parseInt(guests),
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
        </>
    );
};

export default Reservation;
