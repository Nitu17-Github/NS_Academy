import React, { Component } from 'react'

export default class ComponentDidUpdate extends Component {
    state={
        active :false,name:null,email:null
    }
    componentDidUpdate(){
        console.log('componentDidUpdate call')
        if(this.state.name === null && this.state.email === null){
            this.setState({
                name:"ABC",
                email:"manisha9681053451@gmail.com"
            });
        }
    }
  render() {
      console.log('render call')
    return (
      <div>
          <h1>User name : {this.state.name}</h1>
          <h1>User Email : {this.state.email}</h1>
          <button onClick={()=>{this.setState({active:true})}}>Get User Info</button>
      </div>
    )
  }
}
