import React, { Component } from 'react';

import './todo-list-item.css';

export default class TodoListItem extends Component {
    // New standard
    state = {
        done: false,
        important: false
    };
    onLabelClick = () => {
        this.setState(({done}) => {
            return{
                done: !done
            }
        });
    };
    onMarkImportant = () => {
        this.setState(({important}) => {
            return{
                important: !important
            }
        });
    };

    // end of new standard

    render() {
        const { label, onDeleted } = this.props;
        const { done, important } = this.state;
        let classNames = 'todo-list-item';
        if (done) {
            classNames += ' done';
        }
        if (important) {
            classNames += ' important';
        }

        return (
            <>
                <span className={classNames}>
                    <span className='todo-list-item-label' onClick={this.onLabelClick}>{label}</span>
                </span>
                <div className="todo-list-buttons">
                    {/* TODO add icons into buttons */}
                    <button className="btn btn-outline-danger btn-sm"
                    onClick={onDeleted}>delete</button>
                    <button className="btn btn-outline-success btn-sm" onClick={this.onMarkImportant}>!</button>
                </div>
            </>
        )
    }
}