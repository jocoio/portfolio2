import React from "react";
import './App.css'
import { matchPath } from 'react-router-dom'
import { TransitionGroup } from 'react-transition-group'

// import routes from '../utils/routes'
import Nav from '../nav/Nav'

export default class App extends React.Component {
  matchPath = path =>
    matchPath(window.location.pathname, path)

  render() {
    return (
      <div id="app">
        <Nav />
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
