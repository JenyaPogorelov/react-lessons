import { createSlice } from '@reduxjs/toolkit'


export const chatSlice = createSlice({
    name: 'chat',
    initialState: {
        countOfMessages: 0,
        lastMessageText: '',
        messagesArray: [],
    },
    reducers: {
        incrementWithoutMessage: (state) => {
            state.countOfMessages += 1;
        },
        incrementWithMessage: (state, action) => {
                state.countOfMessages += 1;
                state.lastMessageText = action.payload;
        },
        addMessage: (state, action) => {
            state.messagesArray.push(action.payload);
        }
        // decrement: (state) => {
        //     state.value -= 1
        // },
        // incrementByAmount: (state, action) => {
        //     state.value += action.payload
        // },
    },
})

// Action creators are generated for each case reducer function
export const { incrementWithMessage, incrementWithoutMessage, addMessage } = chatSlice.actions

export default chatSlice.reducer