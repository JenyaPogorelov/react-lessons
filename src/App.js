import React, {useState} from "react";
import './App.css';
import InputComponent from "./InputComponent";
import ButtonComponent from "./ButtonComponent";
import MessageListComponent from "./MessageListComponent";
import InputAuthorComponent from "./InputAuthorComponent";

function App() {

    const [inputMessage, setInputMessage] = useState('');
    const [messagesArray, setMessagesArray] = useState([]);
    const [author, setAuthor] = useState('');

    // console.log(messagesArray);

    const onSendMessage = () => {
        console.log(messagesArray)
        if (inputMessage) {
            setMessagesArray(prev => [...prev, {textMessage: inputMessage, author: author}])
            setTimeout(function() {
                setMessagesArray(prev => [...prev, {textMessage: inputMessage, author: 'робот'}])
            }, 1500);

            setInputMessage('')
        }   else {
            console.log('Введите сообщение');
        }

    }

    return <div className='mainWrapper'>
        <div className='messageList'>
            {
                messagesArray.map((message, index) => (
                    // <div key={index}>{index}</div>
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
