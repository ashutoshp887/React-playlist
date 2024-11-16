
import { useState } from 'react'

function useHook() {
  
    const[count,Set] = useState(0)
    function increment (){
Set(count+1)
    }
function decrement(){
  Set(count-1)
}
return[count,increment,decrement];
  
}

export default useHook