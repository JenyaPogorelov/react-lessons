import React, {useState, useEffect} from "react";
import './App.css';
import InputComponent from "./InputComponent";
import ButtonComponent from "./ButtonComponent";
import MessageListComponent from "./MessageListComponent";
import InputAuthorComponent from "./InputAuthorComponent";

function App() {

    const [inputMessage, setInputMessage] = useState('');
    const [messagesArray, setMessagesArray] = useState([]);
    const [author, setAuthor] = useState('');

    const onSendMessage = () => {
        if (inputMessage && author) {
            setMessagesArray(prev => [...prev, {textMessage: inputMessage, author: author}])
        }   else {
            console.log('Введите сообщение');
        }
    }

    useEffect(() => {
        if (inputMessage && author) {
            setInputMessage('')
            setTimeout(function() {
                setInputMessage('')
                setMessagesArray(prev => [...prev, {textMessage: inputMessage, author: 'робот'}])
            }, 1500);
        }
    }, [messagesArray])

    return <div className='mainWrapper'>
        <div className='messageList'>
            {
                messagesArray.map((message, index) => (
                <MessageListComponent
                    key={index}
                    message={message}
                />
                ))
            }
        </div>

        <div className="inputWrapper">
            <InputComponent
                value={inputMessage}
                onChange={setInputMessage}
                onKeyDown={onSendMessage}
            />
            <div className='inputWrapper__buttonAuthor'>
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

export default App;
