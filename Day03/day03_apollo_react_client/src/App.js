import React, { Component } from 'react';
import './App.css';
import BookList from './BookList';
import AddBook from './AddBook';

class App extends Component {
  render() {
    return (
      <div className="App">
		<AddBook/>
		<h1>List of Books</h1>
		<hr/>
       	<BookList/>
      </div>
    );
  }
}

export default App;
