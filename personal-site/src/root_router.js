import React, {Component} from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import Home from './views/containers/home'
import NavSideBar from './views/containers/sidebar'
import Blog from './views/containers/blog'
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
          <Route path='/blog' component={Blog} />
          </Switch>
        </div>
      </Router>
    )
  }
}
