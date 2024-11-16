import { Link,useNavigate} from "react-router-dom"

function Rahul() {
  const navigate = useNavigate()
  function deepti(){
    navigate("/deepti")
  }
  return (
    <>
    <div>Rahul</div>
      Rahul dick soo thick
      <Link to ='/'>Fantasy</Link><br/>
      <button onClick={deepti}>Go TO Deepti</button>
    </>
  )
}

export default Rahul
