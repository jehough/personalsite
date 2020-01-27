import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Dropdown from '../components/dropdown.js'


class NavSideBar extends Component {
  state ={
    dropdown: false
  }

  handleClick = () =>{
    let clicked = false
    this.state.dropdown ? clicked = false : clicked = true
    this.setState({dropdown: clicked})
  }
  render(){
    return(
      <Navbar className="navside" expand="lg">
        <Nav className="navItems">
          <Link to="/">Home</Link>
        </Nav>
        <Nav className="dropdown" onClick={this.handleClick}>
          Blog 
          {this.state.dropdown ? <Dropdown /> : null}
        </Nav>
      </Navbar>
    )
  }
}

export default NavSideBar
