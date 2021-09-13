import React, {useState} from "react";
import {makeStyles} from '@material-ui/core/styles';
import {useSelector, useDispatch} from 'react-redux';
import {addMessage} from "./chatSlice";
import '../App.css';
import InputComponent from "./InputComponent";
import ButtonComponent from "./ButtonComponent";
import MessageBoxComponent from "./MessageBoxComponent";
import InputAuthorComponent from "./InputAuthorComponent";
// import ArrayChats from "./ArrayChats";
import {useParams} from "react-router-dom";
// import moment from "moment";

const useStyles = makeStyles((theme) => ({
    mainWrapper: {
        width: '100%',
        height: '100%',
        border: '1px solid black',
        display: 'flex',
        flexDirection: 'column',
        margin: '0 auto',
        position: 'relative',
    },
    messageList: {
        width: '100%',
        height: '90%',
        borderBottom: '1px solid black',
        padding: '10px',
        display: 'flex',
        flexDirection: 'column',
        rowGap: '10px',
        backgroundColor: 'floralwhite',
        overflow: 'auto',
    },
    buttonAuthor: {
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
    },
    inputWrapper: {
        flex: '1',
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-around',
    },
}));

function Chat() {
    // const location = useLocation();
    const urlParams = useParams();
    const chatId = +urlParams.id;


    const [inputMessage, setInputMessage] = useState('');
    const [author, setAuthor] = useState('Anonymous');

    const {chats} = useSelector((state) => state.chat);

    const {myId} = useSelector((state) => state.chat);
    const messagesArray = chats.find((chat) => chat.id === chatId).massagesArray;
    const {authorName} = useSelector((state) => state.profile);
    const classes = useStyles();
    const dispatch = useDispatch();

    const sendMessageWithThunk = (message) => (dispatch, getState) => {
        const {chat} = getState();
        const myId = chat.myId
        dispatch(addMessage(message))
        if (message.authorId === myId) {
            const botMessage = {
                // timeStamp: moment(),
                chatId: chatId,
                inputMessage: "I'm robot",
                authorId: chatId,
            };
            setTimeout(function () {
                setInputMessage('')
                dispatch(addMessage(botMessage));
            }, 1500);

        }
    };

    const onSendMessage = () => {
        if (inputMessage && author) {
            dispatch(sendMessageWithThunk({chatId, inputMessage, authorId: myId}))
        } else {
            console.log('Введите сообщение');
        }
    };

    // useEffect(() => {
    //     if (inputMessage && author) {
    //         setInputMessage('')
    //         setTimeout(function () {
    //             setInputMessage('')
    //             dispatch(addMessage({chatId, inputMessage}))
    //         }, 1500);
    //     }
    // }, [messagesArray])

    return <div className={classes.mainWrapper}>
        {/*<ArrayChats/>*/}
        <div className={classes.messageList}>
            {
                messagesArray.map((message, index) => (
                    <MessageBoxComponent
                        key={index}
                        message={message}
                    />
                ))
            }
        </div>

        <div className={classes.inputWrapper}>
            <InputComponent
                value={inputMessage}
                onChange={setInputMessage}
                onKeyDown={onSendMessage}
            />
            <div className={classes.buttonAuthor}>
                <InputAuthorComponent
                    value={authorName}
                    onChange={setAuthor}
                    onKeyDown={onSendMessage}
                />
                <ButtonComponent
                    onClick={onSendMessage}
                />
            </div>

        </div>

    </div>
}

export default Chat;
