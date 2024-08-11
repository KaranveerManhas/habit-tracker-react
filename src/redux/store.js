
import { configureStore } from '@reduxjs/toolkit';
import { habitReducer } from './reducers/habitReducers';

export const store = configureStore({
    reducer: {
        habitReducer
    }
})