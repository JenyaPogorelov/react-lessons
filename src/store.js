import {configureStore, combineReducers} from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import chatSlice from "./Chat/chatSlice";
import catSlice from "./Cats/catSlice";
import gotSlice from "./GameOfThrones/gotSlice";
import profileSlice from "./Profile/profileSlice";
import thunkMiddleware from "redux-thunk";
import {persistReducer} from "redux-persist"


const persistConfig = {
    key: 'root',
    storage,
    whitelist: [], // сюда написать какие редюсеры надо хранить с локальном сторе.
    blacklist: [],
};

const reducers = combineReducers({
    chat: chatSlice,
    cats: catSlice,
    got: gotSlice,
    profile: profileSlice,
})

const persistedReducer = persistReducer(persistConfig, reducers)


export default configureStore({
    reducer: persistedReducer,
    middleware: [thunkMiddleware],
});