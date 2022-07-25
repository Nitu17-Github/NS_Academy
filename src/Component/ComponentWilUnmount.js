import React, { Component } from 'react'

export default class ComponentWilUnmount extends Component {

    constructor(){
        super();
        this.state={
            active:true
        }
    }componentWillUnmount(){
        console.log('componentwillunmount')
        alert('User has been deleted');
    }
  render() {
    return (

     <>
     {
         
     }
     </>
    )
  }
}
