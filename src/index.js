import React from 'react';
import ReactDOM from 'react-dom';

import AppHeader from './components/app-header';
import SearchPanel from './components/search-panel';
import TodoList from './components/todo-list';
import Itemstatusfliter from './components/item-status-fliter';

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

ReactDOM.render(<App />, document.getElementById('root'));