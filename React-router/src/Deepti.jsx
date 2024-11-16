import { Link ,useNavigate} from "react-router-dom"

function Deepti() {
  const navigate = useNavigate()
  function rahul(){
    navigate("/rahul")
  }
  return (
    <div>
        <div>Deepti</div>
      Deepti boobs so big
      <Link to ='/'>Fantasy</Link><br/>
      <button onClick={rahul}>Go TO Rahul</button>
    </div>
  )
}

export default Deepti
