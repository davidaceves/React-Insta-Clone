import React from 'react';

import './SearchBar.css'

function SearchBar () {
    return (
        <div className="searchBar">
            <img className="ig-logo" src={ require("./img/ig_logo.png") } alt="icon" />
            <h1 className="ig-header">Instagram</h1>
            <form className="searchInput">
                <input type="text" placeholder="Search"></input>
            </form>
            <img className="ig-logo" src={ require("./img/compass_icon.png") } alt="icon" />
            <img className="ig-logo" src={ require("./img/heart_icon.png") } alt="icon" />
            <img className="ig-logo" src={ require("./img/person_icon.png") } alt="icon" />
        </div>
    )
}

export default SearchBar;