import React, {Component} from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import Home from './views/containers/home'
import NavSideBar from './views/containers/sidebar'
import Project from './views/containers/blog'
import Background from './views/containers/background'
import Header from './views/components/header'

export default class RootRouter extends Component{
  render(){
    return(
      <Router>
        <Header />
        <NavSideBar />
        <div className="main">
          <Switch>
          <Route exact path='/' component={Home}/>
          <Route path='/projects' component={Project} />
          <Route path='/background' component={Background} />
          </Switch>
        </div>
      </Router>
    )
  }
}
