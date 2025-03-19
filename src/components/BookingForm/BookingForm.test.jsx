import { render, screen } from '@testing-library/react';
import BookingForm from './BookingForm';
import { describe, it, expect, test } from 'vitest';

test('Renders the BookingForm heading', () => {
    const availableTimeSlots = [
        "17:00", "18:00", "19:00", "20:00", "21:00", "22:00"
    ];
    const guestOptions = Array.from({ length: 10 }, (_, i) => (i + 1).toString());
    const occasionOptions = [
        { value: 'casual', label: 'Casual Dining' },
        { value: 'birthday', label: 'Birthday' },
        { value: 'anniversary', label: 'Anniversary' },
    ];

    render(
        <BookingForm
            availableTimeSlots={availableTimeSlots}
            guestOptions={guestOptions}
            occasionOptions={occasionOptions}
        />
    );

    const headingElement = screen.getByText('Reserve Table');
    expect(headingElement).toBeInTheDocument();
});


