import React, {Component} from 'react';
import {
  HashRouter as Router,
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
      <Router basename="/">
        <Header />
        <Route render={props => <NavSideBar {...props}/>} />

        <div className="main">
          <Switch>
          <Route exact path='/' component={Home}/>
          <Route path='/blog' component={()=>{
            window.location.href="https://jehough.github.io"
          }} />
          <Route path='/projects' component={Project} />
          <Route path='/background' component={Background} />
          </Switch>
        </div>
      </Router>
    )
  }
}
