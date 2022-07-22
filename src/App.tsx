import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import {MethodMap} from "./components/MethodMap";
import {Button} from "./components/Button";
import {ClickCounter} from "./components/ClickCounter";


function App() {
    return (<>
            {/*<Button name={} callBack={}/>*/}
            <ClickCounter/>
            {/*<MethodMap car={}/>*/}
        </>
    )
}

export default App;
