import { useState } from "react";

function Counter(){
  const [count, setCount] = useState(0);
  const [addBy, setAddBy] = useState(1)
  const add = () =>{
    setCount(c => c + addBy);
  };
  const subtract = () =>{
    setCount(c => Math.max(0, c - addBy));
  };
  const reset = () =>{
    setCount(0);
  };
  
  return(
    <div>
      <p>Counter {count}</p>
      <select onChange={(e) => setAddBy(Number(e.target.value))}>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="5">5</option>
        <option value="10">10</option>
      </select>


      <button onClick={add}>Add {addBy}</button>
      <button onClick={subtract} disabled={count === 0}>Subtract      {addBy}</button>
      <button onClick={reset}>reset</button>
    </div>
  )
}

export default Counter;