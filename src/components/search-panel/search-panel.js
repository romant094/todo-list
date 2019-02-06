import React, { Component } from 'react';
import './search-panel.css';

export default class SearchPanel extends Component {
    state = {
        term: ''
    };
    placeholderText = 'Type here to search';
    onSearchChange = (e) => {
        const term = e.target.value;
        this.setState({ term });
        this.props.onSearchChange(term);
    };

    render() {
        const { term } = this.state;
        return (
            <input
                className='form-control search-input'
                type="text"
                placeholder={this.placeholderText}
                value={term}
                onChange={this.onSearchChange}
            />
        );
    }
}