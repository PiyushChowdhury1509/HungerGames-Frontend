import './App.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LoginPage from "./pages/auth/signin";
import VerifyEmail from './pages/auth/verifyEmail';
import Signup from './pages/auth/signup';

const router = createBrowserRouter([
  {
    path: "/login",
    element: <LoginPage/>
  },
  {
    path: "/verifyEmail",
    element: <VerifyEmail/>
  },
  {
    path: "signup",
    element: <Signup/>
  }
])

function App() {
  return <RouterProvider router={router}/>
}

export default App;