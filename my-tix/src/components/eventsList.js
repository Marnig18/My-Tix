import React from 'react'
import { Button, Row, Col, ListGroupItem, PageHeader, Grid, Modal } from 'react-bootstrap';
import { ListGroup, FormGroup, FormControl, ControlLabel, Form } from 'react-bootstrap'

const DisplayEvents = props => {
	let events
	if (props.userEvents[0] === undefined){
		events= (<div>UNDEFINED</div>)
	} else {
			events = props.userEvents[0].map((event) => {
				return (
		<p>
		{JSON.stringify(event)}
		</p>

			)
	})
			
	}
	return (<div>
		<p>Here is a display event component 
		</p>
		{events}
	</div>)
}
		// {JSON.stringify(props.userEvents[0])}

		// {JSON.stringify(props)}
// const DisplayEvents = props => {
// 	const userEvents = props.userEvents.map(item => {
// 		console.log(item)

// 	return (
// 		<ListGroupItem key={item._id}>
// 									<Row bsClass="row">
// 										<Col bsClass="col" xs={8}>
// 											<h4>{item.Name}</h4>
// 										</Col>
// 										<Col bsClass="col" xs={4}>
// 											<Button onClick={this.showModal} block>Edit Event</Button>
// 												<Modal
// 								          show={this.state.show}
// 								          onHide={this.hideModal}>
// 													<Modal.Header>
// 														<Modal.Title>Edit Event</Modal.Title>
// 													</Modal.Header>
// 												<Form horizontal>
// 													<Modal.Body>
// 															<FormGroup controlId="formEditName">
// 																<Col componentClass={ControlLabel} xs={2}>
// 																	Event Name
// 												        </Col>  
// 												       	<Col xs={10}>
// 												       		<FormControl type="text" value={this.state.value} placeholder="Enter text" 
// 												            onChange={this.handleChange}/>
// 												       	</Col>
// 												       </FormGroup>	
// 												       <FormGroup controlId="formEditStartDate">
// 																	<Col componentClass={ControlLabel} xs={2}>
// 																		Start Date
// 													        </Col>  
// 													       	<Col xs={10}>
// 													       		<FormControl type="date" value={this.state.value} placeholder="" 
// 													            onChange={this.handleChange}/>
// 													       	</Col>
// 												       </FormGroup>
// 												       <FormGroup controlId="formEditEndDate">
// 																	<Col componentClass={ControlLabel} xs={2}>
// 																		End Date
// 													        </Col>  
// 													       	<Col xs={10}>
// 													       		<FormControl type="date" value={this.state.value} placeholder="" 
// 													            onChange={this.handleChange}/>
// 													       	</Col>
// 												       </FormGroup>
// 												       <FormGroup controlId="formEditPicture">
// 																	<Col componentClass={ControlLabel} xs={2}>
// 																		Picture
// 													        </Col>  
// 													       	<Col xs={10}>
// 													       		<FormControl type="file" value={this.state.value} placeholder="" 
// 													            onChange={this.handleChange}/>
// 													       	</Col>
// 												       </FormGroup>
// 												       	<ListGroup>
// 												       		<ListGroupItem>
// 													       		<Row bsClass="row">
// 																			<Col componentClass={ControlLabel} xs={4}>
// 																					Option Name:
// 																	     </Col>
// 																	    <Col bsClass="col" xs={8}>
// 																	     	<Row bsClass="row">
// 																			     	 <Col componentClass={ControlLabel} xs={4}>
// 																			        	Name:
// 																			       	</Col>  
// 																		       		<Col xs={8}>
// 																		       			<FormControl type="text" value={this.state.value} placeholder="" 
// 																		            onChange={this.handleChange}/>
// 																	       			</Col>
// 																		       	</Row>
																		      
												
// 																		       	<Row bsClass="row">
// 																		        	<Col componentClass={ControlLabel} xs={4}>
// 																		        		Price:
// 																		        	</Col>  
// 																	       			<Col xs={8}>
// 																	       				<FormControl type="number" value={this.state.value} placeholder="" 
// 																	            	onChange={this.handleChange}/>
// 																	       			</Col>
// 																       			</Row>	
																       			
// 																       			<Row bsClas="row">
// 																			        <Col componentClass={ControlLabel} xs={4}>
// 																			        	Quantity: 
// 																			        </Col>  
// 																		       		<Col xs={8}>
// 																		       			<FormControl type="number" value={this.state.value} placeholder="" 
// 																		            onChange={this.handleChange}/>
// 																		       		</Col>
// 																       			</Row>
																       		
// 																       			<Row bsClass="row">
// 																			        <Col componentClass={ControlLabel} xs={4}>
// 																			        	Description:
// 																			        </Col>  
// 																		       		<Col xs={8}>
// 																		       			<FormControl componentClass="textarea" value={this.state.value} placeholder="" 
// 																		            onChange={this.handleChange}/>
// 																		       		</Col>
// 																	       		</Row>	
// 																					</Col>
																	
// 																	   	 </Row> 	
// 																    	</ListGroupItem>
// 															    	 </ListGroup>	
// 																	</Modal.Body>
// 																	<Modal.Footer>
// 																		<FormGroup>
// 																      <Col smOffset={2} sm={10}>
// 																        <Button type="submit">
// 																          Save Changes
// 																        </Button>
// 																      </Col>
// 																    </FormGroup>
// 																   </Modal.Footer> 

// 																</Form>
										
// 														</Modal>
// 											<Button block onClick={this.showModal2}>View Data</Button>
// 												<Modal
// 								          show={this.state.show2}
// 								          onHide={this.hideModal2}>
// 													<Modal.Header>
// 														<Modal.Title>Data</Modal.Title>
// 													</Modal.Header>
// 													<Modal.Body>Graphs go here</Modal.Body>
// 													<Modal.Footer>
// 														<Button onClick={this.hideModal2}>Close</Button>
// 													</Modal.Footer>	
// 												</Modal>
// 											<Button href="" block>Customer Page</Button>
// 										</Col>
// 									</Row>
// 								</ListGroupItem>
// 						 )
// 					})
		
// 				return(
// 					<div>
// 						<ListGroup>
// 							{userEvents}
// 						</ListGroup>
// 					</div>
// 				)
// 			};

export default DisplayEvents;


