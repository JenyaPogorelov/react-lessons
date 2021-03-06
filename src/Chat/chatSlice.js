import {createSlice} from '@reduxjs/toolkit'
import moment from "moment";

export const chatSlice = createSlice({
    name: 'chat',
    initialState: {
        messagesArray: [],
        myId: 1,
        isAuthenticated: false,
        chats: [
            {
                id: 2,
                name: "Joe Doe",
                avatarUrl: "https://material-ui.com/static/images/avatar/1.jpg",
                massagesArray: [
                    {
                        timeStamp: moment('1995-12-17T03:21:00'),
                        userId: 1,
                        text: 'Привет',
                        isRead: true,
                    },
                    {
                        timeStamp: moment('1995-12-17T03:24:00'),
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
                        timeStamp: moment('1995-12-17T03:24:00'),
                        userId: 1,
                        text: 'Привет',
                        isRead: true,
                    },
                    {
                        timeStamp: moment('1995-12-17T03:28:00'),
                        userId: 3,
                        text: 'Тебе тоже привет Иван',
                        isRead: false,
                    },
                    {
                        timeStamp: moment('1995-12-17T03:28:00'),
                        userId: 3,
                        text: 'Тебе тоже привет Иван',
                        isRead: false,
                    },
                    {
                        timeStamp: moment('1995-12-17T03:28:00'),
                        userId: 3,
                        text: 'Тебе тоже привет Иван',
                        isRead: false,
                    },
                ],
            }
        ],
        messages: {
            2: [
                {
                    timeStamp: moment("1995-12-17T03:21:00").valueOf(),
                    authorId: 1,
                    text: "Привет",
                },
                {
                    timeStamp: moment("1995-12-17T03:24:00").valueOf(),
                    authorId: 2,
                    text: "Тебе тоже привет Joe, Тебе тоже привет Joe, Тебе тоже привет Joe, Тебе тоже привет Joe",
                },
            ],
            3: [
                {
                    timeStamp: moment("1995-12-17T03:24:00").valueOf(),
                    authorId: 1,
                    text: "Привет",
                },
                {
                    timeStamp: moment("1995-12-17T03:28:00").valueOf(),
                    authorId: 3,
                    text: "Тебе тоже привет Иван",
                },
                {
                    timeStamp: moment("1995-12-17T03:28:00").valueOf(),
                    authorId: 3,
                    text: "Тебе тоже привет Иван",
                },
                {
                    timeStamp: moment("1995-12-17T03:28:00").valueOf(),
                    authorId: 3,
                    text: "Тебе тоже привет Иван",
                },
            ],
        },
        profiles: [
            {
                id: 2,
                name: "Joe Doe",
                avatar: "https://material-ui.com/static/images/avatar/1.jpg",
            },
            {
                id: 3,
                name: "Иван Кузнецов",
                avatar: "https://material-ui.com/static/images/avatar/2.jpg",
            },
        ],

    },
    reducers: {
        addMessage: (state, action) => {
            const {chatId, inputMessage, authorId} = action.payload;
            const chatIndex = state.chats.findIndex((chat) => chat.id === chatId)
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
    },
})

// Action creators are generated for each case reducer function
export const {addMessage, setMessages, changeIsAuth} = chatSlice.actions

export default chatSlice.reducer