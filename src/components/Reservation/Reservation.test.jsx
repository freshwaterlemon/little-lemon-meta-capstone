import { initializeTimes, updateTimes } from './Reservation';
import { vi, describe, it, expect, test } from 'vitest';
import { fetchAPI } from '../api';

// Mock the API module
vi.mock('../api', () => ({
    fetchAPI: vi.fn().mockReturnValue(['mock-time-1', 'mock-time-2'])
}));

describe('initializeTimes', () => {
    it(`returns today's available times from API`, () => {
      const result = initializeTimes();

    // Verify API was called with today's date
    expect(fetchAPI).toHaveBeenCalledWith(expect.any(Date));

    // Verify structure matches API response
    expect(result).toEqual({
        availableTimeSlots: ['mock-time-1', 'mock-time-2']
    });
});
  });

describe('updateTimes', () => {
    it('returns new times for selected date from API', () => {
        const mockDate = '2025-03-19';
        const mockAPITimes = ['mock-updated-time-1', 'mock-updated-time-2'];

        // Mock different response for specific date
        fetchAPI.mockImplementation((date) => {
            if (date.toISOString().startsWith(mockDate)) {
                return mockAPITimes;
            }
            return [];
        });

        const result = updateTimes(
            { availableTimeSlots: [] }, // Initial state doesn't matter
            { type: 'UPDATE_TIMES', date: mockDate }
        );

        expect(fetchAPI).toHaveBeenCalledWith(new Date(mockDate));
        expect(result).toEqual({
            availableTimeSlots: mockAPITimes
        });
    });
});

// test('initializeTimes returns the correct initial state', () => {
//     const initialState = initializeTimes();
//     expect(initialState).toEqual({
//         availableTimeSlots: [
//             "17:00", "18:00", "19:00", "20:00", "21:00", "22:00"
//         ]
//     });
// });


// test('updateTimes returns the same available times as provided in the state', () => {
//     const state = {
//         availableTimeSlots: [
//             "17:00", "18:00", "19:00", "20:00", "21:00", "22:00"
//         ]
//     };
//     const updatedState = updateTimes(state, { type: 'UPDATE_TIMES' });
//     expect(updatedState.availableTimeSlots).toEqual(state.availableTimeSlots);
// });
