import  store  from './reduxcomponent/Store'
import { Provider } from "react-redux"
import BookContainer from "./reduxcomponent/BookContainer"

const App = () => {
  return (
    <Provider store={store}>
  <div className="App">
      <BookContainer/>
      </div>
    </Provider>
  
  )
}

export default App

