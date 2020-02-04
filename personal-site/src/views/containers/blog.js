import React, {Component} from 'react';
import DisplayCard from '../components/card'

export default class Projects extends Component{
  render(){
    return(
      <div className="mainProjects">
        <h1>These are my projects</h1>
        <DisplayCard />
      </div>
    )
  }
}
