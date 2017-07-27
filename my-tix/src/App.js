import React from 'react';
import vendorCSS from "./css/vendor.css"
import { Button, Row, Col, ListGroupItem, Grid } from 'react-bootstrap';
import { ListGroup } from 'react-bootstrap'
import Home from "./components/Home"
import CreateNewEvent from "./components/CreateNewEvent"
import { Route, Link } from 'react-router-dom'



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
							<ListGroupItem><Button bsSize="large" block><Link to="/">Home</Link></Button></ListGroupItem>
							<ListGroupItem><Button to="/newEvent" bsSize="large" block><Link to="/newEvent">Create New Events</Link></Button></ListGroupItem>
							<ListGroupItem><Button bsSize="large" block>User Settings</Button></ListGroupItem>
						</ListGroup>	
					</Col>	
					<Col xs={8}>
						<div id="reactComponents">
								<Route exact path="/" component={Home} />
								<Route exact path="/newEvent" component={CreateNewEvent} />

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
