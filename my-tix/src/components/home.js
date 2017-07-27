import React from 'react';
import { Button, Row, Col, ListGroupItem, PageHeader, Grid, Modal } from 'react-bootstrap';
import { ListGroup, Panel, FormGroup, FormControl, ControlLabel, Form } from 'react-bootstrap'
import EditEventModal from './modals/editEvent'

class Home extends React.Component{

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
					<Row bsClass="row">
						<Col bsClass="col" xs={12}>
							<PageHeader><small>Current Events</small></PageHeader>
							<ListGroup>
								<ListGroupItem>
									<Row bsClass="row">
										<Col bsClass="col" xs={8}>
											<h4>Event Name</h4>
										</Col>
										<Col bsClass="col" xs={4}>
											<Button onClick={this.showModal} block>Edit Event</Button>
												<Modal
								          show={this.state.show}
								          onHide={this.hideModal}>
													<Modal.Header>
														<Modal.Title>Edit Event</Modal.Title>
													</Modal.Header>
													<Modal.Body>
														<Form horizontal>
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
														       <FormGroup controlId="formOption1">
																			<Col componentClass={ControlLabel} xs={2}>
																				Option Name:
															        </Col>

															        <FormGroup controlId="formEditOptionName">
															        	<Row bsClass="row">
																	        <Col componentClass={ControlLabel} xs={2}>
																	        	Name:
																	        </Col>  
																       		<Col xs={6}>
																       			<FormControl type="text" value={this.state.value} placeholder="" 
																            onChange={this.handleChange}/>
																       		</Col>
																       	</Row>
																       	<Row bsClass="row">
																        	<Col componentClass={ControlLabel} xs={2}>
																        		Price:
																        	</Col>  
															       			<Col xs={6}>
															       				<FormControl type="number" value={this.state.value} placeholder="" 
															            	onChange={this.handleChange}/>
															       			</Col>
														       			</Row>	
														       			<Row bsClas="row">
																	        <Col componentClass={ControlLabel} xs={2}>
																	        	Quantity: 
																	        </Col>  
																       		<Col xs={6}>
																       			<FormControl type="integer" value={this.state.value} placeholder="" 
																            onChange={this.handleChange}/>
																       		</Col>
														       			</Row>
														       		<Row bsClass="row">
																        <Col componentClass={ControlLabel} xs={2}>
																        	Description:
																        </Col>  
															       		<Col xs={6}>
															       			<FormControl type="textarea" value={this.state.value} placeholder="" 
															            onChange={this.handleChange}/>
															       		</Col>
														       		</Row>	
														       	</FormGroup>	
																	</FormGroup>
																	<FormGroup>
															      <Col smOffset={2} sm={10}>
															        <Button type="submit">
															          Save Changes
															        </Button>
															      </Col>
															    </FormGroup>	
																</ListGroupItem>	
															</ListGroup>							
														</Form>
													</Modal.Body>
												</Modal>
											<Button block>View Data</Button>
											<Button block>Customer Page</Button>
										</Col>
									</Row>
								</ListGroupItem>
							</ListGroup>
						</Col>
					</Row>
					<Row bsClass="row">
						<Col bsClass="col" xs={12}>
							<PageHeader><small>Past Events</small></PageHeader>
							<ListGroup>
								<ListGroupItem>
									<Row bsClass="row">
										<Col bsClass="col" xs={8}>
											<h4>Event Name</h4>
										</Col>
										<Col bsClass="col" xs={4}>
											<Button block>View Data</Button>
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