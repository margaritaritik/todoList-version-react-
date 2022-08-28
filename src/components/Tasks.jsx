import React, {useState} from 'react';
import styles from '../styles/styleForTodo.module.css';
import ButtonDelete from "./button/ButtonDelete";
import Menu_todo from "./Menu_todo";



const Tasks = function ({name,id,completed,checkedCompleted,deleteTodo}) {
    const [checked,setChecked]=useState(completed);
    const [isHovering,setIsHovering]=useState(false);
    const handleMouseOver = () => {
        setIsHovering(true);
    };


    const handleMouseOut = () => {
        setIsHovering(false);
    };

    const ChangeCompleted = ()=>{
        setChecked(!checked);
        completed=!checked;
        checkedCompleted(id,name,completed);
    }


    return (
        <div  className={styles.containerTodo}>
            <div className={styles.divTodo} onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
                <label key={id} className={styles.textTodo}>
                    <input key={'inputting'} type={"checkbox"} checked={checked} onChange={ChangeCompleted} />
                    <span >{name}</span>
                </label>
                <Menu_todo id={id} deleteTodo={deleteTodo}/>
            </div>

        </div>

    );
};

export default Tasks;
