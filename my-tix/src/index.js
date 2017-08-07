import React from 'react';
import ReactDOM from 'react-dom';



import { BrowserRouter, Route, Switch } from 'react-router-dom'
import App from './App';
import Login from './components/login.js'
import Main from './Main'
import OG from './Passport'
// import { BrowserRouter } from 'react-router-dom'



ReactDOM.render(
<BrowserRouter>
	<Switch>    
		<Route path="/" component={OG} />
        <Route path="/home" component={App} />
        <Route exact path="/events/:id" component={Event} />
      
    </Switch>
</BrowserRouter>		
, 
	document.getElementById("root"));