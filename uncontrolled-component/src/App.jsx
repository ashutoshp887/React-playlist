import { useReducer } from 'react'


export default function App() {
 const refelement = useReducer();
function handleSubmit(e){
  e.preventDefault();
}
  return (
    <>
      <form className="app" onSubmit={handleSubmit}>
        <label>First name </label><br/>
        <input type="text"  ref={refelement} /><br/>
        <button>Submit</button>
       
      </form>
    </>
  )
}
