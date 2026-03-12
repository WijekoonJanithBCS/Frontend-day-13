
import { Route, Routes } from "react-router-dom"
import AdminPage from "./pages/admin"
import HomePage from "./pages/home"
import LoginPage from "./pages/login"
import TestPage from "./components/test"
import {Toaster} from "react-hot-toast"

function App() {
  

  return (
      <div>
      <Toaster position="top-right"/> 
        <Routes>
          <Route path="/" element={<HomePage/>}/>
          <Route path="/admin/*" element={<AdminPage/>}/>
          <Route path="/login" element={<LoginPage/>}/>
          <Route path="/test" element={<TestPage/>}/>
        </Routes>
      </div>
    
      
       
        
      
    )
  
}

export default App
