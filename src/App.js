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
        console.log(messagesArray)
        if (inputMessage) {
            setMessagesArray(prev => [...prev, {textMessage: inputMessage, author: author}])
        }   else {
            console.log('Введите сообщение');
        }
    }

    useEffect(() => {
        if (inputMessage) {
            setInputMessage('')
            setTimeout(function() {
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
            <InputAuthorComponent
                value={author}
                onChange={setAuthor}
                onKeyDown={onSendMessage}
            />
            <InputComponent
                value={inputMessage}
                onChange={setInputMessage}
                onKeyDown={onSendMessage}
            />
            <ButtonComponent
                onClick={onSendMessage}
            />
        </div>

    </div>
}

export default App;
