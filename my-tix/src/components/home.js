import React from 'react';
import { Button, Row, Col, ListGroupItem, PageHeader, Grid, Modal } from 'react-bootstrap';
import { ListGroup, FormGroup, FormControl, ControlLabel, Form } from 'react-bootstrap';
import helper from "../utils/helpers"
import axios from 'axios';

class Home extends React.Component{

	constructor(){
		super();

		this.state= {
			show: false,
			show2: false,
			show3: false,
			barcode: ''
		}
	}

	handleScan = event => {
	if(event.keyCode === 13)
	{
		document.getElementById('barcode').value = '';
		console.log("This.state.barcode " + this.state.barcode);

		axios
		.get('/api/barcode', {
			params: {
				barcode: this.state.barcode
			}
		})
		.then(response => {
			alert(response.data)
		})
	}
}
//--------------------------------
	//Show and Hide Modal Functions

	  showModal = () => {
	    this.setState({show: true});
	  }

	  hideModal =() => {
	    this.setState({show: false});
	  }

	  showModal2 = () => {
	    this.setState({show2: true});
	  }

	  hideModal2 =() => {
	    this.setState({show2: false});
	  }

    showModal3 = () => {
    this.setState({show3: true});
	  }

	  hideModal3 =() => {
	    this.setState({show3: false});
	  }
//--------------------------------
//--------------------------------


	



	render(){
		console.log("Loading the home page");
		return(
				<Grid fluid>
					<Row bsClass="row">
						<Col bsClass="col" xs={12}>
							<PageHeader><small className="whiteText">Current Events</small></PageHeader>
							<ListGroup>
								<ListGroupItem>
									<Row bsClass="row">
										<Col bsClass="col" xs={8}>
											<h4>Event Name</h4>
					  					<FormGroup controlId="scanTicket">
											<Col componentClass={ControlLabel} xs={3}>
												Scan Ticket
							        </Col>  
							       	<Col xs={9}>
							       		<FormControl type="text" id="barcode" value={this.state.barcode} placeholder="Click here, then scan ticket." 
							            onChange={this.handleChange} onKeyUp={this.handleScan}/>
							       	</Col>
							       </FormGroup>	
										</Col>
										<Col bsClass="col" xs={4}>
											<Button onClick={this.showModal} block>Edit Event</Button>
												<Modal
								          show={this.state.show}
								          onHide={this.hideModal}>
													<Modal.Header>
														<Modal.Title>Edit Event</Modal.Title>
													</Modal.Header>
												<Form horizontal>
													<Modal.Body>
															<FormGroup controlId="formEditName">
																<Col componentClass={ControlLabel} xs={2}>
																	Event Name
												        </Col>  
												       	<Col xs={10}>
												       		<FormControl type="text" value={this.state.value} placeholder="Enter text" 
												            onChange={this.handleChange}/>
												       	</Col>
												       </FormGroup>	
												       <FormGroup controlId="formEditStartDate">
																	<Col componentClass={ControlLabel} xs={2}>
																		Start Date
													        </Col>  
													       	<Col xs={10}>
													       		<FormControl type="date" value={this.state.value} placeholder="" 
													            onChange={this.handleChange}/>
													       	</Col>
												       </FormGroup>
												       <FormGroup controlId="formEditEndDate">
																	<Col componentClass={ControlLabel} xs={2}>
																		End Date
													        </Col>  
													       	<Col xs={10}>
													       		<FormControl type="date" value={this.state.value} placeholder="" 
													            onChange={this.handleChange}/>
													       	</Col>
												       </FormGroup>
												       <FormGroup controlId="formEditPicture">
																	<Col componentClass={ControlLabel} xs={2}>
																		Picture
													        </Col>  
													       	<Col xs={10}>
													       		<FormControl type="file" value={this.state.value} placeholder="" 
													            onChange={this.handleChange}/>
													       	</Col>
												       </FormGroup>
												       	<ListGroup>
												       		<ListGroupItem>
													       		<Row bsClass="row">
																			<Col componentClass={ControlLabel} xs={4}>
																					Option Name:
																	     </Col>
																	    <Col bsClass="col" xs={8}>
																	     	<Row bsClass="row">
																			     	 <Col componentClass={ControlLabel} xs={4}>
																			        	Name:
																			       	</Col>  
																		       		<Col xs={8}>
																		       			<FormControl type="text" value={this.state.value} placeholder="" 
																		            onChange={this.handleChange}/>
																	       			</Col>
																		       	</Row>
																		      
												
																		       	<Row bsClass="row">
																		        	<Col componentClass={ControlLabel} xs={4}>
																		        		Price:
																		        	</Col>  
																	       			<Col xs={8}>
																	       				<FormControl type="number" value={this.state.value} placeholder="" 
																	            	onChange={this.handleChange}/>
																	       			</Col>
																       			</Row>	
																       			
																       			<Row bsClas="row">
																			        <Col componentClass={ControlLabel} xs={4}>
																			        	Quantity: 
																			        </Col>  
																		       		<Col xs={8}>
																		       			<FormControl type="number" value={this.state.value} placeholder="" 
																		            onChange={this.handleChange}/>
																		       		</Col>
																       			</Row>
																       		
																       			<Row bsClass="row">
																			        <Col componentClass={ControlLabel} xs={4}>
																			        	Description:
																			        </Col>  
																		       		<Col xs={8}>
																		       			<FormControl componentClass="textarea" value={this.state.value} placeholder="" 
																		            onChange={this.handleChange}/>
																		       		</Col>
																	       		</Row>	
																					</Col>
																	
																	   	 </Row> 	
																    	</ListGroupItem>
															    	 </ListGroup>	
																	</Modal.Body>
																	<Modal.Footer>
																		<FormGroup>
																      <Col smOffset={2} sm={10}>
																        <Button type="submit">
																          Save Changes
																        </Button>
																      </Col>
																    </FormGroup>
																   </Modal.Footer> 

																</Form>
										
														</Modal>
											<Button block onClick={this.showModal2}>View Data</Button>
												<Modal
								          show={this.state.show2}
								          onHide={this.hideModal2}
								          onChange={this.handleChange}>
													<Modal.Header>
														<Modal.Title>Data</Modal.Title>
													</Modal.Header>
													<Modal.Body><canvas id="myCanvas" width="200" height="100" style="border:1px solid #000000;">
</canvas></Modal.Body>
													<Modal.Footer>
														<Button onClick={this.hideModal2}>Close</Button>
													</Modal.Footer>	
												</Modal>
											<Button href="" block>Customer Page</Button>
										</Col>
									</Row>
								</ListGroupItem>
							</ListGroup>
						</Col>
					</Row>
					<Row bsClass="row">
						<Col bsClass="col" xs={12}>
							<PageHeader><small className="whiteText">Past Events</small></PageHeader>
							<ListGroup>
								<ListGroupItem>
									<Row bsClass="row">
										<Col bsClass="col" xs={8}>
											<h4>Event Name</h4>
										</Col>
										<Col bsClass="col" xs={4}>
											<Button onClick={this.showModal3} block>View Data</Button>
												<Modal
								          show={this.state.show3}
								          onHide={this.hideModal3}>
													<Modal.Header>
														<Modal.Title>Data</Modal.Title>
													</Modal.Header>
													<Modal.Body>Graphs go here</Modal.Body>
													<Modal.Footer>
														<Button onClick={this.hideModal3}>Close</Button>
													</Modal.Footer>	
												</Modal>
										</Col>
									</Row>
								</ListGroupItem>
							</ListGroup>
						</Col>
					</Row>
				</Grid>
		
		)
	}
}

export default Home;
