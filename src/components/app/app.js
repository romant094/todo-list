import React, { Component } from 'react';
import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import TodoList from '../todo-list';
import Itemstatusfliter from '../item-status-fliter';
import ItemAddForm from '../item-add-form';

import './app.css';

export default class App extends Component {
    maxId = 100;
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
            const newArray = [
                ...todoData.slice(0, index),
                ...todoData.slice(index + 1)
            ]
            return {
                todoData: newArray
            }
        })
    }
    addItem = (text) => {
        const { todoData } = this.state;
        const newItem = {
            label: 'lorem ipsum',
            important: false,
            id: this.maxId++
        }
        this.setState(({ todoData }) => {
            const newArray = [
                ...todoData,
                newItem
            ]
            return {
                todoData: newArray
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
                <ItemAddForm onItemAdded={() => this.addItem()} />
            </div >
        );
    }
}