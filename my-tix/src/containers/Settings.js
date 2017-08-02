import React from 'react';
import { Button, Row, Col, PageHeader, Grid } from 'react-bootstrap';
import { FormGroup, FormControl, ControlLabel, Form } from 'react-bootstrap'


class Settings extends React.Component{

	constructor(){
		super();
			this.state= {
			show: false,
			name: '',
			email: ','
			
		}
	}


	render(){
		return(
			<Grid fluid>
				<Row bsClass='row'>
					<Col bsClass="col" xs={12}>
						<PageHeader>Edit User Settings</PageHeader>
						<Form horizontal>
								<FormGroup controlId="userName"> 
									<ControlLabel>Name</ControlLabel>
									<FormControl type="text" value={this.state.value} onChange={this.handleChange} placeholder="Enter Name"/>
								</FormGroup>
								<FormGroup controlId="Email"> 
									<ControlLabel>Email</ControlLabel>
									<FormControl type="email" value={this.state.value} onChange={this.handleChange} placeholder="Enter Name"/>
								</FormGroup>
								<FormGroup controlId="userName"> 
									<ControlLabel>Phone</ControlLabel>
									<FormControl type="text" value={this.state.value} onChange={this.handleChange} placeholder="Enter Name"/>
								</FormGroup>
								   <Button type="submit">
						          Save Changes
						        </Button>
							</Form>	
						</Col>
					</Row>
				</Grid>		

		)
	}
}

export default Settings