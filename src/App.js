import React, {useState, useEffect } from "react";
import './App.css';
import InputComponent from "./inputComponent";

function App() {

    const [inputMessage, setInputMessage] = useState('');
    const [messagesArray, setMessagesArray] = useState([]);

    // console.log(messagesArray);

    const onSendMessage = () => {
      setMessagesArray(prev => [...prev, inputMessage])
      setInputMessage('')
    }
    
    return <div className='mainWrapper'>
        <div className='messageList'>
            {
                messagesArray.map((message, index) => (
                    <div key={index}>{message}</div>
                ))
            }
        </div>
        
        <div className="inputWrapper">
            {/*<input*/}
            {/*    type="text"*/}
            {/*    className='input'*/}
            {/*    value={inputMessage}*/}
            {/*    onChange={event => setInputMessage(event.target.value)}*/}
            {/*    onKeyDown={({key}) => {*/}
            {/*        if (key === 'Enter') {*/}
            {/*            onSendMessage()*/}
            {/*        }*/}
            {/*    }}*/}
            {/*/>*/}

            {/*<button */}
            {/*    onClick={ onSendMessage }*/}
            {/*>*/}
            {/*    Отправить*/}
            {/*</button>*/}
            <InputComponent
                value={inputMessage}
                onChange={setInputMessage}
                onKeyDown={onSendMessage}
            />
        </div>
        
    </div>
}

export default App;
