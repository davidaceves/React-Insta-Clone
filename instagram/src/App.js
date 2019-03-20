import React, { Component } from 'react';
import './App.css';

import dummyData from './dummy-data';
import PostContainer from './components/PostContainer/PostContainer';
import SearchBar from './components/SearchBar/SearchBar';

class App extends Component {
  constructor() {
    super();
    this.state = {
      dummyData: []
    }
  }

  componentDidMount() {
    this.setState({ dummyData: dummyData })
  }

  inputHandler = event => {
    this.setState({ [event.target.text]: event.target.value });
  };

  render() {
    return (
      <div className="App">
        <SearchBar />
        <PostContainer data={this.state.dummyData} inputHandler={ this.inputHandler }/>

      </div>
    );
  }
}

export default App;
