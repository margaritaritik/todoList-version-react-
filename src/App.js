import React, {useState} from "react";
import Tasks from "./components/Tasks";
import './styles/styleTodoList.css'


function App() {
    const [todos,setTodos]=useState([
        {id:1, title:'first todo',completed:false}
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

  return (
    <div className="App">
         <div>
             <h1>Список дел</h1>
             <form className="title">
                 <input
                     className="textforwrite"
                     type="text" value={todoTitle}
                     onChange={event => setTodoTitle(event.target.value)}
                     onKeyPress={addTodo}

                 ></input>
                 <button className="btn1">сохранить</button>
             </form>
             <div className="listForAll">
                 <button id="buttonOfMadeId" >сделанные</button>
                 <button id="buttonAllId" >все</button>
                 <button id="buttonNotOfMadeId" >не сделанные</button>
             </div>
             <div className={'Container'}>
             </div>
         </div>,
      <Tasks name={todoTitle}/>
    </div>
  );
}

export default App;