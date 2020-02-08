import React, {Component} from 'react';
import {Link, Redirect} from 'react-router-dom';
import SideNav, { Toggle, Nav, NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';
import Dropdown from '../components/dropdown.js'


class NavSideBar extends Component {

  render(){
    return(
      <SideNav
        onSelect={(selected) => {
            const send= "/" + selected
            if (this.props.location !== send){
              this.props.history.push(send)
            }
          }
        }
      >
        <SideNav.Toggle />
        <SideNav.Nav defaultSelected="">
            <NavItem eventKey="">
              <NavIcon>
                <span className="fas fa-home"></span>
              </NavIcon>
              <NavText >
                    Home
              </NavText>
            </NavItem>
            <NavItem eventKey="blog">
                <NavIcon>
                    <span className="fas fa-blog"></span>
                </NavIcon>
                <NavText>
                    Blog
                </NavText>
            </NavItem>
            <NavItem eventKey="projects">
                <NavIcon>
                    <span className="fas fa-code"></span>
                </NavIcon>
                <NavText>
                    My Projects
                </NavText>
            </NavItem>
        </SideNav.Nav>
    </SideNav>
    )
  }
}

export default NavSideBar
