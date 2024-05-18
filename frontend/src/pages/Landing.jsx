import { Link } from "react-router-dom"
import { getCookie } from "../utils/helpers"

function Landing() {
  return (
    <div>
      {
        getCookie().length>1 ? "Logged in" : 
      <Link to={`/login`}>Login</Link>
      }
    </div>
  )
}

export default Landing