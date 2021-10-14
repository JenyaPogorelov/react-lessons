import {createSlice} from '@reduxjs/toolkit'
import moment from "moment";

export const chatSlice = createSlice({
    name: 'chat',
    initialState: {
        messagesArray: [],
        myUid: '',
        isAuthenticated: false,
        chats: {},
        messages: {},

    },
    reducers: {
        addMessage: (state, action) => {
            const {chatId, inputMessage, authorId} = action.payload;
            const chatIndex = state.chats.findIndex((chat) => chat.id === chatId)
            // console.log(chatId, inputMessage, authorId);
            // console.log(action.payload);
            state.chats[chatIndex].massagesArray.push({
                timeStamp: moment(),
                userId: authorId,
                text: inputMessage,
                isRead: false,
            })
            // state.messagesArray.push(action.payload);
        },

        setMessages: (state, action) => {
            const {chatId, messages} = action.payload
            state.messages = {
                ...state.messages,
                [chatId]: messages,
            }
            // console.log(state.messages, "state.messages");
        },

        changeIsAuth: (state, action) => {
            state.isAuthenticated = action.payload;
        },

        setChat: (state, action) => {
            // const {targetUid, chatId} = action.payload
            state.chats = {
                ...state.chats,
                ...action.payload,
            }
        },

        setMyUid: (state, action) => {
            state.myUid = action.payload;
        },
    },
})

// Action creators are generated for each case reducer function
export const {setMessages, changeIsAuth, setMyUid, setChat} = chatSlice.actions

export default chatSlice.reducer