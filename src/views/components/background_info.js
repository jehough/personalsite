import React, {Component} from 'react';

export default class BackgroundInfo extends Component{

  render(){
    return(
      <div className="infoCard">
        <ul>
          {this.props.points.map(point => <li>{point}</li>)}
        </ul>
      </div>
    )
  }
}
