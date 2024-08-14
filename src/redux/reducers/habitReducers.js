import { createSlice } from "@reduxjs/toolkit"


const initialState = {
    habits: [],
    currentHabit: null
}

const habitSlice = createSlice({
    name: "habits",
    initialState,
    reducers: {
        addHabit: (state, action) => {
            state.habits.push(action.payload)
        },
        removeHabit: (state, action) => {
            state.habits = state.habits.filter(habit => habit.title !== action.payload.title);
        },
        setCurrentHabit: (state, action) => {
            state.currentHabit = action.payload;
        },

    }
});

export const habitReducer = habitSlice.reducer;

export const { addHabit, removeHabit, setCurrentHabit } = habitSlice.actions;

export const habitSelector = (state) => state.habitReducer;