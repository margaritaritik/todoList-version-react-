import React, {useState} from 'react';
import styles from '../styles/styleForTodo.module.css'

const Tasks = function (props) {

    let {name,id,completed} =props;
    const [checked,setChecked]=useState(completed);

    const ChangeCompleted = ()=>{
        setChecked(!checked);
        completed=!checked;
    }

    return (
        <div className={styles.divTodo}>
            <label key={id.toString()} className={styles.textTodo}>
                <input key={'inputting'} type={"checkbox"} checked={checked} onChange={ChangeCompleted} />
                <span>{name}</span>
            </label>
        </div>
    );
};

export default Tasks;
