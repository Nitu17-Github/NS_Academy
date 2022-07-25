import React, { Component } from 'react'

export default class Child extends Component {
  render() {
      console.log("Props value:",this.props)
    return (
      <div>
          {this.props.children}
      </div>
    )
  }
}
