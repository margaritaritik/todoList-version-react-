import React from 'react';

const ButtonsMenu = ({children,...props}) => {
    return (
       <button {...props}>{children} </button>
    );
};

export default ButtonsMenu;