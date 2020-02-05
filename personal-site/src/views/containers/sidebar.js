import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Dropdown from '../components/dropdown.js'


class NavSideBar extends Component {

  render(){
    return(
      <Navbar className="navside" expand="lg" fixed="bottom">
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <div className="navLinks">
            <Nav><Link to="/">Home</Link></Nav>
            <Nav><a href="https://jehough.github.io/">Blog</a></Nav>
            <Nav><Link to="/projects">My Projects</Link></Nav>
            <Nav><Link to="/background">My Background</Link></Nav>
          </div>
        </Navbar.Collapse>
      </Navbar>
    )
  }
}

export default NavSideBar
