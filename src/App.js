import React, {useState} from "react";
import Tasks from "./components/Tasks";
import './styles/styleTodoList.css'
import styles from './styles/styleForTodo.module.css'
import Todos from "./components/Todos";
import {Spring, animated, useSpring} from 'react-spring'


function App() {
    const [todos,setTodos]=useState([
        {id:1, title:'first todo',completed:false},
        {id:2, title:'second todo',completed:false},
        {id:3, title:'second todo',completed:false}
    ])
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
        }
    }
    const Toggle=()=>{
        const [isToggle,setToggle]=useState(false);
        const fade=useSpring({

        })
    }


  return (
    <div className="App">
         <div>
             <h1>Список дел</h1>
             {/*<form className="title">*/}
                 <input
                    className="textforwrite"
                    type="text" value={todoTitle}
                    onChange={event => setTodoTitle(event.target.value)}
                    onKeyPress={addTodo}

                 />
                 <button key="btn1" onClick={addTodo}>сохранить</button>
             {/*</form>*/}
             <div className="listForAll">
                 <button key="buttonOfMadeId" onClick={addTodo}>сделанные</button>
                 <button key="buttonAllId" >все</button>
                 <button key="buttonNotOfMadeId" >не сделанные</button>
             </div>
             <div className={'Container'}>
             </div>
         </div>
        <div >
            <Todos todos={todos}/>
        </div>
    </div>
  );
}

export default App;