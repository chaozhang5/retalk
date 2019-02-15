import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import store from "./store/index";
import { Provider } from 'react-redux';
import Root from './container/root';

ReactDOM.render (
	<Provider store={store}>
		<BrowserRouter>
			<Switch>
				<Redirect exact from="/" to="/home" />
				<Route path="/home" exact component={Root}></Route>
				<Route path="/home/:location" component={Root}></Route>
			</Switch>
		</BrowserRouter>
	</Provider>,
	document.getElementById('root')
)

