import { createSlice } from '@reduxjs/toolkit'


export const profileSlice = createSlice({
    name: 'profile',
    initialState: {
        authorName: 'Anonymous',
    },
    reducers: {
        addAuthor: (state, action) => {
            state.authorName = action.payload;

        }
    },
})

export const {addAuthor} = profileSlice.actions

export default profileSlice.reducer