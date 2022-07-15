import React from 'react';
import styles from '../styles/styleForTodo.module.css'
// import "./styles/styleForTodo.module.css"

const Tasks = function (props) {
    return (
        <div className={styles.divTodo}>
            <label key={props.id.toString()} className={styles.textTodo} >
                <input key={'inputting'} type={"checkbox"} />
                <span>{props.name}</span>
            </label>
        </div>
    );
};

export default Tasks;
