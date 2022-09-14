import React, {useMemo, useRef, useState} from "react";
import Tasks from "./components/Tasks";
import './styles/styleTodoList.css'
import styleInput from './components/input/inputStyle.module.css'
import styles from './styles/styleForTodo.module.css'
import {Spring, animated, useSpring} from 'react-spring'


import ButtonsMenu from "./components/button/ButtonsMenu";
import Cloud_animation from "./components/animation elements/Cloud_animation";
import Search from "./components/Search";


function App(props) {

    const FILTER_VARIANTS = {
        ALL: "ALL",
        MADE: "MADE",
        NOT_MADE: "NOT_MADE"
    }
    const [todos, setTodos] = useState([
        {id: 1, title: 'first', completed: false},
        {id: 2, title: 'second', completed: false},
        {id: 3, title: 'second ', completed: false}
    ]);
    const [filter_mode, setFilterMode] = useState(FILTER_VARIANTS.ALL);

    const [filteredList, setFilteredList] = useState(todos);
    const [todoTitle, setTodoTitle] = useState('');
    const [searchTitle, setSearchTitle] = useState('');

    function addTodo(event) {
        event.preventDefault();
        setTodos([
            ...todos,
            {
                id: Date.now(),
                title: todoTitle,
                completed: false
            }
        ])
        setFilteredList([
            ...filteredList,
            {
                id: Date.now(),
                title: todoTitle,
                completed: false
            }
        ])
        setTodoTitle('');

    }


    const check = (id, title, completed) => {
        setFilteredList(filteredList.map(obj => {
            if (obj.id === id) {
                return {...obj, completed: !(obj.completed)};
            } else {
                return obj;
            }
        }));
    }

    const deleteTodo = (id) => {
        setFilteredList(filteredList.filter(note => note.id !== id));
        setTodos(todos.filter(note => note.id !== id));
    }

    const getFiltered = () => {
        let filteredList1 = [...filteredList];
        if(searchTitle.length>0)
        {
            filteredList1= filteredList1.filter(obj => (obj.title).includes(searchTitle));
        }
        if (filter_mode === FILTER_VARIANTS.MADE) {
            return filteredList1.filter(completed => completed.completed);
        } else if (filter_mode === FILTER_VARIANTS.NOT_MADE) {
            return filteredList1.filter(completed => !completed.completed);
        } else {
            return filteredList1;
        }
    }

    const setFilterValue = (value) => {
        setFilterMode(value);
    }
     const searchTodo = (todo) => {
         setSearchTitle(todo);
     }


    return (
        <div className="App">
            <div className="container">
                <Cloud_animation/>
                <header className="headerInput">
                    <h1>Список дел</h1>
                    <form onSubmit={addTodo}>
                        <input
                            className={styleInput.textForWrite}
                            type="text" value={todoTitle}
                            onChange={event => setTodoTitle(event.target.value)}
                        />
                        <button type="submit" key="btn1" className='btnSave'>сохранить</button>
                    </form>
                </header>

                <div className="listForAll">
                    <ButtonsMenu key="1b" onClick={() => {
                        setFilterValue(FILTER_VARIANTS.MADE)
                    }}>Сделанные</ButtonsMenu>
                    <ButtonsMenu key="2b" onClick={() => {
                        setFilterValue(FILTER_VARIANTS.ALL)
                    }}>Все</ButtonsMenu>
                    <ButtonsMenu key="3b" onClick={() => {
                        setFilterValue(FILTER_VARIANTS.NOT_MADE)
                    }}>Не сделанные</ButtonsMenu>
                </div>
                <Search searchTodo={searchTodo}/>
            </div>
            <div className="containerItem">
                {getFiltered().map(todo => (
                    <Tasks key={todo.id} name={todo.title} id={todo.id} completed={todo.completed} checkedCompleted={check}
                           deleteTodo={deleteTodo}/>))}
            </div>
        </div>
    );
}

export default App;