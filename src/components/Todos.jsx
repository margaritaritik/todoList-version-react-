import React from 'react';
import Tasks from "./Tasks";

const Todos =function (todos) {
     let listTodos =todos.todos;
     let list=listTodos.map(todo => (<Tasks name={todo.title} id={todo.id} completed={false} />));
    return (
    <div className="containerItem">
        {list}
    </div>
    );
};

export default Todos;