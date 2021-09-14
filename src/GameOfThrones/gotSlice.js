import {createSlice} from '@reduxjs/toolkit'

export const GOT_API_URL = "https://thronesapi.com/api/v2/Characters/";

export const gotSlice = createSlice({
    name: 'got',
    initialState: {
        loading: false,
        error: false,
        data: null,
    },
    reducers: {
        setLoading: (state, action) => {
            state.loading = action.payload
        },
        setError: (state, action) => {
            state.error = action.payload
        },
        setData: (state, action) => {
            state.data = action.payload
        },
    },
});

// Action creators are generated for each case reducer function
export const {setLoading, setError, setData} = gotSlice.actions

export default gotSlice.reducer