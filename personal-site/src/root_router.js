import React, {Component} from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';

export default class RootRouter extends Component{
  render(){
    return(
      <Router>
        <Route exact path='/' component={Home} />
      </Router>
    )
  }
}
