import React, { Component } from 'react';

import './todo-list-item.css';

export default class TodoListItem extends Component {

    render() {
        const { label, important = false } = this.props;

        const spanStyle = {
            color: important ? 'steelblue' : 'black',
            fontWeight: important ? 'bold' : 'normal'
        }

        return (
            <>
                <span className="todo-list-item" style={spanStyle}>{label}</span>
                <div className="todo-list-buttons">
                    {/* TODO add icons into buttons */}
                    <button className="btn btn-outline-danger btn-sm">delete</button>
                    <button className="btn btn-outline-success btn-sm">!</button>
                </div>
            </>
        )
    }
}