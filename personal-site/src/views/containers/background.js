import React, {Component} from 'react';

export default class Background extends Component{
  constructor(){
    super()
    this.state = {
      showEd: false
    }
  }

  handleEdClick = () => {
    const show = this.state.showEd
    show ? show=false : show=true
  }
  render(){
    return(
      <div>
        <h1>My Background</h1>
        <div className="education" onClick={this.handleEdClick}>
          <h3>Education</h3>
          {this.state.showEd ? <p>hello</p>:<p>not here</p>}
        </div>
      </div>
    )
  }
}
