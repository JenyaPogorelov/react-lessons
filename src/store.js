import {configureStore} from "@reduxjs/toolkit";
import chatSlice from "./Chat/chatSlice";


export default configureStore({
    reducer: {
        chat: chatSlice,
    },
})