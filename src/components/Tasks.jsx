import React, {useState} from 'react';
import styles from '../styles/styleForTodo.module.css';
import ButtonDelete from "./button/ButtonDelete";
import Menu_todo from "./Menu_todo";



const Tasks = function ({name,id,completed,checkedCompleted,deleteTodo}) {

    const ChangeCompleted = ()=>{
        checkedCompleted(id,name,completed);
    }


    return (
        <div  className={styles.containerTodo}>
            <div className={styles.divTodo}>
                <label  className={styles.textTodo}>
                    <input type="checkbox" checked={completed} onChange={ChangeCompleted} />
                    <span >{name}</span>
                </label>
                <Menu_todo id={id} deleteTodo={deleteTodo}/>
            </div>

        </div>

    );
};

export default Tasks;
