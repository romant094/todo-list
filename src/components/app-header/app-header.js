import React from 'react';
import './app-header.css';

const AppHeader = ({toDo, done}) => {
    return (
        <div className='header'>
            <h1>Todo list</h1>
            <span> {toDo} more to do, {done} done</span>
        </div>
    );
}

export default AppHeader;