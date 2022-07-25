import React, { Component } from 'react'
import Child from './Child'

export default class Parrent extends Component {
    state={fname: "a",lname:"b"}
  render() {
    return (
      <Child>{this.state.fname}</Child>
     
    )
  }
}
