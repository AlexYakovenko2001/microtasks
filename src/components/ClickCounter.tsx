import React, {useState} from "react";

export const ClickCounter = () => {
    let [a, setA] = useState(1)
    const onClickHandler = () => {
        setA(++a)
    }
    const onClickHandler2 = () => {
        setA(0)
    }
    return (
        <>
            <h1>{a}</h1>
            <button onClick={onClickHandler}>add 1</button>
            <button onClick={onClickHandler2}>get 0</button>
        </>
    )
}