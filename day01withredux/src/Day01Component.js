import React, { Component } from 'react';

class Day01Component extends Component {
  constructor(props) {
	super(props);
	this.state = {
		message: ""
	};
  }

  getTimeClicked() {
  	this.setState({
		message: new Date().toString()
	});
  }	
  	
  render() {
    return (
		<div>
			<button onClick={this.getTimeClicked.bind(this)}>Get Time</button>
			<h3>{this.state.message}</h3>
		</div>
    );
  }
}

export default Day01Component;
