import React, {useState} from 'react';
import styles from '../styles/styleForTodo.module.css';
import MyButton from "./button/MyButton";

const Tasks = function ({name,id,completed,checkedCompleted,deleteTodo}) {
    const [checked,setChecked]=useState(completed);

    const ChangeCompleted = ()=>{
        setChecked(!checked);
        completed=!checked;
        checkedCompleted(id,name,completed);
    }
    const ButtonDeleteClick=event=>{
        deleteTodo(id);
    }

    return (
        <div className={styles.divTodo}>
            <label key={id} className={styles.textTodo}>
                <input key={'inputting'} type={"checkbox"} checked={checked} onChange={ChangeCompleted} />
                <span>{name}</span>
                <MyButton key="btnDelete" onClick={ButtonDeleteClick} >УДАЛИТЬ</MyButton>
            </label>
        </div>
    );
};

export default Tasks;
