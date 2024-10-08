import { createSlice } from "@reduxjs/toolkit"


const initialState = {
    habits: [],
    currentHabit: null,
    currentHabitIndex: 0
}

const habitSlice = createSlice({
    name: "habits",
    initialState,
    reducers: {
        addHabit: (state, action) => {
            state.habits.push(action.payload);
            state.currentHabitIndex += 1;
        },
        removeHabit: (state, action) => {
            state.habits = state.habits.filter(habit => habit.index !== action.payload.index);
            state.currentHabitIndex = state.habits.length - 1;
        },
        setCurrentHabit: (state, action) => {
            state.currentHabit = action.payload;
        },
        updateHabitWeekData: (state, action) => {
            const habitIndex = state.habits.findIndex(habit => habit.index === state.currentHabit.index);
            state.habits[habitIndex].weekData = action.payload;
            state.currentHabit = state.habits[habitIndex];
        }
    }
});

export const habitReducer = habitSlice.reducer;

export const { addHabit, removeHabit, setCurrentHabit, updateHabitWeekData } = habitSlice.actions;

export const habitSelector = (state) => state.habitReducer;