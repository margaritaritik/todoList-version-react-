import React from 'react';
import style from './buttonStyle.module.css'

const MyButton = ({children,...props}) => {
    return (
        <button className={style.btn}  {...props}  > {children}</button>
    );
};

export default MyButton;