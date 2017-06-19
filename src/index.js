import React from 'react';
import { render } from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import './index.css';
import Routes from './routes.js';

render(
    <Routes/>,
	document.getElementById('root')
);
registerServiceWorker();
