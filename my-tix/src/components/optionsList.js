import React from 'react'

const DisplayOptions = props => {
	const options = props.options.map(item => {
		return (

				<ListGroupItem key={item._id}>
					<h4>{item.Name}</h4>
					<p>{item.StartDate}</p>
					<p>{item.EndDate}</p>
					<p>{item.picture}</p>
				</ListGroupItem>	
		)
	})
	return (
		<div>
			// <h3>Displaying items</h3>
			<ListGroup>
				{options}
			</ListGroup>
			{/* {JSON.stringify(props.lostItems)} */}
		</div>
	)
}

export default DisplayItems


