import React from 'react'
import { Button, Row, Col, ListGroupItem, PageHeader, Grid, Modal } from 'react-bootstrap';
import { ListGroup, FormGroup, FormControl, ControlLabel, Form } from 'react-bootstrap';
import App from '../App.js'
import { Route, Link } from 'react-router-dom'

class Register extends React.Component{
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
				  

				  <div className="container">
				    <div className="row">
				      <div className="col-lg-6 col-lg-offset-3">
				      <div className="well well-sm"><strong><span className="glyphicon glyphicon-asterisk"></span>Required Field</strong></div>
				        <h2>Sign Up Form</h2>
				        <form action="/api/user" method="post" className="signup">
				          
				          <div className="form-group">
				            <label htmlFor="exampleInputEmail1">Email address</label>
				            <div className="input-group">
				              <input type="email" className="form-control" id="email-input" name="username" placeholder="Enter Email" required></input>
				              <span className="input-group-addon"><span className="glyphicon glyphicon-asterisk"></span></span>
				            </div>
				          </div>
				           

				          <div className="form-group">
				            <label htmlFor="exampleInputPassword1">Password</label>
				            <div className="input-group">
				              <input type="password" name="password" className="form-control" id="password-input" placeholder="Password" required></input>
				              <span className="input-group-addon"><span className="glyphicon glyphicon-asterisk"></span></span>
				            </div>
				          </div>

				          <div  id="alert" className="alert alert-danger" role="alert">
				            <span className="glyphicon glyphicon-exclamation-sign" aria-hidden="true"></span>
				            <span className="sr-only">Error:</span> <span className="msg"></span>
				          </div>
				          <button type="submit"  className="btn btn-lg btn-primary btn-block">Sign Up</button>
				        </form>
				        <br />
				        <p>Or log in <a href="/login">here</a></p>
				      </div>
				    </div>
				  </div>
			</div>

				)
	}	
}
export default Register;