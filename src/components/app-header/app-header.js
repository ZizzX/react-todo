import React from 'react';
import './app-header.css';

const AppHeader = ({likedPost, allPosts}) => {
    return (
        <div className="app-header d-flex">
            <h1>Isapov Aziz</h1>
            <h2>{allPosts} записей, из них понравилось {likedPost}</h2>
        </div>
    )
}

export default AppHeader;