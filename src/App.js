import React, {useMemo, useRef, useState} from "react";
import Tasks from "./components/Tasks";
import './styles/styleTodoList.css'
import styles from './styles/styleForTodo.module.css'
import {Spring, animated, useSpring} from 'react-spring'

import MyButton from "./components/button/MyButton";


function App(props) {
    const [todos,setTodos]=useState([
        {id:1, title:'first todo',completed:false},
        {id:2, title:'second todo',completed:false},
        {id:3, title:'second todo2',completed:false}
    ]);
    const [todosTest,setTodosTest]=useState(todos);

   // console.log(props);
    const [todoTitle,setTodoTitle]=useState('');
    const addTodo = event =>{
        if(event.key==='Enter'){
            setTodos([
                ...todos,
                {
                    id:Date.now(),
                    title: todoTitle,
                    completed: false
                }
            ])
            setTodosTest([
                ...todosTest,
                {
                    id:Date.now(),
                    title: todoTitle,
                    completed: false
                }
            ])
            setTodoTitle('');
        }
    }


    const check=(id,title,completed)=>{
       const todo={id:id,title:title,completed:completed};
       const myArray=todos.find(x => x.id === id).id;
        setTodos(todos.map(obj => {
            if (obj.id == id) {
                return {...obj, ['completed']:!(obj.completed) };
            } else {
                return obj;
            }
        }));
    }
    const deleteTodo=(id)=>{
        setTodosTest(todosTest.filter(note => note.id !== id));
        setTodos(todos.filter(note => note.id !== id));
    }


     let list=todosTest.map(todo => (<Tasks name={todo.title} id={todo.id} completed={false} checkedCompleted={check} deleteTodo={deleteTodo} />));

     const ButtonOfMadeClick = event =>{
         setTodosTest([...todos].filter( completed => completed.completed === true));
    }

    const ButtonNotOfMadeClick = event =>{
         setTodosTest([...todos].filter( completed => completed.completed === false));
    }

    const ButtonAllClick = event =>{
        setTodosTest([...todos]);
    }
  return (
    <div className="App">
             <header className="headerInput">
                 <h1>Список дел</h1>
                 <input
                     className="textforwrite"
                     type="text" value={todoTitle}
                     onChange={event => setTodoTitle(event.target.value)}
                     onKeyPress={addTodo}
                 />
                 <button key="btn1" onClick={addTodo}>сохранить</button>
             </header>
             <div className="listForAll">
                 <MyButton key="1b" onClick={ButtonOfMadeClick} >Сделанные</MyButton>
                 <MyButton key="2b" onClick={ButtonAllClick} >Все</MyButton>
                 <MyButton key="3b"  onClick={ButtonNotOfMadeClick}>Не сделанные</MyButton>
             </div>
            <div className="containerItem">
                {list}
            </div>
    </div>
  );
}

export default App;