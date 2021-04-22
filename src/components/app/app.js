import React from 'react';
import './app.css';

import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import PostStatusFilter from '../post-status-filter';
import PostList from '../post-list';
import PostAddForm from '../post-add-form';

const App = () => {

    const data = [
        1,
        {label: 'Going to learn React', important: true, id: 'dfdfd'},
        {label: 'Thats is so good', important: false, id: 'ldld'},
        {label: 'I need a break...', important: false, id: 'pcmd'}
    ];

    return(
       <div className="app">
            <AppHeader/>
            <div className="search-panel d-flex">
                <SearchPanel/>
                <PostStatusFilter/>
            </div>
            <PostList posts={data} />
            <PostAddForm/>
       </div>
    )
}

export default App;