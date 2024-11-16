import  { useState } from 'react'

export default function App() {
  const[name,setname] =useState("deepti")
  function handlechange(e){
setname(e.target.value)
  }
  return (
    <>
      <form onSubmit="">
        <label>First name </label>
        <input type="text" value={name} onChange={handlechange} />
       
      </form>
    </>
  )
}
