import React from 'react';
import { render } from 'react-dom';
import registerServiceWorker from './components/utils/registerServiceWorker';
import { BrowserRouter } from 'react-router-dom';
import App from './components/app/App.js';
import './index.css';

render(
    <BrowserRouter>
        <App />
    </BrowserRouter>,
	document.getElementById('root')
);

registerServiceWorker();
