import React, { Component } from 'react';
import './item-add-form.css';

export default class ItemAddForm extends Component {
    state = {
        label: '',
        isValid: true
    };
    onLabelChange = (e) => {
        this.setState({
            label: e.target.value
        })
    };
    onSubmit = (e) => {
        e.preventDefault();
        if (this.validation(this.state.label)) {
            this.props.onItemAdded(this.state.label);
            this.setState({
                label: '',
                isValid: true
            });
        }
    };
    validation(value) {
        if (value === '' || value === null || value === undefined || value.length === 0) {
            this.setState({
                isValid: false
            })
            return false;
        }
        return true;
    }

    render() {
        return (
            <form className="item-add-form d-flex" onSubmit={this.onSubmit}>
                <input
                    className={`form-control add-input ${this.state.isValid ? '' : 'add-input-error'}`}
                    type="text"
                    onChange={this.onLabelChange}
                    value={this.state.label}
                    placeholder='Type here what to do' />
                <input type='submit' className='btn btn-primary' value='Add item'></input>
            </form>
        )
    }
}