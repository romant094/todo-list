import React from 'react';

const SearchPanel = () => {
    const placeholderText = 'Type here to search';

    return (
        <input type="text" placeholder={placeholderText} />
    );
}

export default SearchPanel;