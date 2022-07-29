import React from 'react';

const ButtonAll = ({todos,remove}) => {
    const allTodos = event =>{
        // const todosOfMade = todos.filter( completed => completed.completed ===true);
        remove();
    }

    return (
            <button key="buttonAllId" onClick={allTodos} >все</button>
    );
};

export default ButtonAll;