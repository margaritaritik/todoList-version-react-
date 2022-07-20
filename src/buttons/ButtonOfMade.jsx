import React from 'react';

const ButtonOfMade = (props) => {
    const notMadeTodos = event =>{
        console.log(props.todos);
    }
    return (
            <button key="buttonNotOfMadeId" onClick={notMadeTodos} >не сделанные</button>
    );
};

export default ButtonOfMade;