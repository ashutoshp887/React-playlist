/* eslint-disable react/prop-types */

import ChildC from './ChildC'
const ChildB = ({name,age}) => {
  return (
    <>
      <ChildC name ={name} age = {age}/>
     
    </>
  )
}

export default ChildB
