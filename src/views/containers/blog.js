import React, {Component} from 'react';
import DisplayCard from '../components/card'
import {projectList} from '../../helper.js'

export default class Projects extends Component{
  render(){
    return(
      <div className="mainProjects">
        <h1>These are my projects</h1>
        <div className="projectCards">
          {projectList.map(obj => <DisplayCard obj={obj}/>)}
        </div>
      </div>
    )
  }
}
