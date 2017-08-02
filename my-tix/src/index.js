import React from 'react';
import ReactDOM from 'react-dom';



import { BrowserRouter } from 'react-router-dom'
import App from './App';
import Login from './components/login.js'
import Main from './Main'
// import { BrowserRouter } from 'react-router-dom'



ReactDOM.render(
<BrowserRouter>
		<Main />
</BrowserRouter>		
, 
	document.getElementById("root"));