/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import {memo} from "react"



 function ChildA({Learning, count}) {
    console.log("child component")
  return (
    <div>
     <h1>{Learning}</h1> 
     <h4>{count}</h4>
    </div>
  )
}
export default memo(ChildA)