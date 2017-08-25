import React, { Component } from "react";
import './App.css'
import Nav from "../nav/Nav.js";
import Routes from '../utils/routes.js';

export default class App extends Component {
	render() {
		return (
			<div className="wrapper">
				<Nav />
				<Routes/>
			</div>
		);
	}
}
