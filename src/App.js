import React, {useRef, useState} from "react";
import Tasks from "./components/Tasks";
import './styles/styleTodoList.css'
import styles from './styles/styleForTodo.module.css'

import {Spring, animated, useSpring} from 'react-spring'
import ButtonNotOfMade from "./buttons/ButtonNotOfMade";
import ButtonAll from "./buttons/ButtonAll";
import ButtonOfMade from "./buttons/ButtonOfMade";
import MyButton from "./buttons/MyButton";


function App(props) {
    const [todos,setTodos]=useState([
        {id:1, title:'first todo',completed:false},
        {id:2, title:'second todo',completed:false},
        {id:3, title:'second todo',completed:false}
    ]);

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
            setTodoTitle('');
        }
    }


     const createTodo = (todo)=>{
          let copy=Object.assign([],todos);

          console.log(copy);
          console.log(todo);
     }
    let todosCopy=todos;
     const removeTodos=(prop)=>{
         if(prop===false){
             todosCopy=todos;
             console.log(todosCopy);
             return setTodos([...todos].filter( completed => completed.completed ===false));


             // let a=[...todos].filter( completed => completed.completed ===false);

         }
         else if(prop===true){
             console.log(todos);
             setTodos(todos);
             return setTodos([...todos].filter( completed => completed.completed === true));
             // setTodos(todos);
             // console.log(todos);
             // setTodos([...todos].filter( completed => completed.completed ===true));
             // console.log(todos);
         }
         return setTodos([...todos]);

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
    const ButtonOfMadeClick = event =>{
        console.log("ljsahck");
        setTodos([...todos].filter( completed => completed.completed === true));
        // const todosOfMade = todos.filter( completed => completed.completed ===true);

    }
    const ButtonNotOfMadeClick = event =>{
        console.log("ljsahck2");
        setTodos([...todos].filter( completed => completed.completed === false));
        // const todosOfMade = todos.filter( completed => completed.completed ===true);

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
                 <MyButton key="2b"  onClick={ButtonNotOfMadeClick}>Все</MyButton>
                 <MyButton key="3b"  >Не сделанные</MyButton>
             </div>
            <div className="containerItem">
                {list}
            </div>
    </div>
  );
}

export default App;