import { Link } from "react-router-dom";

export default function Header(){
    return(
        <header className="w-full h-[50px] bg-blue-400 flex justify-center items-center relative">
            <div className="h-full flex justify-center items-center absolute left-10">
                 <img src="/Logo.jpg" className=" h-[30px] "/>
                 <h1 className="text-white text-2xl font-bold ml-2">i-computers</h1>
            </div>
            <div className="h-full flex justify-center items-center">
                <Link to="/" className="text-white mx-5 hover:border-b-3 font-bold">Home</Link>
                <Link to="/about" className="text-white mx-5 hover:border-b-3 font-bold">About</Link>
                <Link to="/contact" className="text-white mx-5 hover:border-b-3 font-bold">Contact</Link>
                <Link to="/products" className="text-white mx-5 hover:border-b-3 font-bold">Products</Link>
            </div>
           

        </header>
    )
}