

function App() {
  const ipl = ["rahul","deepti","sexy"]
  const deeptiass = ipl.map((ipl,index)=><h4 key={index}>{ipl}</h4>)
  return (
    <>
      <h1>
        {ipl[0]}<br/>
        {ipl[1]}<br/>
        {ipl[1]}<br/>
      </h1>
      <h2>{deeptiass}</h2><br/>
    </>
  )
}

export default App
