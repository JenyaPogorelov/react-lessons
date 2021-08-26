import React, {useState, useEffect} from "react";
import PropTypes from 'prop-types';
import {makeStyles} from '@material-ui/core/styles';
import '../App.css';
import InputComponent from "./InputComponent";
import ButtonComponent from "./ButtonComponent";
import MessageBoxComponent from "./MessageBoxComponent";
import InputAuthorComponent from "./InputAuthorComponent";
import ArrayChats from "./ArrayChats";

const useStyles = makeStyles((theme) => ({
    mainWrapper: {
        width: '600px',
        height: '800px',
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

function Index() {

    const [inputMessage, setInputMessage] = useState('');
    const [messagesArray, setMessagesArray] = useState([]);
    const [author, setAuthor] = useState('Anonymous');

    const classes = useStyles();

    const onSendMessage = () => {
        if (inputMessage && author) {
            setMessagesArray(prev => [...prev, {textMessage: inputMessage, author: author}])
        } else {
            console.log('Введите сообщение');
        }
    }

    useEffect(() => {
        if (inputMessage && author) {
            setInputMessage('')
            setTimeout(function () {
                setInputMessage('')
                setMessagesArray(prev => [...prev, {textMessage: inputMessage, author: 'робот'}])
            }, 1500);
        }
    }, [messagesArray])

    return <div className={classes.mainWrapper}>
        <ArrayChats />
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
                    value={author}
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

export default Index;