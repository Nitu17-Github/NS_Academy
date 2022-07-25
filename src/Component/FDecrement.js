import React from 'react'

const FDecre=(props)=>{
    console.log("Function Decrement", props);

// export default function FDecrement() {
  return (
    <div>

        <h1>{props.data}</h1>
        <button onClick={props.func}>Click to decrese</button>
    </div>
  )
  }
  // export default React.memo(FDecre,(prevProps,nextProps)=>prevProps.data===nextProps.data);

  // React.memo(Function,Condition)
  //(prevProps,nextProps)=>prevProps.data===nextProps.data

  export React.memo(Function Decrement(){
    return(
      <div>
        fdecrement
      </div>
    )
  },(prevProps,nextProps)=>prevProps.data===nextProps.data)


