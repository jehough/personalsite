import React from 'react';
import Card from 'react-bootstrap/Card'

const DisplayCard = props => {
  return(
    <Card>
      <iframe src="https://www.youtube.com/embed/1keOmQmGdWw"
        frameborder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen />
      <Card.Body>Some Text</Card.Body>
    </Card>
  )
}

export default DisplayCard
