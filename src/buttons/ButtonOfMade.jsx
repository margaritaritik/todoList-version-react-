import React from 'react';

const ButtonOfMade = ({todos,remove}) => {
    const MadeTodos = event =>{
        const ableToDrink = todos.filter( completed => completed.completed ===false );
        remove();
    }
    return (
            <button key="buttonOfMadeId" onClick={MadeTodos} > сделанные</button>
    );
};

export default ButtonOfMade;