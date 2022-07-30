import React from 'react';

const MyButton = ({children,...props}) => {
    const buttonClick = event =>{
        // const todosOfMade = todos.filter( completed => completed.completed ===true);

    }

    return (
        <button {...props}  > {children}</button>
    );
};

export default MyButton;