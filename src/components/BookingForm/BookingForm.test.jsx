import { render, screen, fireEvent } from '@testing-library/react';
import BookingForm from './BookingForm';
import { describe, it, expect, test, vi } from 'vitest';

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


// Mock required props
const mockProps = {
    date: '',
    setDate: vi.fn(),
    time: '',
    setTime: vi.fn(),
    guests: '1',
    setGuests: vi.fn(),
    occasion: 'none',
    setOccasion: vi.fn(),
    availableTimeSlots: ['17:00', '18:00', '19:00'],
    guestOptions: Array.from({ length: 10 }, (_, i) => (i + 1).toString()),
    occasionOptions: [
        { value: 'casual', label: 'Casual Dining' },
        { value: 'birthday', label: 'Birthday' },
        { value: 'anniversary', label: 'Anniversary' },
    ],
    handleSubmit: vi.fn(),
    dispatch: vi.fn(),
};

describe('BookingForm Input Validation', () => {
    it('should show validation errors for empty required fields', async () => {
        render(<BookingForm {...mockProps} />);

        const submitButton = screen.getByText('Submit Reservation');
        fireEvent.click(submitButton);

        // Check HTML5 validation attributes
        const dateInput = screen.getByLabelText('Date:');
        const timeSelect = screen.getByLabelText('Time:');
        const occasionSelect = screen.getByLabelText('Occasion:');

        expect(dateInput).toBeInvalid();
        expect(timeSelect).toBeInvalid();
        expect(occasionSelect).toBeInvalid();
    });

    it('should validate date input', () => {
        render(<BookingForm {...mockProps} />);
        const dateInput = screen.getByLabelText('Date:');

        // Test past date
        fireEvent.change(dateInput, { target: { value: '2020-01-01' } });
        expect(dateInput).toBeInvalid();

        // Test valid future date
        const futureDate = new Date();
        futureDate.setDate(futureDate.getDate() + 1);
        fireEvent.change(dateInput, {
            target: { value: futureDate.toISOString().split('T')[0] }
        });
        expect(dateInput).toBeValid();
    });

    it('should validate guest count', () => {
        render(<BookingForm {...mockProps} />);
        const guestSelect = screen.getByLabelText('Number of Guests:');

        // Test invalid values
        fireEvent.change(guestSelect, { target: { value: '0' } });
        expect(guestSelect).toBeInvalid();

        fireEvent.change(guestSelect, { target: { value: '11' } });
        expect(guestSelect).toBeInvalid();

        // Test valid values
        fireEvent.change(guestSelect, { target: { value: '5' } });
        expect(guestSelect).toBeValid();
    });

    it('should only submit when all fields are valid', () => {
        render(<BookingForm {...mockProps} />);

        // Fill valid data
        const futureDate = new Date();
        futureDate.setDate(futureDate.getDate() + 1);

        fireEvent.change(screen.getByLabelText('Date:'), {
            target: { value: futureDate.toISOString().split('T')[0] }
        });
        fireEvent.change(screen.getByLabelText('Time:'), {
            target: { value: '18:00' }
        });
        fireEvent.change(screen.getByLabelText('Occasion:'), {
            target: { value: 'birthday' }
        });

        fireEvent.click(screen.getByText('Submit Reservation'));

        expect(mockProps.handleSubmit).toHaveBeenCalledWith({
            date: futureDate.toISOString().split('T')[0],
            time: '18:00',
            guests: expect.any(Number),
            occasion: 'birthday'
        });
    });

    it('should show required attributes for mandatory fields', () => {
        render(<BookingForm {...mockProps} />);

        expect(screen.getByLabelText('Date:')).toHaveAttribute('required');
        expect(screen.getByLabelText('Time:')).toHaveAttribute('required');
        expect(screen.getByLabelText('Occasion:')).toHaveAttribute('required');
    });
});