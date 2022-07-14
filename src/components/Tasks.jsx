import React from 'react';
import styles from '../styles/styleForTodo.css'
// import "./styles/styleForTodo.css"

const Tasks = function (props) {
    return (
        <div className={styles.divTodo}>
            <label key={props.id.toString()} >
                <input key={'inputting'} type={"checkbox"} />
                <span>{props.name}</span>
            </label>
        </div>
    );
};

export default Tasks;
