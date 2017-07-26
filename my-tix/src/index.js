import React from 'react';
import ReactDOM from 'react-dom';


import Main from './main';
import { BrowserRouter } from 'react-router-dom'



ReactDOM.render(
	<BrowserRouter>
		<App />
	</BrowserRouter>, 
	document.getElementById("root"));