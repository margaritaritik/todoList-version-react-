import React from 'react';

const ButtonNotOfMade = () => {
    const madeTodos = event =>{
        console.log("button of made click")
    }

    return (
            <button key="buttonOfMadeId" onClick={madeTodos}>сделанные</button>
    );
};

export default ButtonNotOfMade;