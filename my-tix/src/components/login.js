import React from 'react'
import { Button, Row, Col, ListGroupItem, PageHeader, Grid, Modal } from 'react-bootstrap';
import { ListGroup, FormGroup, FormControl, ControlLabel, Form } from 'react-bootstrap';
import App from '../App.js'
import { Route, Link } from 'react-router-dom'
import Register from './register'


class Login extends React.Component{
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
				  <div className="wrapper">
				    <form action="/login" method="post" className="form-signin login">       
				      <h2 className="form-signin-heading">Please login</h2>

				      <label htmlFor="exampleInputEmail1">Email address</label>
				      <input type="email" className="form-control" id="email-input" name="username" placeholder="Email Address" required="" ></input>
				      
				      <label htmlFor="exampleInputPassword1">Password</label>
				      <input type="password" className="form-control" id="password-input" name="password" placeholder="Password" required=""></input>

				      {/*<label className="checkbox">
				        <input type="checkbox" value="remember-me" id="rememberMe" name="rememberMe"> Remember me</input>
				      </label>*/}
				      <Link to="/home"><button className="btn btn-lg btn-primary btn-block" type="submit" id="loginSubmit">Login</button>  </Link>
				    
				          <p className="text-center register-link">New to our App? <Link to="/register">Register</Link></p>
				    </form>
				  </div>
			
				 	  {/*<Route exact path="/home" component={App} />
					  <Route path="/register" component={Register} />*/}
				</div>
			</div>

		)
	}	
}
export default Login;