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
        ],
        term: '',
        filter: 'all'
    };
    createTodoItem(label) {
        return {
            label,
            important: false,
            done: false,
            id: this.maxId++
        }
    };
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
    };
    addItem = (text) => {
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
    };
    toggleProperty(arr, id, propName) {
        const index = arr.findIndex((el) => el.id === id);

        const oldItem = arr[index];
        const newItem = {
            ...oldItem,
            [propName]: !oldItem[propName]
        };

        return [
            ...arr.slice(0, index),
            newItem,
            ...arr.slice(index + 1)
        ];
    };
    onToggleImportant = (id) => {
        this.setState(({ todoData }) => {
            return {
                todoData: this.toggleProperty(todoData, id, 'important')
            }
        });
    };
    onToggleDone = (id) => {
        this.setState(({ todoData }) => {
            return {
                todoData: this.toggleProperty(todoData, id, 'done')
            }
        });
    };
    search(items, term) {
        if (term.length === 0) {
            return items;
        }
        return items.filter((item) => {
            return item.label.toLowerCase().indexOf(term.toLowerCase()) > -1;
        })
    }
    onSearchChange = (term) => {
        this.setState({ term });
    }
    filter(items, filter) {
        switch (filter) {
            case 'all':
                return items;
            case 'active':
                return items.filter((item) => !item.done);
            case 'done':
                return items.filter((item) => item.done);
            default:
                return items;
        }
    }
    onFilterChange = (filter) => {
        this.setState({ filter });
    }
    render() {
        const { todoData, term, filter } = this.state;

        const visibleItems = this.filter(
            this.search(todoData, term), filter);

        const doneCount = todoData.filter((el) => el.done).length;
        const todoCount = todoData.length - doneCount;

        return (
            <div className='custom-container'>
                <AppHeader toDo={todoCount} done={doneCount} />
                <div className='d-flex filters'>
                    <SearchPanel onSearchChange={this.onSearchChange} />
                    <Itemstatusfliter
                        filter={filter}
                        onFilterChange={this.onFilterChange}/>
                </div>
                <TodoList todos={visibleItems}
                    onDeleted={(id) => this.deleteItem(id)}
                    onToggleImportant={this.onToggleImportant}
                    onToggleDone={this.onToggleDone}
                />
                <ItemAddForm onItemAdded={(text) => this.addItem(text)} />
            </div >
        );
    }
}