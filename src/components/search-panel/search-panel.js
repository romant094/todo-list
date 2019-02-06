import React from 'react';
import './search-panel.css';

const SearchPanel = () => {
    const placeholderText = 'Type here to search';

    return (
        <input className='form-control search-input' type="text" placeholder={placeholderText} />
    );
}

export default SearchPanel;