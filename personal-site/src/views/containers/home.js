import React, {Component} from 'react';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
export default class Home extends Component{
  render(){
    return(
      <div>
        <div className="mainHome">
          <h1>James Hough</h1>
          <img src="/20200123_164959.jpg" alt="a pic of me...my face apparently broke your computer!" id="self-image"/>
        </div>
        <p>Full stack web developer with experience in Ruby and JavaScript frameworks. Teaching analytical logic and advanced mathematics for the last 9 years gives me a strong foundation in the thought process that drives programming. Collaborating with colleagues to build curriculum for students of varied backgrounds required creativity and ingenuity that I am excited to translate into the coding world.</p>
      </div>
    )
  }
}
