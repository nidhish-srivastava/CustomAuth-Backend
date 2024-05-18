import { RouterProvider, createBrowserRouter } from "react-router-dom"
import SignUp from "./pages/Signup"
import Login from "./pages/Login"
import Landing from "./pages/Landing"
 
const routes = [
  {
    path : "/",
    element : <Landing/>
  },
  {
    path : "/login",
    element : <Login/>
  },
  {
    path : "/signup",
    element : <SignUp/>
  }
]
function App() {
  const router = createBrowserRouter(routes)
  return (
    <div>
      <RouterProvider router={router}/>
    </div>
  )
}

export default App