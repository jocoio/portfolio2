import React from 'react';
import { render } from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter} from 'react-router-dom';
import App from './App.js';
import './index.css';

render(
    <BrowserRouter>
        <App />
    </BrowserRouter>,
	document.getElementById('root')
);
registerServiceWorker();
