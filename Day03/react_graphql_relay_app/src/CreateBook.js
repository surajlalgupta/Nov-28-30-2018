import React from 'react';
import { Link } from 'react-router-dom';
import CreateBookMutation from './CreateBookMutation'


export default class CreateBook extends React.Component {
	constructor(props){
		super(props)
		this.state = {
			title: "", price: "", message: ""
		}
	}
	render() {
	    return (
	     	 <div>
			 	<Link to='/'>Book List</Link><br/>
				<h3>Add Book</h3>
				<br/>
			<input type="text" placeholder="Title" value={this.state.title} onChange={e => this.setState({title: e.target.value.trim()})}/>
			<br/><br/>
			<input type="text" placeholder="Price" value={this.state.price} onChange={e => this.setState({price: e.target.value.trim()})}/>
			<br/><br/>
			<button onClick={this.addBookClicked.bind(this)}>Submit</button>
			<h4>{this.state.message}</h4>
			</div>
	    )
	}
	addBookClicked(){
		let { title, price } = this.state
		let self = this
    	CreateBookMutation(title,price,(success) => {self.setState({message: "Book created successfully"});self.props.history.push('/')},(error) => {console.log(error);self.setState({message: error[0].message})})
		
	}
	
 }