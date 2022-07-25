import React, { Component } from 'react'

export default class Cdm extends Component {
    state={data: "Hello webskitter"}

    show(){
        setTimeout(()=>{
            alert(" ComponentDidMount worked.");
            console.warn("Data shown");
        },4000)
    }

    //setTimeout(()=>{},5000)
    componentDidMount()
    {
        console.log("CDM")
        this.show();
    }
  render() {
      console.log("Render")
    return (
      <div>
          <h1>{this.state.data}</h1>
      </div>
    )
  }
}
