import React from 'react';
import './app-header.css';

const AppHeader = ({importantPost, allPosts}) => {
    return (
        <div className="app-header d-flex">
            <h1>Isapov Aziz</h1>
            <h2>{allPosts} записей, из них понравилось {importantPost}</h2>
        </div>
    )
}

export default AppHeader;