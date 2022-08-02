import React from 'react';
import style from './buttonStyle.module.css'

const ButtonDelete = ({children,...props}) => {
    return (
        <button className={style.btn}  {...props}  > {children}</button>
    );
};

export default ButtonDelete;