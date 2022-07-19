import React from 'react';

const ButtonAll = () => {
    const allTodos = event =>{
        console.log('button all click');
    }

    return (
            <button key="buttonAllId" onClick={allTodos} >все</button>
    );
};

export default ButtonAll;