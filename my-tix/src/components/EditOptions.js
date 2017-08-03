import React from 'react'
import { Button, Row, Col } from 'react-bootstrap';
import {  FormGroup, FormControl, ControlLabel } from 'react-bootstrap'
// import CurrentEvents from "./currentEvents"

class EditOptions extends React.Component{
	constructor(){
		super();

		this.state ={
			show: false,
			show2: false,
			formEditName:"",
			formEditStartDate: "",
			formEditEndDate:"",
			formEditPicture:""
		}

	}

											


render(){
	return(


						<Row bsClass="row">
							<Col componentClass={ControlLabel} xs={4}>
									{this.props.name}
					     </Col>
					    <Col bsClass="col" xs={8}>
					     		<Row bsClass="row">
					     			<FormGroup controlId="optionName">
							     	 <Col componentClass={ControlLabel} xs={4}>
							        	Name:
							       	</Col>  
						       		<Col xs={8}>
						       			<FormControl type="text" value={this.state.value} placeholder="" 
						            onChange={this.handleChange}/>
					       			</Col>
					       		</FormGroup>	
						       	</Row>
						      

						       	<Row bsClass="row">
						       	<FormGroup controlId="optionPrice">
						        	<Col componentClass={ControlLabel} xs={4}>
						        		Price:
						        	</Col>  
					       			<Col xs={8}>
					       				<FormControl type="number" value={this.state.value} placeholder="" 
					            	onChange={this.handleChange}/>
					       			</Col>
					       			</FormGroup>
				       			</Row>	
				       			
				       			<Row bsClas="row">
				       			<FormGroup controlId="optionQuantity">
							        <Col componentClass={ControlLabel} xs={4}>
							        	Quantity: 
							        </Col>  
						       		<Col xs={8}>
						       			<FormControl type="number" value={this.state.value} placeholder="" 
						            onChange={this.handleChange}/>
						       		</Col>
						       	</FormGroup>	
				       			</Row>
				       		
				       			<Row bsClass="row">
				       			<FormGroup controlId="optionDescription">
							        <Col componentClass={ControlLabel} xs={4}>
							        	Description:
							        </Col>  
						       		<Col xs={8}>
						       			<FormControl componentClass="textarea" value={this.state.value} placeholder="" 
						            onChange={this.handleChange}/>
						       		</Col>
						       	</FormGroup>
					       		</Row>	
									</Col>
									<Button type="submit" onClick={this.handleOptionEditSubmit}  bsStyle="primary">Save changes</Button>
					   	 </Row> 

					   	 )	
				}
			}

export default EditOptions				

