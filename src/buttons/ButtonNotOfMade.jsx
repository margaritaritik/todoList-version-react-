import React from 'react';

const ButtonNotOfMade = ({todos,remove}) => {
    const notMadeTodos = event =>{
        const todosOfMade = todos.filter( completed => completed.completed ===false);
        remove(todosOfMade);
    }

    return (
            <button key="buttonNotOfMadeId" onClick={notMadeTodos}>не сделанные</button>
    );
};

export default ButtonNotOfMade;