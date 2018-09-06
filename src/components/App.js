import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Booklist from '../containers/book-list'
import  BookDetail from '../containers/book-detail'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Booklist/>
        <BookDetail />
      </div>
    );
  }
}

export default App;
