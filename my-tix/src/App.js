import React from 'react';
import vendorCSS from "./css/vendor.css"
import { Button, Row, Col, ListGroupItem, Grid } from 'react-bootstrap';
import { ListGroup } from 'react-bootstrap'
import Home from "./components/home"
import NewEvent from "./components/createNewEvent"


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
							<ListGroupItem><Button  bsSize="large" active block>Home</Button></ListGroupItem>
							<ListGroupItem><Button bsSize="large" block>Create New Events</Button></ListGroupItem>
							<ListGroupItem><Button bsSize="large" block>User Settings</Button></ListGroupItem>
						</ListGroup>	
					</Col>	
					<Col xs={8}>
						<div id="reactComponents">
							<Home />
							<NewEvent />
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
