import { useState } from "react"


const App = () => {
  const[items,setitem] =useState([])
  function update(){
    setitem([...items,{
      id: items.lenghth,
      value : Math.random()

    }])
  }
  return (
    <>
    <ol>
    {items.map(item=>(<li key ={item.id}>{item.value}
      </li>))}

    <button onClick={update}>update</button>
    </ol>
   
    </>
      

  )
}

export default App
