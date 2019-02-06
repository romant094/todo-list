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
            this.createTodoItem('Drink coffee'),
            this.createTodoItem('Spend no money on study'),
            this.createTodoItem('Build awesome App')
        ]
    }
    createTodoItem(label) {
        return {
            label,
            important: false,
            done: false,
            id: this.maxId++
        }
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
        text = 'lorem ipsum';
        const newItem = this.createTodoItem(text)
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
    onToggleImportant = (id) => {
        console.log('Toggle important', id);
    }
    onToggleDone = (id) => {
        console.log('Toggle done', id);
    }
    render() {
        return (
            <div>
                <AppHeader toDo='1' done='3' />
                <SearchPanel />
                <Itemstatusfliter />
                <TodoList todos={this.state.todoData}
                    onDeleted={(id) => this.deleteItem(id)}
                    onToggleImportant={this.onToggleImportant}
                    onToggleDone={this.onToggleDone}
                />
                <ItemAddForm onItemAdded={() => this.addItem()} />
            </div >
        );
    }
}