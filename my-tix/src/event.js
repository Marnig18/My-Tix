import React from 'react';
import customerCSS from './css/customer.css'
import Main from './customer/Main'; 
import Purchase from './customer/Purchase';
import Ticket from './customer/Ticket'; 
import axios from 'axios'; 

class Event extends React.Component{

	constructor() {
		super()

		this.state = {
			eventSelect: [],
			view: 0
		}
	}; 

	componentWillMount = () => {
		axios.get("/events/:event_id")
		.then(response => {
			console.log(response.data)
			this.setState({
				eventSelect: response.data[0]
			})
			console.log(this.state.eventSelect.Option)
		})
	} 

	setView = (number) => {
		this.setState({ view: number })
	}

	render(){

		const view = this.state.view

		let viewContainer = null;

		if (view === 0) {
			viewContainer = <Main 
	      poster={this.state.eventSelect.picture}
	      name={this.state.eventSelect.Name} 
	      desc={this.state.eventSelect.description}
	      location={this.state.eventSelect.location}
	      start={this.state.eventSelect.StartDate}
	      end={this.state.eventSelect.EndDate}
	      setView={this.setView}
	    />
		} 
		else if (view === 1) {
			viewContainer = <Purchase 
				setView={this.setView}
				name={this.state.eventSelect.Name} 
				option={this.state.eventSelect.Option}
				_id={this.state.eventSelect._id}
			/>
		}
		else {
			viewContainer = <Ticket />
		}

		return(
			<div className="container col-sm-12">
	      <div className="App">
	        <div className="App-header">
	          <div className="row">
	            <div className="col-sm-7">
	              <h2 id="siteName">MyTix</h2>
	            </div>
	            <div className="col-sm-5">
	              <img src="Logo3.jpg" id="tixLogo" alt="logo" />
	            </div>
	          </div>
	        </div>
	      </div>
	      {/*<!-- end App -->*/}

	      {viewContainer}

	    	<footer>&copy; MyTix 2017</footer>
	    </div>
		);
	}
}

export default Event;