import React from 'react';

const ButtonNotOfMade = () => {
    const madeTodos = event =>{
        console.log(todos)
    }


    return (
        <div>
            <button key="buttonOfMadeId" onClick={madeTodos}>сделанные</button>
        </div>
    );
};

export default ButtonNotOfMade;