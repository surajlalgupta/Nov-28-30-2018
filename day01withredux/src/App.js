import React, { Component } from 'react';
import './App.css';
import Day01ComponentWithRedux from './Day01ComponentWithRedux';

class App extends Component {
  render() {
    return (
      <div className="App">
			<h1>React with Redux</h1>
			<Day01ComponentWithRedux/>
      </div>
    );
  }
}

export default App;
