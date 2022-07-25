import React,{useState} from 'react'
import FDecre from './FDecrement';
import FIncre from './Fincrement';

export default function Fcounter() {
    const [increment,setIncrement] = useState(0);
    const [decrement,setDecrement] = useState(0);

    let hanndleIncrement=()=>{
        setIncrement(increment+1)
    }

    let hanndleDecrement=()=>{
        setDecrement(decrement-1)
    }

  return (
    <div>
        <FIncre data ={increment} func ={hanndleIncrement}/>
        <FDecre data ={decrement} func ={hanndleDecrement}/>
    </div>
  )
}
