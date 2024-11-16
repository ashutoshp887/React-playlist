/* eslint-disable react/prop-types */
import ChildB from "./ChildB"


function ChildA({name,age}) {
  return (
    <>
   <ChildB name ={name} age = {age}/>
  
    </>
  )
}

export default ChildA
