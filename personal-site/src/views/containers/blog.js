import React, {Component} from 'react';
import Card from 'react-bootstrap/Card'

export default class Projects extends Component{
  render(){
    return(
      <div className="mainProjects">
        <h1>These are my projects</h1>
        <Card>
          <iframe src="https://www.youtube.com/embed/1keOmQmGdWw"
            frameborder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen />
          <Card.Body>Some Text</Card.Body>
        </Card>
      </div>
    )
  }
}
