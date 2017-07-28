import React from 'react';
import vendorCSS from "./css/vendor.css"
import { Button, Row, Col, ListGroupItem, Grid } from 'react-bootstrap';
import { ListGroup } from 'react-bootstrap'
import Home from "./components/Home"
import CreateNewEvent from "./components/CreateNewEvent"
import Settings from "./components/Settings"
import { Route, Link } from 'react-router-dom'
import {LinkContainer} from 'react-router-bootstrap'



class App extends React.Component{

	render(){
		return(
		<div>
			<Grid  fluid id="header">
				<Row bsClass="row">
					<Col bsClass="col" xs={12}>
						<h1> Welcome User</h1> 
					</Col>   
				</Row>
			</Grid>
			<Grid fluid>
				<Row bsClass="row">
					<Col bsClass="col" xs={4}>
						<ListGroup class="nav nav-pills nav-stacked">
							<ListGroupItem><LinkContainer exact to="/home"><Button bsSize="large" block>Home</Button></LinkContainer></ListGroupItem>
							<ListGroupItem><LinkContainer exact to="/newevent"><Button  bsSize="large" block>Create New Events</Button></LinkContainer></ListGroupItem>
							<ListGroupItem><LinkContainer exact to= "/editUser"><Button bsSize="large" block>User Settings</Button></LinkContainer></ListGroupItem>
						</ListGroup>	
					</Col>	
					<Col xs={8}>
						<div id="reactComponents">
							<Route exact path="/home" component={Home} />
							<Route exact path="/newevent" component={CreateNewEvent} />
							<Route exact path="/editUser" component={Settings} />
						</div>
					</Col>
				</Row>
			</Grid>
		</div>				
		);
	}
}
// Buttons Will Have onClicks
	export default App;
