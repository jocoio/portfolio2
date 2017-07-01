import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import App from './App.js';
import HomePage from './home/HomePage.js';
import WorkPage from './work/WorkPage.js';
import AboutPage from './about/AboutPage.js';
import ProjectPage from './project/ProjectPage.js';

const Routes = () => (
	<Router>
		<div>
			<Route path="/" component={App}/>
			<Route exact path="/" component={HomePage}/>	
			<Route path="/work" component={WorkPage}/>
			<Route path="/about" component={AboutPage}/>
			<Route path="/project" component={ProjectPage}/>
		</div>
	</Router>
);

export default Routes;