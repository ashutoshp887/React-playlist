/* eslint-disable no-unused-vars */
/* eslint-disable react-refresh/only-export-components */
import React, { createContext } from 'react'
import ChildA from './ChildA';

//what is context api ?
// create , provider , consumer  
const data = createContext();
function App() {
  const  name = "rahul"
  return (
    <>
      <data.Provider value = {name}>
        <ChildA/>
      </data.Provider>
    </>
  )
}

export default App;
export {data};
