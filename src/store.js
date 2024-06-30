import { configureStore } from "@reduxjs/toolkit";
import subredditsReducer from './slices/subredditsSlice';

export const store = configureStore({
    reducer: {
        subreddits: subredditsReducer
    }
});