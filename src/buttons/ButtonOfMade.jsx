import React from 'react';

const ButtonOfMade = () => {
    const notMadeTodos = event =>{
        console.log("button not made click");
    }
    return (
            <button key="buttonNotOfMadeId" onClick={notMadeTodos} >не сделанные</button>
    );
};

export default ButtonOfMade;