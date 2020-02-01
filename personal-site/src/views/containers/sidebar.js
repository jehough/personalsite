import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Dropdown from '../components/dropdown.js'


class NavSideBar extends Component {

  render(){
    return(
      <Navbar className="navside" expand="lg">
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="navItems">
          <Link to="/">Home</Link>
          <a href="https://jehough.github.io/">Blog</a>
          <Link to="/projects">My Projects</Link>
          <Link to="/backgroun">My Background</Link>
        </Nav>
        </Navbar.Collapse>
      </Navbar>
    )
  }
}

export default NavSideBar
