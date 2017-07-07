import React, { Component } from 'react';
import Nav from './Nav.js';
import Routes from './routes.js';
import { Grid } from './grid';
import './App.css';

class App extends Component {

  render() {
    return (
      <div>
        <Grid>
          <Nav />
          <Routes />
        </Grid>
      </div>
    );
  }
}

export default App;
