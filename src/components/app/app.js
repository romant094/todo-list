import React from 'react';
import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import TodoList from '../todo-list';
import Itemstatusfliter from '../item-status-fliter';
import './app.css';

const App = () => {

    const todoData = [
        {
            label: 'Drink coffee',
            important: false,
            id: 1
        },
        {
            label: 'Spend no money on study',
            important: false,
            id: 2
        },
        {
            label: 'Build awesome App',
            important: true,
            id: 3
        },
    ];

    return (
        <div>
            <AppHeader />
            <SearchPanel />
            <Itemstatusfliter />
            <TodoList todos={todoData} />
        </div >
    );
}

export default App;