import React, { Component } from 'react';

class Day01ComponentWithRedux extends Component {

  getTimeClicked() {
	  
  }	
  	
  render() {
    return (
		<div>
			<button onClick={this.getTimeClicked.bind(this)}>Get Time</button>
			<h3></h3>
		</div>
    );
  }
}

export default Day01ComponentWithRedux;
