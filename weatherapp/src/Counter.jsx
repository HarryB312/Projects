import { useState } from "react"

export default function Counter(){
  const [count, setCount] = useState(0);
  function addOne(){
    setCount(c => c + 1)
  }
  function subOne(){
    setCount(c => c - 1)
  }
  return(
    <div>
      <h2>Counter {count}</h2>
      <button onClick={addOne}>+1</button>
      <button onClick={subOne}>-1</button>
    </div>
  )
}