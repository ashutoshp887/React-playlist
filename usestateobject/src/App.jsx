import { useState } from "react"


const App = () => {
  const[allvalues,setvalue]= useState({name : "deepti",sexy:"ass"})
  function update (){
    setvalue({...allvalues,name :"kyden"})
  }
  return (
    <div>
      <h1>i want fuck {allvalues.name} {allvalues.sexy}</h1>
      <button onClick={update}>cick</button>
    </div>
  )
}

export default App
