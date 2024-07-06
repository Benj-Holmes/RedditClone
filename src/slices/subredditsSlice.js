import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
    subreddits: [],
    loading: false,
    showMenu: true,
    error: null
};

//Thunk for Async Call, fetches the list of subreddits to populate the side menu.
export const fetchSubreddits = createAsyncThunk(
    'subreddit/fetchSubreddits', 
    async () => {
    try {
        const response = await fetch("https://www.reddit.com/reddits.json")
        const data = response.json();
        console.log(data)
        return data;
    } catch (err) {
        throw Error(err);
    }
});

const subredditsSlice = createSlice({
    name: 'subreddits',
    initialState,
    reducers: {
        setSubreddits(state, action) {
            state.subreddits = action.payload;
        },
        toggleMenu(state) {
            if (state.showMenu === true) {
                state.showMenu = false;
            } else {
                state.showMenu = true;
            }
        }        
    }, 
     extraReducers: (builder) => {
        builder
            .addCase(fetchSubreddits.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchSubreddits.fulfilled, (state, action) => {
                state.subreddits.splice(0, 1, action.payload.data.children);
                state.loading = false;
            })
            .addCase(fetchSubreddits.rejected, (state, action) => {
                state.error = action.error.message;
                state.loading = false;
            })
     }
});

//Selectors
export const subredditSelector = state => state.subreddits.subreddits[0];
export const menuStateSelector = state => state.subreddits.showMenu;

//Exporting Action Creators and Reducer
export const { setSubreddits, toggleMenu } = subredditsSlice.actions;
export default subredditsSlice.reducer;