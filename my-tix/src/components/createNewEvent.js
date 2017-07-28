import React from 'react';
import { Button, Row, Col, ListGroupItem, PageHeader, Grid, Modal } from 'react-bootstrap';
import { ListGroup, Panel, FormGroup, FormControl, ControlLabel, Form,  } from 'react-bootstrap'

class CreateNewEvent extends React.Component{

	constructor(){
		super();

		this.state= {
			show: false

		}
	}

	  showModal = () => {
	    this.setState({show: true});
	  }

	  hideModal =() => {
	    this.setState({show: false});
	  }

	render(){
		return(
				<Grid fluid>
					<Row bsClass='row'>
						<Col bsClass="col" xs={12}>
						<PageHeader>Create A New Event</PageHeader>
							<form>
								<FormGroup controlId="newEventName"> 
									<ControlLabel>Event Name</ControlLabel>
									<FormControl type="text" value={this.state.value} onChange={this.handleChange} placeholder="Enter Name"/>
								</FormGroup>
								<FormGroup controlId="newEventStart"> 
									<ControlLabel>Start Date</ControlLabel>
									<FormControl type="date" value={this.state.value} onChange={this.handleChange} placeholder=""/>
								</FormGroup>
								<FormGroup controlId="newEventEnd"> 
									<ControlLabel>End Date</ControlLabel>
									<FormControl type="date" value={this.state.value} onChange={this.handleChange} placeholder="Enter Name"/>
								</FormGroup>
								<FormGroup controlId="newEventPicture"> 
									<ControlLabel>Picture</ControlLabel>
									<FormControl type="file" value={this.state.value} onChange={this.handleChange} />
								</FormGroup>
								<Button type="button" onClick={this.showModal}>Add an Option</Button>	
									<Modal
						       show={this.state.show}
						       onHide={this.hideModal}>
						       <Modal.Header>
						       		<Modal.Title>Add An Event Option</Modal.Title>
						       </Modal.Header>
						       <Modal.Body> 
										 <FormGroup controlId="newOptionName"> 
												<ControlLabel>Option Name</ControlLabel>
												<FormControl type="text" value={this.state.value} onChange={this.handleChange} placeholder="Enter Name"/>
											</FormGroup>
											<FormGroup controlId="newOptionPrice"> 
												<ControlLabel>Price</ControlLabel>
												<FormControl type="number" value={this.state.value} onChange={this.handleChange} placeholder=""/>
											</FormGroup>
											<FormGroup controlId="newOptionQuantity"> 
												<ControlLabel>Quantity of Tickets</ControlLabel>
												<FormControl type="integer" value={this.state.value} onChange={this.handleChange} placeholder=""/>
											</FormGroup>
											<FormGroup controlId="newOptionDsescription"> 
												<ControlLabel>Description</ControlLabel>
												<FormControl type="textarea" value={this.state.value} onChange={this.handleChange} placeholder="Enter Description"/>
											</FormGroup>
						       	</Modal.Body>	
						      	<Modal.Footer>
							        <Button onClick={this.hideModal}>Close</Button>
							        <Button bsStyle="primary">Save changes</Button>
							      </Modal.Footer>
							  	 </Modal>	
							  	<ListGroup>
							  		<ListGroupItem>
							  			<h4>Option Name</h4>
							  			<p>Price:</p>
							  			<p>Quantity:</p>
							  			<p>Description</p>
							  		</ListGroupItem>
							  	</ListGroup> 
							  <Button type="submit">Add Event</Button>				   
							</form>
						</Col>
					</Row>	
				</Grid>
			)
	}
}



export default CreateNewEvent;