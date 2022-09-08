import React, {useState} from 'react';
import styles from '../styles/styleForTodo.module.css';
import ButtonDelete from "./button/ButtonDelete";
import Menu_todo from "./Menu_todo";



const Tasks = function ({name,id,completed,checkedCompleted,deleteTodo}) {
    // const [checked_,setChecked]=useState(completed);

    const ChangeCompleted = ()=>{
        // setChecked(!checked_);
        // completed=!checked_;
        completed=!completed;
        checkedCompleted(id,name,completed);
    }


    return (
        <div  className={styles.containerTodo}>
            <div className={styles.divTodo}>
                <label key={id} className={styles.textTodo}>
                    <input key={'inputting'} type={"checkbox"} onChange={ChangeCompleted} />
                    <span >{name}</span>
                </label>
                <Menu_todo id={id} deleteTodo={deleteTodo}/>
            </div>

        </div>

    );
};

export default Tasks;
