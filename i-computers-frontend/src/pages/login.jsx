import { Link } from "react-router-dom";

export default function LoginPage(){
    return(
        <div className="w-full h-screen bg-[url('/img01.jpg')] bg-cover bg-center no-repeat flex">
            <div className="w-[50%] h-full"></div>
            <div className="w-[50%] h-full flex justify-center items-center ">
                <div className="bg-white w-[400px] h-[500px] rounded-lg flex flex-col justify-center items-center">
                    <input type="email" placeholder="Email" className="m-5 p-3 w-[90%] h-[40px] rounded-lg border border-blue-600"/>
                    <input type="password" placeholder="password" className="m-5 p-3 w-[90%] h-[40px] rounded-lg border border-blue-600"/>
                    <p className="w-full text-right text-blue-700 pr-5">forgot password ? <Link to="/forgot-password" className="text-blue-600 font-bold">RESET</Link></p>
                    <button className="m-5 p-3 w-[90%] h-[50px] rounded-lg bg-blue-700 text-white font-bold">LOGIN</button>
                    <button className="m-5 p-3 w-[90%] h-[50px] rounded-lg border border-blue-600 text-blue-600 font-bold">LOGIN WITH GOOGLE</button>
                    <p className="w-full text-right text-blue-700 pr-5">Dont have an account ? <Link to="/register" className="text-blue-600 font-bold">Register</Link></p>
                    
                </div>
            </div>

          

        </div>
    )
}