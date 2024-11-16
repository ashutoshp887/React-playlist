import  {useState } from 'react'


const App = () => {
  const [count,setcount]= useState(1)
  function update (){
    setcount(count + 1 );
  }
  function update1 (){
    setcount(count - 1 );
  }
  return (
    <>
      <h1> no of {count}</h1>
      <button onClick={update}>click me </button>
      <button onClick={update1}>reset </button>
    </>
  )

}
export default App
