import React from 'react';
import Jsbarcode from "jsbarcode"

class Ticket extends React.Component{

  
  
	render(){
		return(
		<div className="container">

      <div className="row" id="ticketBlock">
        <div className="col-sm-12">
          <ol className="breadcrumb">
            <li className="active">Home</li>
            <li className="active">Purchase</li>
            <li className="active">Ticket</li>
          </ol>
          <div id="ticketContainer">

            <div className="media" id="ticket">
              <div className="media-left">
                <div className="canvas">
                  <svg className="barcode" alt="barcode"></svg>
                </div>
              </div>
              <div className="media-body">
                <h2 className="media-heading" id="eventName"></h2>
                <h3>Name: </h3>
                <h4 id="givenName"></h4>
                <h3>Email: </h3>
                <h4 id="givenVenmoEmail"></h4>
                <h3>Ticket Option: </h3>
                <h4 id="givenOptionName"></h4>
                <h3>Quantity: </h3>
                <h4 id="givenQuantity"></h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    
		);
	}
}

export default Ticket;