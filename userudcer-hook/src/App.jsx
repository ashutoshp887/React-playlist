import { useReducer } from "react"
const initialstate=0;
const reducer = (state,action)=>{
  switch(action){
    case "increment" :
      return state+1 
      case "Decrement" :
        return state-1
        default:
          return state
  }
}

const App = () => {
  const [count,dispatch]= useReducer(reducer,initialstate)
  return (

    <>
    <div>count={count}</div>
      <button onClick={()=>dispatch("increment")}>incremenr</button>
      <button onClick={()=>dispatch("Decrement")}>Decrement</button>
    </>
  )
}

export default App

