
import Child from "./Child"

function App() {
  function get(data){
    console.log(data)
  }
  return (
    <>
      <Child getData={get}/>
    </>
  )
}

export default App
