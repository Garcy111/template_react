import React from "react";
import ReactDOM from "react-dom";
import { Router, Route, hashHistory } from "react-router";

import {App} from "./components/App.jsx";
import {Contacts} from "./components/Contacts.jsx";
import {About} from "./components/About.jsx";

import './scss/main.scss';

ReactDOM.render(
	<Router history={hashHistory}>
		<Route path="/" component={App}>
			<Route path="/contacts" component={Contacts} />
			<Route path="/about" component={About} />
		</Route>
	</Router>,
	document.getElementById('content')
);