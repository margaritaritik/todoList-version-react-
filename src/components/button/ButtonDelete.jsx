import React from 'react';
import style from './buttonStyle.module.css'

const ButtonDelete = ({children,...props}) => {
    return (
        <button className={style.btn}  {...props}  >
            <img src="" alt="X" className="btn_delete"/>
        </button>
    );
};

export default ButtonDelete;