import './App.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LoginPage from "./pages/auth/signin";
import VerifyEmail from './pages/auth/verifyEmail';

const router = createBrowserRouter([
  {
    path: "/login",
    element: <LoginPage/>
  },
  {
    path: "/verifyEmail",
    element: <VerifyEmail/>
  }
])

function App() {
  return <RouterProvider router={router}/>
}

export default App;