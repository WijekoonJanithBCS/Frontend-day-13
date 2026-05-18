import { Link } from "react-router-dom";
import { FaCartShopping } from "react-icons/fa6";
import UserData from "./userData";

export default function Header(){
    return(
        <header className="w-full h-[80px] bg-blue-400 flex justify-center items-center relative sticky top-0">
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

            <div className="pr-5 flex  gap-2 absolute right-15 ">
                <Link to="/cart"><FaCartShopping size={30} color="white" className=" cursor-pointer"/> </Link> 

                <UserData/>
            </div>

            

        </header>
    )
}