import React from 'react';

import './SearchBar.css'

function SearchBar () {
    return (
        <div className="searchBar">
            <img className="ig-logo" src={ require("./img/ig_logo.png") } alt="icon" />
            <h1 className="ig-header">Instagram</h1>
            <form className="searchInput">
                <input></input>
            </form>
        </div>
    )
}

export default SearchBar;