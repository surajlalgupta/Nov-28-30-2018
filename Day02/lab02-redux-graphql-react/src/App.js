import React, { Component } from 'react';
import './App.css';
import BookList from './BookList';

class App extends Component {
  render() {
    return (
      <div className="App">
		<h1>List of Books</h1>
		<hr/>
		<BookList/>
      </div>
    );
  }
}

export default App;
