import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import TransitionGroup from "react-transition-group/TransitionGroup";
import AnimatedSwitch from "./animatedSwitch";
import './App.css'

import Nav from "../nav/Nav.js";
import Missed from "../utils/404.js";
import AboutPage from '../about/AboutPage.js';
import WorkPage from '../work/WorkPage.js';
import HomePage from '../home/HomePage.js';
import ProjectPage from '../project/ProjectPage.js';

export default class App extends Component {
	render() {
		return (
			<div className="wrapper">
				<Nav />
				<Route
					render={({ location }) => (
						<Switch key={location.key} location={location}>
							<Route exact path="/" component={HomePage} />
							<Route path="/work" component={WorkPage} />
							<Route path="/about" component={AboutPage} />
							<Route path="/project" component={ProjectPage} />
							<Route component={Missed} />
						</Switch>
					)}
				/>
			</div>
		);
	}
}
