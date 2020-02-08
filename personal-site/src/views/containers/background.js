import React, {Component} from 'react';
import BackgroundCard from '../components/background_card'
import {backgroundList} from '../../helper'

export default class Background extends Component{
  constructor(){
    super()
    this.state = {
      showEd: false,
      showNa: false,
      showTe: false
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
        {backgroundList.map(obj => <BackgroundCard obj={obj} show={eval(`this.state.${obj.value}`)} handleClick={this.handleClick}/>)}
      </div>
    )
  }
}
