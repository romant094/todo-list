import React, { Component } from 'react';
import './item-add-form.css';

export default class ItemAddForm extends Component {
    state = {
        label: ''
    };
    onLabelChange = (e) => {
        this.setState({
            label: e.target.value
        })
    };
    onSubmit = (e) => {
        e.preventDefault();
        this.props.onItemAdded(this.state.label);
        this.setState({
            label: ''
        })
    };

    render() {
        return (
            <form className="item-add-form d-flex" onSubmit={this.onSubmit}>
                <input className='form-control add-input' type="text" onChange={this.onLabelChange} value={this.state.label}/>
                <input type='submit' className='btn btn-primary' value='Add item'></input>
            </form>
        )
    }
}