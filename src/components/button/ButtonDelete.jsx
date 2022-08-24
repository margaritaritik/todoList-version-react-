import React from 'react';
import style from './buttonStyle.module.css'
// import img_btn_delete from '../../../public/fishbowl-withfish.svg'

const ButtonDelete = ({children,...props}) => {
    return (
        <button className={style.btn}  {...props}  >
            <img src= '/fishbowl-withfish.svg' alt="X" className="btn_delete"/>
        </button>
    );
};

export default ButtonDelete;