import React from 'react';
import vendorCSS from "./css/vendor.css"
import { Button, Row, Col, ListGroupItem } from 'react-bootstrap';
import { ListGroup } from 'react-bootstrap'


class App extends React.Component{

	render(){
		return(
		<div>
			<div class="container" id="header" align="center">
				<div class="row">
					<Col xs={12}></Col>
						<h1> Welcome User</h1>    
				</div>
			</div>
			<div class="container">
					<Row>
						<Col xs={4}>
							<ListGroup class="nav nav-pills nav-stacked">
								<ListGroupItem><Button  bsSize="large" active block>Home</Button></ListGroupItem>
								<ListGroupItem><Button bsSize="large" block>Create New Events</Button></ListGroupItem>
								<ListGroupItem><Button bsSize="large" block>User Settings</Button></ListGroupItem>
							</ListGroup>	
						</Col>	
						<Col xs={8}>
							<div id="reactComponents"></div>
						</Col>
					</Row>
				</div>
			</div>					
		);
	}
}
// Buttons Will Have onClicks
	export default App;
