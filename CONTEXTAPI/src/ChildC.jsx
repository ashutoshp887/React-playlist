
import {data} from './App'
const ChildC = () => {
  return (
    <>
      <data.Consumer>
        {
            (name)=>{
                return(
                    <h1>my name is  {name} do you like {name}</h1>
                )
            }
        }
      </data.Consumer>
    </>
  )
}

export default ChildC
