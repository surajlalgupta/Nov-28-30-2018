import React, { Component } from 'react';

class Main extends Component {
	
	componentDidMount() {
		this.props.fetchHeadingFromServer();	
	}
	
	getTimeClicked() {
		this.props.getCurrentTime();
	}
	
	getTemperatureClicked() {
		this.props.getCurrentTemperature();
	}
	
  render() {
    return (
      <div className="App">
			<h1>{this.props.heading}</h1>	
			<button onClick={this.getTimeClicked.bind(this)}>Get Time</button>
			<button onClick={this.getTemperatureClicked.bind(this)}>Get Temperature</button>
			
			<h3>{this.props.temperature}</h3>
			<h3>{this.props.time}</h3>
      </div>
    );
  }
}

export default Main;
