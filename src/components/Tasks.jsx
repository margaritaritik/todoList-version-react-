import React, {useState} from 'react';
import styles from '../styles/styleForTodo.module.css'
// import "./styles/styleForTodo.module.css"

const Tasks = function (props) {
    let {name,id,completed} =props;
     // let list=listTodos.map(todo => ({}));
     let todos=props;
    const [checked,setChecked]=useState(todos.completed);
    // listTodos.id('sdfhk');

    // if(checked){
    //     props.completed=true;
    // }
    // setChecked(){}
    const ChangeCompleted = ()=>{
        setChecked(!checked);
        completed=!checked;
        console.log(`${name} ${id} ${completed}`);
    }
    return (
        <div className={styles.divTodo}>
            <label key={todos.id.toString()} className={styles.textTodo} >
                <input key={'inputting'} type={"checkbox"} checked={checked} onChange={ChangeCompleted} />
                <span>{name}</span>
            </label>
        </div>
    );
};

export default Tasks;
