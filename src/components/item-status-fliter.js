import React from 'react';
import './item-status-fliter.css';

const Itemstatusfliter = () => {
    return (
        <div className="btn-group">
            <button className="btn btn-info">All</button>
            <button className="btn btn-outline-secondary">Active</button>
            <button className="btn btn-outline-secondary">Done</button>
        </div>
    )
}

export default Itemstatusfliter;