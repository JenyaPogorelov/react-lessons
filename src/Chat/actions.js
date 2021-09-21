import {addMessage, setMessages} from "./chatSlice";
// import firebase from "firebase/compat";
// import {common} from "@material-ui/core/colors";
import {db} from '../App'

const getPayloadFromSnapshot = (snapshot) => {
    const messages = [];

    snapshot.forEach((mes) => {
        messages.push(mes.val());
    });

    return { chatId: snapshot.key, messages }
}

export const sendMessageWithThunk = (message) => (dispatch, getState) => {
    const {chat} = getState();
    const chatId = message.chatId;
    const messages = chat.messages[chatId] || []

    // console.log(messages);

    dispatch(addMessageWithFirebase(chatId, {
            ...message,
            id: `${chatId}-${messages?.length || 0}-${Date.now()}`
        })
    );
};

export const addMessageWithFirebase = (chatId, message) => async () => {
    // console.log(message);
    db.ref("messages").child(chatId).child(message.id).set(message);
};

export const initMessageTracking = () => (dispatch) => {
    db.ref("messages").on("child_changed", (snapshot) => {
        const payload = getPayloadFromSnapshot(snapshot);
        dispatch(setMessages(payload))
    });

    db.ref("messages").on("child_added", (snapshot) => {
        const payload = getPayloadFromSnapshot(snapshot);
        dispatch(setMessages(payload))
    });
};