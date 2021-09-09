import {configureStore} from "@reduxjs/toolkit";
import chatSlice from "./Chat/chatSlice";
import profileSlice from "./Profile/profileSlice";
import thunkMiddleware from "redux-thunk";


export default configureStore({
    reducer: {
        chat: chatSlice,
        profile: profileSlice,
    },
    middleware: [thunkMiddleware]
});