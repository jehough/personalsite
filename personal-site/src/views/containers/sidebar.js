import React, {Component} from 'react';
import {Link, Redirect} from 'react-router-dom';
import SideNav, { Toggle, Nav, NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';


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
            <NavItem eventKey="background">
                <NavIcon>
                    <span className="far fa-address-card"></span>
                </NavIcon>
                <NavText>
                    My Background
                </NavText>
            </NavItem>
        </SideNav.Nav>
    </SideNav>
    )
  }
}

export default NavSideBar
