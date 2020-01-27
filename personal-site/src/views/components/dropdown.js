import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'


export default class Dropdown extends Component {
  render(){
    return(
      <div>
        <Link to="/blog">Blog post 1</Link><br/>
        <Link to="/blog">Blog post 2</Link>
      </div>
    )
  }
}
