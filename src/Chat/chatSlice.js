import { createSlice } from '@reduxjs/toolkit'
import moment from "moment";

export const chatSlice = createSlice({
    name: 'chat',
    initialState: {
        messagesArray: [],
        myId: 1,
        chats: [
            {
                id: 2,
                name: "Joe Doe",
                avatarUrl: "https://material-ui.com/static/images/avatar/1.jpg",
                massagesArray: [
                    {
                        timeStamp: moment('1995-12-17T03:21:00').valueOf(),
                        userId: 1,
                        text: 'Привет',
                        isRead: true,
                    },
                    {
                        timeStamp: moment('1995-12-17T03:24:00').valueOf(),
                        userId: 2,
                        text: 'Тебе тоже привет JoeТебе тоже привет JoeТебе тоже привет JoeТебе тоже привет JoeТебе тоже привет Joe',
                        isRead: false,
                    },
                ],
            },
            {
                id: 3,
                name: "Иван Кузнецов",
                avatarUrl: "https://material-ui.com/static/images/avatar/2.jpg",
                massagesArray: [
                    {
                        timeStamp: moment('1995-12-17T03:24:00').valueOf(),
                        userId: 1,
                        text: 'Привет',
                        isRead: true,
                    },
                    {
                        timeStamp: moment('1995-12-17T03:28:00').valueOf(),
                        userId: 3,
                        text: 'Тебе тоже привет Иван',
                        isRead: false,
                    },
                    {
                        timeStamp: moment('1995-12-17T03:28:00').valueOf(),
                        userId: 3,
                        text: 'Тебе тоже привет Иван',
                        isRead: false,
                    },
                    {
                        timeStamp: moment('1995-12-17T03:28:00').valueOf(),
                        userId: 3,
                        text: 'Тебе тоже привет Иван',
                        isRead: false,
                    },
                ],
            }
        ],
    },
    reducers: {
        addMessage: (state, action) => {
            const {chatId, inputMessage} = action.payload;
            const chatIndex = state.chats.findIndex((chat) => chat.id === chatId)
            state.chats[chatIndex].massagesArray.push({
                    timeStamp: moment(),
                    userId: state.myId,
                    text:inputMessage,
                    isRead: false,
            })

            // state.messagesArray.push(action.payload);
        }
    },
})

// Action creators are generated for each case reducer function
export const {addMessage} = chatSlice.actions

export default chatSlice.reducer