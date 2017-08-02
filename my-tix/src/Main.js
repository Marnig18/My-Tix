import React from 'react'
import { Button, Row, Col, ListGroupItem, PageHeader, Grid, Modal } from 'react-bootstrap';
import { ListGroup, FormGroup, FormControl, ControlLabel, Form } from 'react-bootstrap';
import App from './App.js'
import { Route, Link } from 'react-router-dom'
import Register from './components/register'
import Login from './components/login'

class Main extends React.Component{
	constructor(){
		super();
		// var array= this.props.currentEvents[0]
		// 	console.log(array)	
		this.state={
			items: []
		}
	}
	render(){
			return (
				{/*<ListGroup>		
								{this.props.currentEvents.map((obj, index) =>
									
									<ListGroupItem key={index}>
										<CurrentEvents  />
									</ListGroupItem>
									)}
								
								</ListGroup>	*/},
			<div id="loginContainer">
				 {/*<div className="jumbotron text-center">
				  <h1>Log in now</h1>

				</div>*/}
				<Route exact path="/home" component={App} />
				<Route path="/register" component={Register} />
				<Route path="/login" component={Login} />
			</div>
			 

			)
	}	
}

export default Main;