import React, { Component } from 'react';
import { connect } from 'react-redux';

class Day01ComponentWithRedux extends Component {

  getTimeClicked() {
	  this.props.getCurrentTime();
  }
  getTemperatureClicked() {
	  this.props.getTemperature();
  }	
  	
  render() {
    return (
		<div>
			<button onClick={this.getTimeClicked.bind(this)}>Get Time</button>
			<button onClick={this.getTemperatureClicked.bind(this)}>Get Temperature</button>
			<h3>{this.props.message}</h3>
			<h3>{this.props.tempMessage}</h3>
		</div>
    );
  }
}

const mapStateToProps = (state) => {
	return {
		message: state.currentTime,
		tempMessage: state.currentTemperature
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		getCurrentTime: () => dispatch({ type: "GET_TIME" }),
		getTemperature: () => dispatch({ type: "GET_TEMPERATURE" })
	}
}


export default connect(mapStateToProps, mapDispatchToProps)(Day01ComponentWithRedux);








