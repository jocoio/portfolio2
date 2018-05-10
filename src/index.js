import 'tachyons'
import './index.css'
import React from 'react'
import App from './components/app/App'
import { render } from 'react-dom'
import {
  BrowserRouter,
  Route
} from 'react-router-dom'
import routes from './components/utils/routes'

document.title = 'Jon Corbett Portfolio'

render(
  <BrowserRouter>
    <Route>
      {props => <App {...props} routes={routes} />}
    </Route>
  </BrowserRouter>,
  document.getElementById('root'),
)
