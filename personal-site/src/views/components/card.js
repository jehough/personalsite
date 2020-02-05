import React from 'react';
import Card from 'react-bootstrap/Card'

const DisplayCard = props => {
  return(
    <Card style={{width: '18rem'}}>
      <iframe src= {props.obj.videoUrl}
        frameborder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen />
      <Card.Body>
        <Card.Title><a href={props.obj.githubUrl}>{props.obj.name}</a></Card.Title>
        <Card.Text>{props.obj.description}</Card.Text>
      </Card.Body>
    </Card>
  )
}

export default DisplayCard
