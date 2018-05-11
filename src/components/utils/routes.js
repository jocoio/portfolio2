// import React from 'react';
// import { Switch, Route } from 'react-router-dom';
import HomePage from '../home/HomePage.js';
import AboutPage from '../about/AboutPage.js';
import ProjectPage from '../project/ProjectPage.js';
// import Missed from '../utils/404.js';

// export default class Routes extends React.Component {

// 	render() {
// 		return (

// 			<div>
// 				<Route render={({ location }) => (
// 						<Switch location={location} key={location.key}>
// 							<Route exact path="/" component={HomePage} />
// 							<Route path="/about" component={AboutPage} />
// 							<Route path="/project" component={ProjectPage} />
// 							<Route path="/:projectname" component={ProjectPage} />
// 							<Route component={Missed} />
// 						</Switch>
// 				)}
// 				/>
// 			</div>
// 		)
// 	}
// }

export default [
  {
    key: 'home',
    Component: HomePage,
    path: {
      path: '/',
      exact: true,
    },
  },
  {
    key: 'about',
    Component: AboutPage,
    path: {
      path: `/about`,
    },
	},
	{
    key: 'hellola',
    Component: ProjectPage,
    path: {
			path: `/hellola`,
    },
	},
	{
    key: 'scout',
    Component: ProjectPage,
    path: {
			path: `/scout`,
    },
	},
]