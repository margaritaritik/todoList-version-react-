import React from 'react';
import Tasks from "./Tasks";

const Todos =function (todos) {
     let listTodos =todos.todos;
     let count=todos.count;
     let list=listTodos.map(todo => (<Tasks name={todo.title} id={todo.id} completed={false} />));

    return (
    <div className="containerItem">
        {list}
    </div>
    );
};

export default Todos;