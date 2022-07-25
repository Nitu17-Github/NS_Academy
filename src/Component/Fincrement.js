// import React from 'react'

// const FIncre=(props)=>{
//     console.log("Function Increment", props);

// // export default function FDecrement() {
//   return (
//     <div>

//         <h1>{props.data}</h1>
//         <button onClick={props.func}>Click to increent</button>
//     </div>
//   )
//   }
//   export default FIncre;

import React from 'react'

export default function Fincrement(props) {
  // console.log("Function Increment",props)
  return (
    <div>

      <h1>{props.data}</h1>
      <button onClick={props.func}>increse</button>
    </div>
  )
}


