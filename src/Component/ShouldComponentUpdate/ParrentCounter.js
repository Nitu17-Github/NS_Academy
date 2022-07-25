import React, { Component } from 'react'
import Decrement from './Decrement'
import Increment from './Increment'

export default class ParrentCounter extends Component {
    state = {
        incValue :0,
        decValue :0
    }
    increment=()=>{
        this.setState({...this.state,incValue: this.state.incValue+1})
    }
    decrement=()=>{
        this.setState({incValue:this.state.incValue,decValue: this.state.decValue-1})
    }

  render() {
    return (
      <div>
            <Increment  data={this.state.incValue} func = {this.increment}/>
            <Decrement  data={this.state.decValue} func = {this.decrement}/>

      </div>
    )
  }
}
