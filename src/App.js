import React, {useRef, useState} from "react";
import Tasks from "./components/Tasks";
import './styles/styleTodoList.css'
import styles from './styles/styleForTodo.module.css'
import Todos from "./components/Todos";
import {Spring, animated, useSpring} from 'react-spring'
import ButtonNotOfMade from "./buttons/ButtonNotOfMade";
import ButtonAll from "./buttons/ButtonAll";
import ButtonOfMade from "./buttons/ButtonOfMade";


function App(props) {
    const [todos,setTodos]=useState([
        {id:1, title:'first todo',completed:false},
        {id:2, title:'second todo',completed:false},
        {id:3, title:'second todo',completed:false}
    ]);

    console.log(props);
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
            setTodoTitle('');
        }
    }


     const createTodo = (todo)=>{
          let copy=Object.assign([],todos);

          console.log(copy);
          console.log(todo);
     }

    // }


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
                 <ButtonNotOfMade  />
                 <ButtonAll/>
                 <ButtonOfMade todos={todos}/>
             </div>
        <div className='Container'>
            <Todos todos={todos} create={createTodo} />
        </div>
    </div>
  );
}

export default App;