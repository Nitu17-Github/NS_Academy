import React, { Component } from 'react'

export default class GetDerived extends Component {
    state={
        favColorState: "Red"
    }
    static getDerivedStateFromProps(props,state){
        console.log("Props value:",props);
        console.log("state value:",state);

        if(state.favColorState !== props.favColorProps)
        {
            return{favColorState: props.favColorProps};
        }
    }
  render() {
    return (
      <div>
          <h2>My fav color is {this.state.favColorState}
      </h2>
      </div>
    )
  }
}
