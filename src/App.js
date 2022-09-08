import React, {useMemo, useRef, useState} from "react";
import Tasks from "./components/Tasks";
import './styles/styleTodoList.css'
import styleInput from './components/input/inputStyle.module.css'
import styles from './styles/styleForTodo.module.css'
import {Spring, animated, useSpring} from 'react-spring'


import ButtonsMenu from "./components/button/ButtonsMenu";
import Cloud_animation from "./components/animation elements/Cloud_animation";


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
        const todo = {id: id, title: title, completed: completed};
        const myArray = todos.find(x => x.id === id).id;
        console.log(completed);
        setTodos(todos.map(obj => {
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
        if (filter_mode === FILTER_VARIANTS.MADE) {
            return todos.filter(completed => completed.completed);
        } else if (filter_mode === FILTER_VARIANTS.NOT_MADE) {

            return todos.filter(completed => !completed.completed);
        } else {
            return todos;
        }
    }

    const setFilterValue = (value) => {
        console.log(`${filter_mode} - ${value}`);
        setFilterMode(value);
        console.log(`${filter_mode} - ${value}`);
        // ButtonsFilterClick();
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
            </div>
            <div className="containerItem">
                {getFiltered().map(todo => (
                    <Tasks name={todo.title} id={todo.id} completed={false} checkedCompleted={check}
                           deleteTodo={deleteTodo}/>))}
            </div>
        </div>
    );
}

export default App;