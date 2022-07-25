import React, { Component } from 'react'

export default class Mounting extends Component {
    //first method
    constructor()
    {
        super();
        console.log("1. construction phase");
    }
    //second method
    static getDerivedStateFromProps(props,state){
        console.log("2. getderived phase");
        return null;
    }
    //fourt method
    componentDidMount(){
        console.log("4.Compount phasse")
    }

    //third method
    
  render() {
      console.log("3. render phase");
    return (
      <div>Mounting of class component</div>
    )
  }
}
