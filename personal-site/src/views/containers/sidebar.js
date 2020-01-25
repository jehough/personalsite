import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'


class NavSideBar extends Component {
  render(){
    return(
      <Navbar className="navside">
        <Nav className="navItems">
          <Link to="/">Home</Link>
          <NavDropdown title="Blog" id="basic-nav-dropdown">
            <NavDropdown.Item><Link to='/blog'>Blog Post 1</Link></NavDropdown.Item>
            <NavDropdown.Item><Link to='/blog'>Blog Post 2</Link></NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar>
    )
  }
}

export default NavSideBar
