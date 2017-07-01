import React, { Component } from 'react';
import Nav from './Nav.js';
import { Grid } from './grid';

import './App.css';

class App extends Component {

  render() {
    return (
      <div>
        <Grid>
          <Nav/>
          {this.props.children}
        </Grid>
      </div>
    );
  }
}

export default App;
