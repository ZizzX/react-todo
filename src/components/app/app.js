import React, {Component} from 'react';
import './app.css';

import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import PostStatusFilter from '../post-status-filter';
import PostList from '../post-list';
import PostAddForm from '../post-add-form';

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data : [
                {label: 'Going to learn React', like: false, important: true, id: 'dfdfd'},
                {label: 'Thats is so good', like: false, important: false, id: 'ldld'},
                {label: 'I need a break...', like: false, important: false, id: 'pcmd'}
            ],
            term: '',
            filter: 'all'
        };
        this.deleteItem = this.deleteItem.bind(this);
        this.addItem = this.addItem.bind(this);
        this.onToggleImportant = this.onToggleImportant.bind(this);
        this.onToggleLiked = this.onToggleLiked.bind(this);
        this.onUpdateSearch = this.onUpdateSearch.bind(this);
        this.onFilterSelect = this.onFilterSelect.bind(this);
    }

    deleteItem(id) {
        this.setState(({data}) => {
            const index = data.findIndex(elem => elem.id === id);
            const newArr = [...data.slice(0, index), ...data.slice(index + 1)];

            return {
                data: newArr
            }
        })
    }

    addItem(body) {
        const abc = "abcdefghijklmnopqrstuvwxyz0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        let newId = '';
        while (newId.length < 4) {
            newId += abc[Math.floor(Math.random() * abc.length)];
        }

        const newItem = {
            label: body,
            important: false,
            like: false,
            id: newId
        };

        this.setState(({data}) => {
            const newArr = [...data, newItem];
            return {
                data: newArr
            }
        });
    }

    onToggleImportant(id) {
        this.setState(({data}) => {
            const index = data.findIndex(elem => elem.id === id);
            const old = data[index];
            const newItem = {...old, important: !old.important };
            const newArr = [...data.slice(0, index), newItem, ...data.slice(index + 1)];

            return {
                data : newArr
            }
        });
    }

    onToggleLiked(id) {
        this.setState(({data}) => {
            const index = data.findIndex(elem => elem.id === id);
            const old = data[index];
            const newItem = {...old, like: !old.like };
            const newArr = [...data.slice(0, index), newItem, ...data.slice(index + 1)];

            return {
                data : newArr
            }
        });
    }

    onUpdateSearch(term) {
        this.setState({term});
    }

    searchPost(arr, term) {
        if (term.length === 0) {
            return arr
        }

        return arr.filter(item => item.label.indexOf(term) > -1);
    }

    filterPosts(arr, filter) {
        if (filter === 'all') {
            return arr
        } else {
            return arr.filter(item => item.like);
        }
    }

    onFilterSelect(filter) {
        this.setState({filter});
    }

    render() {
        const {data, term, filter} = this.state;
        const likedPost = data.filter((elem) => elem.like).length;
        const allPosts = data.length;
        const visiblePosts = this.filterPosts(this.searchPost(data, term), filter);

        return(
            <div className="app">
                 <AppHeader
                 likedPost={likedPost}
                 allPosts={allPosts}
                 />
                 <div className="search-panel d-flex">
                     <SearchPanel
                     onUpdateSearch={this.onUpdateSearch}/>
                     <PostStatusFilter
                     onFilterSelect={this.onFilterSelect}
                     filter={filter}
                     />
                 </div>
                 <PostList 
                     posts={visiblePosts} 
                     onDelete={this.deleteItem}
                     onToggleImportant={this.onToggleImportant}
                     onToggleLiked={this.onToggleLiked}
                     />
                 <PostAddForm
                    onAdd={this.addItem}/>
            </div>
         )
    }
}
