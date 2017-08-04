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

drawGraph = event => {
	console.log("Hi");
// 	var sketchProc = function(processingInstance) {
//   with (processingInstance) {
//     size(800, 600);
//     frameRate(30);	
	
        
// // ProgramCodeGoesHere
// 	// Bar Graph
// 	// Variable Declarations
// 	//for(var i in options) y = optionPrice x numberBought
// 	var revenue = [1800, 2500];
// 	//for(var i in options) x = options[i]
// 	var items = ["Option1, Option2"];
// 	background(0,0,0);	
// 	var x = 10;
// 	var z = revenue.reduce(function(a, b) {
// 	return Math.max(a, b);
// 	});
// 	var maxRev = z;

// 	var revYSpacing = maxRev/10;

// 	var spacing = 80;
// 	width = 25;
// 	textSize(20);
// 	fill(0, 50, 255);
// 	ctx.font="bold 30px Arial";
//   text("Profit Per Event", 280, 50);
//   fill(255, 255, 255);
//   textSize(12);
//   fill(0, 255, 0);
// 	text("$", 10, 300);
// 	fill(255, 255, 255);
// 	stroke(255, 255, 255);
// 	line(80, 80, 80, 550);
// 	line(80, 550, 700, 550);
// 	var yLabels = [""];
// 	for(var i = 0; i<10; i++){
// 		yLabels.push(maxRev);
// 		maxRev -= revYSpacing;
// 	}
// 	var y = 0;

// 	for(var i in yLabels){
// 		text(yLabels[i], 50, y);
// 		y+=50;
// 	}
// 	// text.rotate(-Math.PI()/2);
// 	for(var key in revenue){
// 		var height = revenue[key];
// 		fill(255, 255, 0);
// 		rect(x + spacing, 550-height, x+width, height);
// 		fill(250, 250, 250);
// 		text(items[key], spacing, 580);
// 		spacing+=100;
// 	}

// 	// Arc Graph
// 	var x2 = canvas.width / 1.25;
//   var y2 = canvas.height / 3.5;
//   var radius = 75;
//   var startAngle = (0 + 1.5) * Math.PI;
//   var endAngle = (2 + 1.5) * Math.PI;
//   var counterClockwise = false;
//   ctx.beginPath();
//   ctx.arc(x2, y2, radius, startAngle, endAngle, counterClockwise);
//   ctx.lineWidth = 15;
//   // line color
//   ctx.strokeStyle = 'white';
//   ctx.stroke();

//   // Arc data
//   var EventsSold = 30;
//   var totalEvents = 50;
//   var EventPercent = EventsSold / totalEvents;
//   var EventArc = (EventPercent * 2 + 1.5) * Math.PI;
//   ctx.beginPath();
//   ctx.arc(x2, y2, radius, startAngle, EventArc, counterClockwise);
//   ctx.lineWidth = 15;
//   // Arc color
//   ctx.strokeStyle = 'green';
//   ctx.stroke();

//   // Arc Text Labels
//   text("% Ticket Sales", (canvas.width/1.68 + 100), (canvas.height/8))
//   ctx.font="30px Arial";
//   text(EventPercent * 100, (canvas.width/1.25 - 20), (canvas.height/3.5 + 10))
//   }};
//   // Get the canvas that Processing-js will use

//   var canvas = document.getElementById("mycanvas");
// 	var ctx = canvas.getContext("2d");
//   // Pass the function sketchProc (defined in myCode.js) to Processing's constructor.

//   var processingInstance = new Processing(canvas, sketchProc);
}

	handleChange = event => {
		this.setState({
			[event.target.id]: event.target.value
		})
	}

	handleScan = event => {
		// db.customer.findOne{
		// 	{"barcode": this.state.barcode}
		// }
		// db.customer.findOneAndUpdate(
	 //    { "barcode" : this.state.barcode },
	 //    { $set: 
	 //    	{ 
	 //    		"attended": true,
	 //    		 "valid": false
	 //    	}
	 //    }
		// )
		if(event.keyCode === 13)
		{

			alert('Valid ticket. Enjoy the show.')
			document.getElementById('barcode').value = '';
			console.log("This.state.barcode " + this.state.barcode);

			axios
			.get('/api/barcode', {
				barcode: this.state.barcode,
			})
			.then(response => {
				console.log(response.data)
				
		}
		)}
		// this.props.makeRequest(
		// 	this.state.barcode
		// )

	}
//--------------------------------
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