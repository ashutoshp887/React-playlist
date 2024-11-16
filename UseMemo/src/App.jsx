import { useMemo, useState } from "react"


function App() {
  const [Addition,setadd] = useState(0)
  function add (){
setadd(Addition+1)
  }
  const[substration,setminus] = useState(0)
  function minus (){
    setminus(substration-1)
  }
  const supermultiply = useMemo (function mutliply(){
    console.log("hello rahul are u looking for hot and wild sexy girl")
    return  Addition *2
  },[Addition]) 
  return (
    <>
    {supermultiply} <br/>
      <button onClick={add}>Addition</button>
      <span>{Addition}</span> <br/>
      <button onClick={minus}>substratcion</button>
      <span>{substration}</span>
    </>
  )
}

export default App

