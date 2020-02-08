import React, {Component} from 'react';

export default class Background extends Component{
  constructor(){
    super()
    this.state = {
      showEd: false,
      showNa: false
    }
  }

  handleClick = (e) => {
    const target = e.target.value
    const state = `this.state.${e.target.value}`
    let show = eval(state)
    show ? show=false : show=true
    const setS = {[target]: show}
    this.setState(setS)
  }
  render(){
    return(
      <div>
        <h1>My Background</h1>
        <div className="backgroundHeader">
          <h3>Education</h3>
          <button value="showEd" onClick={this.handleClick}>Down</button>
        </div>
        {this.state.showEd ? <p>hello</p>:<p>not here</p>}
        <div className="backgroundHeader">
          <h3>Navy</h3>
          <button value="showNa" onClick={this.handleClick}>Down</button>
        </div>
        {this.state.showNa ? <p>hello</p>:<p>not here</p>}
      </div>
    )
  }
}
