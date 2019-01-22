import React from 'react';

import TodoListItem from './todo-list-item';
import './todo-list.css';

const TodoList = ({ todos }) => {

    const elements = todos.map((item) => {
        return (
            <li className='list-group-item' key={item.id}>
                <TodoListItem {...item} />
            </li>
        );
    });

    console.log(elements);

    return (
        <ul className='list-group todo-list'>
            {elements}
        </ul>
    );
}

export default TodoList;