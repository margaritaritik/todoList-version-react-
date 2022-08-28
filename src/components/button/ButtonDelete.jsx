import React from 'react';
import style from './buttonStyle.module.css'
import {ReactComponent as ImgD} from '../../images/icon-trash.svg';

const ButtonDelete = ({children,...props}) => {
    return (
        <button className={style.btn}  {...props}  >
            <ImgD class={style.btn_delete}/>
        </button>
    );
};

export default ButtonDelete;