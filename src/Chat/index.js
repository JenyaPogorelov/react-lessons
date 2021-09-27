import React, {useState, useEffect} from "react";
import {makeStyles} from '@material-ui/core/styles';
import {useSelector, useDispatch} from 'react-redux';
import '../App.css';
import InputComponent from "./InputComponent";
import ButtonComponent from "./ButtonComponent";
import MessageBoxComponent from "./MessageBoxComponent";
import InputAuthorComponent from "./InputAuthorComponent";
import {useParams} from "react-router-dom";
import {sendMessageWithThunk, initMessageTracking} from './actions'


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
    const chats = useSelector((state) => state.chat.chats);
    const targetProfile = Object.keys(chats).find(profileId => profileId)

    const chatId = targetProfile ? Number.parseInt(urlParams.id) : null;


    const [inputMessage, setInputMessage] = useState('');
    const [author, setAuthor] = useState('Anonymous');

    const {messages} = useSelector((state) => state.chat);

    const {myId} = useSelector((state) => state.chat);

    // const messagesArray = messages.find((chat) => chat.id === chatId).massagesArray;
    const messagesArray = messages[chatId] || [];
    const {authorName} = useSelector((state) => state.profile);
    const classes = useStyles();
    const dispatch = useDispatch();

    const onSendMessage = () => {
        if (inputMessage && author) {
            dispatch(sendMessageWithThunk({chatId, inputMessage, authorId: myId}))
        } else {
            console.log('Введите сообщение');
        }
    };

    //  Прокрутка в низ, надо настроить.  //
    // useEffect(() => {
    //     if (document.getElementsByClassName("messageList")[0]) {
    //         document.getElementsByClassName("messageList")[0].scrollTop = 999999;
    //     }
    // });

    if (!targetProfile) {
        return <div>Нет собеседника</div>
    }

    // const chatId = targetProfile.chatId;

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
