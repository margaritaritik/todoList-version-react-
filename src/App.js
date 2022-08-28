import React, {useMemo, useRef, useState} from "react";
import Tasks from "./components/Tasks";
import './styles/styleTodoList.css'
import styleInput from './components/input/inputStyle.module.css'
import styles from './styles/styleForTodo.module.css'
import {Spring, animated, useSpring} from 'react-spring'


import ButtonsMenu from "./components/button/ButtonsMenu";


function App(props) {
    const [todos,setTodos]=useState([
        {id:1, title:'first',completed:false},
        {id:2, title:'second',completed:false},
        {id:3, title:'second ',completed:false}
    ]);
    const [todosTest,setTodosTest]=useState(todos);
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
                     className={styleInput.textForWrite}
                     type="text" value={todoTitle}
                     onChange={event => setTodoTitle(event.target.value)}
                     onKeyPress={addTodo}
                 />
                 <button key="btn1" className='btnSave' onClick={addTodo}>сохранить</button>
             </header>
             <div className="listForAll">
                 <ButtonsMenu key="1b" onClick={ButtonOfMadeClick} >Сделанные</ButtonsMenu>
                 <ButtonsMenu key="2b" onClick={ButtonAllClick} >Все</ButtonsMenu>
                 <ButtonsMenu key="3b" onClick={ButtonNotOfMadeClick}>Не сделанные</ButtonsMenu>
             </div>
            <div className="containerItem">
                {list}


            </div>
    </div>
  );
}

export default App;