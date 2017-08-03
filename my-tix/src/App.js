import React from 'react';
import vendorCSS from "./css/vendor.css"
import { Button, Row, Col, ListGroupItem, Grid } from 'react-bootstrap';
import { ListGroup } from 'react-bootstrap'
import Home from "./containers/Home"
import CreateNewEvent from "./containers/CreateNewEvent"
import Settings from "./containers/Settings"
import { Route } from 'react-router-dom'
import {LinkContainer} from 'react-router-bootstrap'
import axios from 'axios'
// import helper from "./utils/helpers.js"




class App extends React.Component{

	constructor(){
		super();

		this.state={
			options: [],
			events: []
		}
		this.makeNewOption = this.makeNewOption.bind(this)
		this.makeNewEvent = this.makeNewEvent.bind(this)
		this.editEvent = this.editEvent.bind(this)
	}

	makeNewOption(newOptionName, newOptionPrice, newOptionQuantity, newOptionDescription){
		axios
			.post('/api/newOption', {
				optionName: newOptionName,
				optionPrice: newOptionPrice,
				optionQuantity: newOptionQuantity,
				optionDescription: newOptionDescription
			})
			.then(response => {
				console.log(response.data)
				var newOptions = this.state.options
				newOptions.push(response.data)
				this.setState({	

						options: newOptions 

		})
	})
}

	makeNewEvent(newEventName, newEventStart, newEventEnd, newEventPicture, options){
		axios
			.post('/api/newEvent', {
					Name: newEventName,
					StartDate: newEventStart,
					EndDate: newEventEnd,
					picture: newEventPicture,
					Option: this.state.options
					
			})
			.then(response =>{
				console.log(response.data)
				var newEvent = this.state.events
				newEvent.push(response.data)
				this.setState({	

						events: newEvent
					})
				console.log(response)
			}).bind(this)
	}


	// editEvent()
	// 	.then(function(response){

	// 		this.setState({
	// 			events: response.data
	// 		})

	// 	})



	editEvent(eventId, formEditName, formEditStartDate, formEditEndDate, formEditPicture){
		axios({
				method: "post",
				url: '/api/Events/' + eventId, 
				data:{
					Name: formEditName,
					StartDate: formEditStartDate,
					EndDate: formEditEndDate,
					picture: formEditPicture
				}
			}).then(response =>{
				console.log(response.data)
				var newEvent = this.state.events
				newEvent.push(response.data)
				console.log(response.data)
				this.setState({
					events: newEvent
				})
				console.log("POSTED")
			})
	}




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
							<Route exact path="/home" render={(props)=><Home editEvent={this.editEvent}/>}/>
							<Route exact path="/newevent" render={(props)=><CreateNewEvent makeNewOption={this.makeNewOption} makeNewEvent={this.makeNewEvent} options={this.state.options}/>} />
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
