import React from 'react';
import Tasks from "./Tasks";

const Todos =function ({todos,create}) {
    let listTodos =todos;
    const check=(id,title,completed)=>{
        const todo={id:id,title:title,completed:completed};
        console.log(`${id} ${title} ${completed}`);
        create(todo);
    }
    let list=listTodos.map(todo => (<Tasks name={todo.title} id={todo.id} completed={false}  checkedCompleted={check} />));
    return (
    <div className="containerItem">
        {list}
    </div>
    );
};

export default Todos;