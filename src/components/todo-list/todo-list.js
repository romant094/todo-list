import React from 'react';

import TodoListItem from '../todo-list-item';
import './todo-list.css';

const TodoList = ({ todos, onDeleted }) => {

    const elements = todos.map((item) => {
        const { id, ...itemProps } = item;
        return (
            <li className='list-group-item' key={id}>
                <TodoListItem
                    {...item}
                    onDeleted={()=>onDeleted(id)}/>
            </li>
        );
    });

    // TODO delete console.log
    console.log(elements);

    return (
        <ul className='list-group todo-list'>
            {elements}
        </ul>
    );
}

export default TodoList;