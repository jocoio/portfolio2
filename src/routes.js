import React from 'react';
import { Route } from 'react-router';
import HomePage from './home/HomePage.js';
import WorkPage from './work/WorkPage.js';
import AboutPage from './about/AboutPage.js';
import App from './App.js';
import { Router, browserHistory, IndexRoute } from 'react-router';

const Routes = () => (
	<Router history={browserHistory}>
		<Route path="/" component={App}>
			<IndexRoute component={HomePage}/>			
            <Route path="/work" component={WorkPage}/>
            <Route path="/about" component={AboutPage}/>
        </Route>
	</Router>
);

export default Routes;