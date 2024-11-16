import { useEffect } from "react";
import { useState } from "react"


function App() {
  const[count, setcount] = useState(0)
  useEffect(()=>{
console.log('helllo')
  },[count]);
  function update (){
    setcount(count+5);

  }
  return (
    <>
      <h1> hello click me {count}</h1>
      <button onClick={update}>click me</button>
    </>
  )
}

export default App
