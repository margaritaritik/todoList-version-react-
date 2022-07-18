import React, {useState} from 'react';
import styles from '../styles/styleForTodo.module.css'
// import "./styles/styleForTodo.module.css"

const Tasks = function (props) {
    const [checked,setChecked]=useState(props.completed);
    // if(checked){
    //     props.completed=true;
    // }
    // setChecked(){}

    return (
        <div className={styles.divTodo}>
            <label key={props.id.toString()} className={styles.textTodo} >
                <input key={'inputting'} type={"checkbox"} checked={checked} onChange={()=>setChecked(!checked)} />
                <span>{props.name}</span>
            </label>
        </div>
    );
};

export default Tasks;
