
import { Route, Routes } from "react-router-dom"
import AdminPage from "./pages/admin"
import HomePage from "./pages/home"
import LoginPage from "./pages/login"
import TestPage from "./components/test"


function App() {
  

  return (
    
      
        <Routes>
          <Route path="/" element={<HomePage/>}/>
          <Route path="/admin/*" element={<AdminPage/>}/>
          <Route path="/login" element={<LoginPage/>}/>
          <Route path="/test" element={<TestPage/>}/>
        </Routes>
        
      
    )
  
}

export default App
