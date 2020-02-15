import React, {Component} from 'react';
import BackgroundInfo from './background_info'

export default class BackgroundCard extends Component{

  render(){
    return(
      <div>
        <div className="backgroundHeader">
          <h3>{this.props.obj.name}</h3>
          <button value={this.props.obj.value} onClick={this.props.handleClick}>
            {this.props.show ?  "Hide":"Show"}
          </button>
        </div>
        {this.props.show ? <BackgroundInfo points={this.props.obj.points}/>:null}
      </div>
    )
  }
}
