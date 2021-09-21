import { makeStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import ArrayChats from "./ArrayChats";
import {useSelector} from "react-redux";



const useStyles = makeStyles((theme) => ({
    messageBox: {
        border: '1px solid black',
        borderRadius: '10px',
        padding: '0 15px 0 7px',
        backgroundCcolor: 'aliceblue',
        wordWrap: 'break-word',
        display: 'flex',
        flexDirection: 'column',
        rowGap: '5px',
    },
    author: {
        color: 'red',
        fontWeight: 'bold',
    },
    senderMessage: {
        alignSelf: 'flex-start',
    },
    userMessage: {
        alignSelf: 'flex-end',
    },
}));


const MessageBoxComponent = ({message}) => {
    const classes = useStyles();
    const {myId, chats} = useSelector((state) => state.chat);
    const chatIndex = chats.findIndex((chat) => chat.id === message.userId)
    console.log(message);
    // console.log("myId", myId)
    // console.log("message.userId", message.userId)
    // console.log("chatIndex", chatIndex)
    return (
        <div className={`${classes.messageBox} ${message.userId === myId ? classes.userMessage : classes.senderMessage}`}>
            <div className={classes.author} >{chatIndex !== -1 ? chats[chatIndex].name : ''}</div>
            <div className={classes.message} >{message.text}</div>
        </div>

    )
}

ArrayChats.propTypes = {
    message: PropTypes.array,
}

export default MessageBoxComponent;