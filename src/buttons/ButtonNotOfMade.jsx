import React from 'react';

const ButtonNotOfMade = ({todos}) => {
    const madeTodos = event =>{
        const ableToDrink = todos.filter( completed => completed.completed ===false );

        //console.log(ableToDrink)
    }

    return (
            <button key="buttonNotOfMadeId" onClick={madeTodos}>не сделанные</button>
    );
};

export default ButtonNotOfMade;