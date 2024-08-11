import { createSlice } from "@reduxjs/toolkit"


const initialState = {
    habits: []
}

const habitSlice = createSlice({
    name: "habits",
    initialState,
    reducers: {
        addHabit: (state, action) => {
            state.habits.push(action.payload)
        }
    }
});

export const habitReducer = habitSlice.reducer;

export const { addHabit } = habitSlice.actions;

export const habitSelector = (state) => state.habitReducer;