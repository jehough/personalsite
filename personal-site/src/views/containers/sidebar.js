import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import SideNav, { Toggle, Nav, NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';
import Dropdown from '../components/dropdown.js'


class NavSideBar extends Component {

  render(){
    return(
      <SideNav >
        <SideNav.Toggle />
        <SideNav.Nav defaultSelected="">
            <NavItem eventKey="">
              <NavIcon>
                <span class="fas fa-home"></span>
              </NavIcon>
              <NavText>
                <Link to="/">
                    Home
                </Link>
              </NavText>
            </NavItem>
            <NavItem eventKey="blog">
                <NavIcon>
                    <span class="fas fa-blog"></span>
                </NavIcon>
                <NavText>
                  <a href="https://jehough.github.io">
                    Blog
                  </a>
                </NavText>
            </NavItem>
            <NavItem eventKey="projects">
                <NavIcon>
                    <span class="fas fa-code"></span>
                </NavIcon>
                <NavText>
                  <Link to="/projects">
                    My Projects
                  </Link>
                </NavText>
            </NavItem>
        </SideNav.Nav>
    </SideNav>
    )
  }
}

export default NavSideBar
