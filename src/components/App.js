import React, { Component } from 'react';
import './App.css';

import Booklist from '../containers/book-list'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Booklist/>
      </div>
    );
  }
}

export default App;
