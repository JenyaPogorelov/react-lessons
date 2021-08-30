import {configureStore} from "@reduxjs/toolkit";
import chatSlice from "./Chat/chatSlice";
import profileSlice from "./Profile/profileSlice";


export default configureStore({
    reducer: {
        chat: chatSlice,
        profile: profileSlice,
    },
})