import React from 'react';
import style from './buttonsMenu.module.css'

const ButtonsMenu = ({children,...props}) => {
    return (
       <button className={style.btn} {...props}>{children} </button>
    );
};

export default ButtonsMenu;