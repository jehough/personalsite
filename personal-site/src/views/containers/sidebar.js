import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import SideNav, { Toggle, Nav, NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';
import Dropdown from '../components/dropdown.js'


class NavSideBar extends Component {

  render(){
    return(
      <SideNav className="side">
        <SideNav.Toggle />
        <SideNav.Nav defaultSelected="">
            <NavItem eventKey="">
              <NavIcon>
              </NavIcon>
              <NavText>
                <Link to="/">
                    Home
                </Link>
              </NavText>
            </NavItem>
            <NavItem eventKey="projects">
                <NavIcon>
                    <i className="fa fa-fw fa-device" style={{ fontSize: '1.75em' }} />
                </NavIcon>
                <NavText>
                  <a href="https://jehough.github.io">
                    Blog
                  </a>
                </NavText>
            </NavItem>
            <NavItem eventKey="projects">
                <NavIcon>
                    <i className="fa fa-fw fa-device" style={{ fontSize: '1.75em' }} />
                </NavIcon>
                <NavText>
                  <Link to="/projects">
                    Devices
                  </Link>
                </NavText>
            </NavItem>
        </SideNav.Nav>
    </SideNav>
    )
  }
}

export default NavSideBar
