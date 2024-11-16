/* eslint-disable react/prop-types */
import  { useState } from 'react'

function Child(props){
  const[name,setName] = useState()
  function handleSubmit (e){
    e.preventDefault();
    props.getData(name)
  }
  return (
    <>
    <form onSubmit={handleSubmit}>
    <input type="text" value={name} onChange={(e)=>{setName(e.target.value)}}></input>
    <button>Submit</button>
    </form>
      
    </>
  )
}

export default Child ;
