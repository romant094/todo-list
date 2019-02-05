import React, { Component } from 'react';

import './todo-list-item.css';

export default class TodoListItem extends Component {

    // constructor() {
    //     super();
    //     this.onLabelClick = () => {
    //         console.log(`Done: ${this.props.label}`)    
    //     }
    // }

    // New standard
    onLabelClick = () => {
        console.log(`Done: ${this.props.label}`)    
    }

    render() {
        const { label, important = false } = this.props;

        const spanStyle = {
            color: important ? 'steelblue' : 'black',
            fontWeight: important ? 'bold' : 'normal'
        }

        return (
            <>
                <span className="todo-list-item" style={spanStyle}>
                    <span className='todo-list-item-label' onClick={this.onLabelClick}>{label}</span>
                </span>
                <div className="todo-list-buttons">
                    {/* TODO add icons into buttons */}
                    <button className="btn btn-outline-danger btn-sm">delete</button>
                    <button className="btn btn-outline-success btn-sm">!</button>
                </div>
            </>
        )
    }
}