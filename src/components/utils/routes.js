import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { TransitionGroup } from 'react-transition-group/TransitionGroup';
import HomePage from '../home/HomePage.js';
import WorkPage from '../work/WorkPage.js';
import AboutPage from '../about/AboutPage.js';
import ProjectPage from '../project/ProjectPage.js';

export default class Routes extends React.Component {

	render() {
		return (

			<div>
				<Route render={({ location }) => (
					<TransitionGroup>
						
							<Switch location={location} key={location.key}>
								<Route exact path="/" component={HomePage} />
								<Route path="/about" component={AboutPage} />
								<Route path="/work" component={WorkPage} />
								<Route path="/project" component={ProjectPage} />
							</Switch>
						

					</TransitionGroup>
				)}
				/>
			</div>
		)
	}
}