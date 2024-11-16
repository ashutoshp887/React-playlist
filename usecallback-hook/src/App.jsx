import  { useCallback, useState } from 'react'
import ChildA from './ChildA';
export default function App() {
  const [add,setAdd] = useState(0);
  const [count,setCount] = useState(0);
  const Learning = useCallback(()=>{

  },[count])
  return (
    <>
      <div className='app'>
        <h1>Learning usecallback</h1>
        <ChildA Learning={Learning} count={count}/>
        <h1>{add}</h1>
<button onClick={()=>setAdd(add + 1)}> Addition</button>
<h1>{count}</h1>
<button onClick={()=>setCount(add + 1)}> Count</button>
      </div>
    </>
  )
}
