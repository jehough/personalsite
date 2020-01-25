import React, {Component} from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import Home from './views/containers/home'
import NavSideBar from './views/containers/sidebar'

export default class RootRouter extends Component{
  render(){
    return(
      <Router>
        <NavSideBar />
        <div className="main">
          <Route path='/' component={Home}/>
        </div>
      </Router>
    )
  }
}
