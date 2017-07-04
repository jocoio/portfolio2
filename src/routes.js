import React from 'react';
import { Switch, Route } from 'react-router-dom';
import HomePage from './home/HomePage.js';
import WorkPage from './work/WorkPage.js';
import AboutPage from './about/AboutPage.js';
import ProjectPage from './project/ProjectPage.js';

const Routes = () => (
	<Switch>
		<Route exact path="/" component={HomePage} />
		<Route path="/work" component={WorkPage} />
		<Route path="/about" component={AboutPage} />
		<Route path="/project" component={ProjectPage} />
	</Switch>
);

export default Routes;