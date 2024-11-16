import {Routes,Route} from "react-router-dom"
import Deepti from "./Deepti"
import Rahul from "./Rahul"
import Fantasy from "./Fantasy"

function App() {
  return (
    <div>
      <Routes>
        <Route path = '/' element ={<Fantasy/>}/>
<Route path ="Deepti" element ={<Deepti/>}/>
<Route path ='Rahul' element ={<Rahul/>}/>
        
      </Routes>
    </div>
  )
}

export default App
