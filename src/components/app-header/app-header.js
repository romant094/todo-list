import React from 'react';
import './app-header.css';

const AppHeader = () => {
    return (
        <div className='header'>
            <h1>ToDo list</h1>
            <span> {1} more to do, {3} done</span>
        </div>
    );
}

export default AppHeader;