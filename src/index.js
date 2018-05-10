import 'tachyons'
import './index.css'
import React from 'react'
import { render } from 'react-dom'
import {
  BrowserRouter,
  Route,
  matchPath,
} from 'react-router-dom'
import routes from './components/utils/routes'
import { TransitionGroup } from 'react-transition-group'
import Header from './components/nav/Nav'

document.title = 'Jon Corbett Portfolio'

class App extends React.Component {
  matchPath = path =>
    matchPath(window.location.pathname, path)

  render() {
    return (
      <div id="app">
        <Header />
        <TransitionGroup id="content">
          {this.props.routes
            .filter(({ path }) => this.matchPath(path))
            .map(({ Component, key }) => (
              <Component key={key}/>
            ))}
        </TransitionGroup>
      </div>
    )
  }
}

render(
  <BrowserRouter>
    <Route>
      {props => <App {...props} routes={routes} />}
    </Route>
  </BrowserRouter>,
  document.getElementById('root'),
)
