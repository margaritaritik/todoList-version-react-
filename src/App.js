import React, {useRef, useState} from "react";
import Tasks from "./components/Tasks";
import './styles/styleTodoList.css'
import styles from './styles/styleForTodo.module.css'

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

     const removeTodos=()=>{
        let todosCopy=todos;
        setTodos(todos.filter( completed => completed.completed ===true));
        let a=todos.filter(completed => completed.completed ===true);

          console.log(a);
       //  console.log(todos);
     }

    // }
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
       // console.log(`${id} ${title} ${completed}     ${todos}`);
       // console.log(todos);
    }

    let list=todos.map(todo => (<Tasks name={todo.title} id={todo.id} completed={false} checkedCompleted={check}/>));

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
                 <ButtonNotOfMade todos={todos}/>
                 <ButtonAll todos={todos}/>
                 <ButtonOfMade remove={removeTodos}  todos={todos}/>
             </div>
            <div className="containerItem">
                {list}
            </div>
    </div>
  );
}

export default App;