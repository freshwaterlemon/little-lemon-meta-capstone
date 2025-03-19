import { initializeTimes, updateTimes } from './Reservation';
import { describe, it, expect, test } from 'vitest';

test('initializeTimes returns the correct initial state', () => {
    const initialState = initializeTimes();
    expect(initialState).toEqual({
        availableTimeSlots: [
            "17:00", "18:00", "19:00", "20:00", "21:00", "22:00"
        ]
    });
});


test('updateTimes returns the same available times as provided in the state', () => {
    const state = {
        availableTimeSlots: [
            "17:00", "18:00", "19:00", "20:00", "21:00", "22:00"
        ]
    };
    const updatedState = updateTimes(state, { type: 'UPDATE_TIMES' });
    expect(updatedState.availableTimeSlots).toEqual(state.availableTimeSlots);
});
