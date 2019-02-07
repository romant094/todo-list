import React from 'react';
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome';
import { faTrash, faExclamation } from '@fortawesome/free-solid-svg-icons'

import './todo-list-item.css';

const TodoListItem = (props) => {
    const { label, onDeleted, onToggleImportant, onToggleDone, done, important } = props;
    let classNames = 'todo-list-item';
    if (done) {
        classNames += ' done';
    }
    if (important) {
        classNames += ' important';
    }

    return (
        <>
            <span className={classNames}>
                <span className='todo-list-item-label'
                    onClick={onToggleDone}>
                    {label}
                </span>
            </span>
            <div className="todo-list-buttons">
                <button className="btn btn-outline-danger btn-sm"
                    onClick={onDeleted}><Icon icon={faTrash} /></button>
                <button className="btn btn-outline-success btn-sm"
                    onClick={onToggleImportant}><Icon icon={faExclamation} /></button>
            </div>
        </>
    )
}

export default TodoListItem;