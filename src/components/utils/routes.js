import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { CSSTransitionGroup } from 'react-transition-group';
import HomePage from '../home/HomePage.js';
import WorkPage from '../work/WorkPage.js';
import AboutPage from '../about/AboutPage.js';
import ProjectPage from '../project/ProjectPage.js';
import Missed from '../utils/404.js';

export default class Routes extends React.Component {

	render() {
		return (

			<div>
				<Route render={({ location }) => (
					<CSSTransitionGroup
						transitionName='example'
						transitionEnterTimeout={500}
						transitionLeaveTimeout={250}>

						<Switch location={location} key={location.key}>
							<Route exact path="/" component={HomePage} />
							<Route path="/about" component={AboutPage} />
							<Route path="/work" component={WorkPage} />
							<Route path="/project" component={ProjectPage} />
							<Route component={Missed} />
						</Switch>
					</CSSTransitionGroup>
				)}
				/>
			</div>
		)
	}
}