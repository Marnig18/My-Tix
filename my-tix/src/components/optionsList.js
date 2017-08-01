import React from 'react'
import { Button, Row, Col, ListGroupItem, PageHeader, Grid, Modal } from 'react-bootstrap';
import { ListGroup, FormGroup, FormControl, ControlLabel,  } from 'react-bootstrap'


const DisplayOptions = props => {
	const options = props.options.map(item => {
		console.log(item)
		return (

				<ListGroupItem key={item._id}>
					<h4>{item.optionName}</h4>
					<p>{item.optionPrice}</p>
					<p>{item.optionQuantity}</p>
					<p>{item.optionDescription}</p>
				</ListGroupItem>	
		)
	})
	return (
		<div>

			<ListGroup>
				{options}
			</ListGroup>
			{/* {JSON.stringify(props.lostItems)} */}
		</div>
	)
}

export default DisplayOptions


