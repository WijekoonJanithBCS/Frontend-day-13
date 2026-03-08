import { Route, Routes } from "react-router-dom";

export default function AdminPage(){
   
        return(
            <div className="w-full h-full border-2 border-red-500 flex ">
                <div className="w-[200px] h-full bg-blue-400">
                    
                </div>
                <div className="flex-1 h-full bg-amber-300">
                    <Routes>
                        <Route path="/" element={<h1>orders page</h1>}/>
                        <Route path="/products" element={<h1>products page</h1>}/>
                        <Route path="/users" element={<h1>users page</h1>}/>
                    </Routes>
                    
                      
                </div>
               
            </div>
           
        )
    }
