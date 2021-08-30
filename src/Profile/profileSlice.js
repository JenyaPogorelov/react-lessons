import { createSlice } from '@reduxjs/toolkit'


export const profileSlice = createSlice({
    name: 'profile',
    initialState: {
        authorName: 'Anonymous',
    },
    reducers: {
        addAuthor: (state, action) => {
            state.authorName = action.payload;
            // console.log(action.payload)
            // console.log(state.authorName)

        }
    },
})

// Action creators are generated for each case reducer function
export const {addAuthor} = profileSlice.actions

export default profileSlice.reducer