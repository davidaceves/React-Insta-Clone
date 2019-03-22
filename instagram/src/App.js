import React, { Component } from 'react';
import './App.css';

import dummyData from './dummy-data';
import PostContainer from './components/PostContainer/PostContainer';
import SearchBar from './components/SearchBar/SearchBar';

class App extends Component {
  constructor() {
    super();
    this.state = {
      dummyData: [],
      search: '',
    }
  }

  componentDidMount() {
    this.setState({ dummyData: dummyData })
  }

  searchHandler = (event) => {
    this.setState({ search: event.target.value });
  }

  filterPosts = event => {
    event.preventDefault();

    let filtered = this.state.dummyData.filter(user => user.username === this.state.search)

    if (this.state.search === '') {
      return this.setState({ dummyData: dummyData})
  }
    
    this.setState(prevState => {
      return  {
          dummyData: filtered,

      } 
  });
  }

  render() {
    return (
      <div className="App">

        <SearchBar filterPosts={ this.filterPosts} searchHandler={ this.searchHandler } search={ this.state.search }/>
        <PostContainer data={this.state.dummyData} />

      </div>
    );
  }
}

export default App;
