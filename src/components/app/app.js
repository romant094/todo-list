import React, { Component } from 'react';
import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import TodoList from '../todo-list';
import Itemstatusfliter from '../item-status-fliter';
import './app.css';

export default class App extends Component {
    state = {
        todoData: [
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
                important: false,
                id: 3
            }
        ]
    }
    deleteItem = (id) => {
        this.setState(({ todoData }) => {
            const index = todoData.findIndex((el) => el.id === id);
            const newState = [
                ...todoData.slice(0, index - 1),
                ...todoData.slice(index + 1)
            ]
            return {
                todoData: newState
            }
        })
    }
    render() {
        return (
            <div>
                <AppHeader toDo='1' done='3' />
                <SearchPanel />
                <Itemstatusfliter />
                <TodoList todos={this.state.todoData}
                    onDeleted={(id) => this.deleteItem(id)} />
            </div >
        );
    }
}