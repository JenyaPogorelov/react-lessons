import React, {useState} from "react";
import './App.css';
import MyComponent from "./MyComponent";

function App() {

    const [inputText, setInputText] = useState('')

  return (
    <div className="App">
        <input type="text" value={inputText} onChange={e => setInputText(e.target.value)} style={{
            color: "green",
        }}/>
        
        <MyComponent textToShow={inputText} />
    </div>
  );
}

export default App;
