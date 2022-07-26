import React from 'react';

const ButtonOfMade = ({todos}) => {
    const notMadeTodos = event =>{
        const ableToDrink = todos.filter( completed => completed.completed ===false );

    }
    return (
            <button key="buttonNotOfMadeId" onClick={notMadeTodos} >не сделанные</button>
    );
};

export default ButtonOfMade;