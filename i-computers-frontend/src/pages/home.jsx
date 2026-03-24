import { Route, Routes } from "react-router-dom";
import Header from "../components/header.jsx";
import ProductPage from "./productPage.jsx";
import Overview from "./overView.jsx";

export default function HomePage(){
    return(
        <div className="w-full min-h-screen">
            <Header/>
            <Routes>
                <Route path="/" element={<div>Home page content</div>}/>
                <Route path="/about" element={<div>About page content</div>}/>
                <Route path="/contact" element={<div>Contact page content</div>}/>
                <Route path="/products" element={<ProductPage/>}/>
                <Route path="/overview/:productId" element={<Overview/>}/>
                <Route path="/*" element={<div>404 not found</div>}/>
                
            </Routes>
        </div>
    )
}