import React from "react";
type ButtonPropsType = {
    name: string,
    callBack: ()=>void
}

export const Button = (props: ButtonPropsType) => {
    const onClickFunc = () => {
        props.callBack()
    }
    return (
            <button onClick={onClickFunc}>{props.name}</button>
        )
}