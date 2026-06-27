
import { Route, Routes } from "react-router-dom"
import AdminPage from "./pages/admin.jsx"
import HomePage from "./pages/home.jsx"
import LoginPage from "./pages/login.jsx"
import TestPage from "./components/test.jsx"
//import {toast} from "react-hot-toast"
import RegisterPage from "./pages/register.jsx"
import ForgotPasswordPage from "./pages/forgotPassword.jsx"
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";



function App() {
  

  return (
      <div>
      <ToastContainer />
        <Routes>
          
          <Route path="/*" element={<HomePage/>}/>
          <Route path="/admin/*" element={<AdminPage/>}/>
          <Route path="/login" element={<LoginPage/>}/>
          <Route path="/register" element={<RegisterPage/>}/>
          <Route path="/test" element={<TestPage/>}/>
          <Route path="/forgot-password" element={<ForgotPasswordPage/>}/>
        </Routes>
      </div>
    
      
       
        
      
    )
  
}

export default App
