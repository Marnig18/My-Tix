import React from 'react'
import { Button, Row, Col,  Modal } from 'react-bootstrap';
import { FormGroup, FormControl, ControlLabel, Form } from 'react-bootstrap'
// import CurrentEvents from "./currentEvents"
import EditOptionsList from './EditOptionsList'

class CurrentEvents extends React.Component{
	constructor(){
		super();

		this.state ={
			show: false,
			show2: false,
			formEditName:"",
			formEditStartDate: "",
			formEditEndDate:"",
			formEditPicture:"",
			formEditLocation:"",
			eventID: ""
		}
		this.handleChange=this.handleChange.bind(this)
		this.handleEditSubmit=this.handleEditSubmit.bind(this)
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
	//--------------------------------
	//--------
	


		 handleChange = (event) => {
    // Here we create syntax to capture any change in text to the query terms (pre-search).
    // See this Stack Overflow answer for more details:
    // http://stackoverflow.com/questions/21029999/react-js-identifying-different-inputs-with-one-onchange-handler

	    var newState = {};
	    newState[event.target.id] = event.target.value
	    this.setState(newState);

  }

			handleEditSubmit(event){
			event.preventDefault()
			console.log('handlesubmit called');


			this.setState({eventID: this.props.id})
			console.log("EventId : " + this.props.id);
			this.props.editEvent(this.state.eventID, this.state.formEditName, this.state.formEditStartDate, this.state.formEditEndDate, this.state.formEditPicture)
			this.setState({
					formEditName:"",
					formEditStartDate: "",
					formEditEndDate:"",
					formEditPicture:"",
					formEditLocation: "",
					eventID: ""

			})
			console.log("posted")
		}

		componentDidMount(){
			this.setState({
				eventID: this.props.id
			})
		}



	render(){
		return(
		// 	<ListGroup>
		// 		{this.props.currentEvents.map((obj, index) =>
		// 		<ListGroupItem key={index}>
					<Row bsClass="row">
						<Col bsClass="col" xs={8}>
							<h4>{this.props.name}</h4>
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
								       <FormGroup controlId="formEditLocation">
													<Col componentClass={ControlLabel} xs={2}>
														End Date
									        </Col>  
									       	<Col xs={10}>
									       		<FormControl type="date" value={this.state.value} placeholder="Address" 
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
								       	
									       				<EditOptionsList options={this.props.options} editOption={this.props.editOption}/>
											
													</Modal.Body>
													<Modal.Footer>
														<FormGroup>
												      <Col smOffset={2} sm={10}>
												        <Button type="submit" onClick={this.handleEditSubmit}>
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
				          onHide={this.hideModal2}>
									<Modal.Header>
										<Modal.Title>Data</Modal.Title>
									</Modal.Header>
									<Modal.Body>Graphs go here</Modal.Body>
									<Modal.Footer>
										<Button onClick={this.hideModal2}>Close</Button>
									</Modal.Footer>	
								</Modal>
							<Button href="" block>Customer Page</Button>
						</Col>
					</Row>
			//  	</ListGroupItem>
			//  )}
			// </ListGroup>

		)
	}
}

export default CurrentEvents