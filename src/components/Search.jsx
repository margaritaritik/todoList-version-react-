import React, {useEffect, useState} from 'react';
import styles from './input/inputStyle.module.css'

const Search = ({searchTodo}) => {
    const [todoTitle, setTodoTitle] = useState('');
    const search=(event)=>{
            setTodoTitle(event.target.value)
    }

    useEffect(() => { searchTodo(todoTitle)}, [todoTitle]);

    return (
        <div >
            <input type='text'
                   className={styles.textForWriteSearch}
                   placeholder="🔍"
                   value={todoTitle}
                   onChange={search}/>
        </div>
    );
};

export default Search;