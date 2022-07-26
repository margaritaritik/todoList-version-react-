import React from 'react';

const ButtonNotOfMade = ({todos}) => {
    const madeTodos = event =>{
        const ableToDrink = todos.filter( completed => completed.completed ===true );

        console.log(ableToDrink)
    }

    return (
            <button key="buttonOfMadeId" onClick={madeTodos}>сделанные</button>
    );
};

export default ButtonNotOfMade;