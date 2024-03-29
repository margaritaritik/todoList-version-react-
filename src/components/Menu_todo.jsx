import React from 'react';
import styles from "../styles/styleForTodo.module.css";
import ButtonDelete from "./button/ButtonDelete";

const MenuTodo = ({id,deleteTodo}) => {
    const ButtonDeleteClick=event=>{
        deleteTodo(id);
    }
    return (
            <div className={styles.targeting}>
                <ButtonDelete key="btnDelete" onClick={ButtonDeleteClick}></ButtonDelete>
                <div className={styles.date_time}>--</div>
            </div>
    );
};

export default MenuTodo;