import React from 'react';

const ButtonOfMade = ({todos,remove}) => {
    const MadeTodos = event =>{
        const todosOfMade = todos.filter( completed => completed.completed ===true);
        remove(todosOfMade);
    }
    return (
            <button key="buttonOfMadeId" onClick={MadeTodos} > сделанные</button>
    );
};

export default ButtonOfMade;