import React from 'react';

const MyButton = (props) => {
    const buttonClick = event =>{
        // const todosOfMade = todos.filter( completed => completed.completed ===true);

    }

    return (
        <button key={props.key} onClick={buttonClick} > {props.name}</button>
    );
};

export default MyButton;