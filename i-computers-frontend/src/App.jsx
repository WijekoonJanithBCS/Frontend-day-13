
import { Route, Routes } from "react-router-dom"
import AdminPage from "./pages/admin.jsx"
import HomePage from "./pages/home.jsx"
import LoginPage from "./pages/login.jsx"
import TestPage from "./components/test.jsx"
import {Toaster} from "react-hot-toast"
import RegisterPage from "./pages/register.jsx"


function App() {
  

  return (
      <div>
      <Toaster position="top-right"/> 
        <Routes>
          
          <Route path="/*" element={<HomePage/>}/>
          <Route path="/admin/*" element={<AdminPage/>}/>
          <Route path="/login" element={<LoginPage/>}/>
          <Route path="/register" element={<RegisterPage/>}/>
          <Route path="/test" element={<TestPage/>}/>
        </Routes>
      </div>
    
      
       
        
      
    )
  
}

export default App
