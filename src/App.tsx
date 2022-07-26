import React, {useState} from 'react';
import './App.css';
import {FullInput} from './components/FullInput';



function App() {
    let[message, setMessage] = useState([
        {message: 'message1'},
        {message: 'message2'},
        {message: 'message3'}
    ])

    const addMessage = (title:string) => {
        let newMessage = [{message: title}, ...message]
        setMessage(newMessage)
    }

    return (
        <div className={'App'}>
            <FullInput addMessage={addMessage}/>
            {message.map((el,index)=>{
                return (
                    <div key={index}>{el.message}</div>
                )
            })}
        </div>
    )
}

export default App;
