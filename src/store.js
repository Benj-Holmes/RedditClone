import { configureStore } from "@reduxjs/toolkit";
import subredditsReducer from './slices/subredditsSlice';
import articlesReducer from './slices/articlesSlice';
import threadReducer from './slices/threadSlice';

export const store = configureStore({
    reducer: {
        subreddits: subredditsReducer,
        articles: articlesReducer,
        thread: threadReducer
    }
});