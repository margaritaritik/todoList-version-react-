import React from 'react';
import style from './buttonStyle.module.css'
import {ReactComponent as img_btn_delete} from '../../images/Wastebasket.svg'

const ButtonDelete = ({children,...props}) => {
    return (
        <button className={style.btn}  {...props}  >
            <img_btn_delete className="btn_delete" width='200px' height="200px" />
            {/*<svg xmlns='/images/Wastebasket.svg' ></svg>*/}
        </button>
    );
};

export default ButtonDelete;