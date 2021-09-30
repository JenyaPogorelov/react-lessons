// import firebase from "firebase/compat";
// import {common} from "@material-ui/core/colors";
import {setChat} from "../Chat/chatSlice";
import {db} from '../App'

const getPayloadFromSnapshot = (snapshot) => {
    return {[snapshot.key]: snapshot.val()}
}

const generateChatId = (uidA, uidB) => {
    if (uidA > uidB) {
        return `${uidA}-${uidB}`;
    }
    return `${uidB}-${uidA}`;
};

export const addChatToFirebase = async (myUid, targetUid) => {
    const profile = db.ref('profiles').child(targetUid).get();
    if (profile) {
        await db
            .ref("chats")
            .child(myUid)
            .child(targetUid)
            .set({chatId: generateChatId(myUid, targetUid)});
    }
};

export const initChatTracking = (myUid) => (dispatch) => {
    db.ref("chats")
        .child(myUid)
        .on("child_changed", (snapshot) => {
            const payload = getPayloadFromSnapshot(snapshot);
            // console.log(payload, 'Payload1');
            dispatch(setChat(payload));
        });

    db.ref("chats")
        .child(myUid)
        .on("child_added", (snapshot) => {
            const payload = getPayloadFromSnapshot(snapshot);
            // console.log(payload, 'Payload2');
            dispatch(setChat(payload))
        });
};