import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";

export default function LoginPage(){
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate()

    function login(){
        console.log(email)
        console.log(password)
        axios.post(import.meta.env.VITE_API_URL + "/users/login", {
            email: email,
            password: password
        }).then((response)=>{
            console.log(response)
            localStorage.setItem("token", response.data.token)
            localStorage.getItem("token")

            if(response.data.role=="admin"){
               
                navigate("/admin/")
            }
            else{
                //send to home page
                navigate("/")
            }
            //alert("Login successful")
            toast.success("Login successful")
        }).catch((error)=>{
            console.log(error)
            //alert("login failed")
            toast.error(error?.response?.data?.message || "failed to login");
        })
    }

    return(
        <div className="w-full h-screen bg-[url('/img01.jpg')] bg-cover bg-center no-repeat flex">
            <div className="w-[50%] h-full"></div>
            <div className="w-[50%] h-full flex justify-center items-center ">
                <div className="bg-white w-[400px] h-[500px] rounded-lg flex flex-col justify-center items-center">
                    <input type="email" placeholder="Email" 
                        onChange={(e)=>{
                            setEmail(e.target.value)
                        }
                        } className="m-5 p-3 w-[90%] h-[40px] rounded-lg border border-blue-600"/>
                    <input type="password" placeholder="password" 
                        onChange={(e)=>
                            setPassword(e.target.value)
                        }className="m-5 p-3 w-[90%] h-[40px] rounded-lg border border-blue-600"/>
                    <p className="w-full text-right text-blue-700 pr-5">forgot password ? <Link to="/forgot-password" className="text-blue-600 font-bold">RESET</Link></p>
                    <button onClick={login} className="m-5 p-3 w-[90%] h-[50px] rounded-lg bg-blue-700 text-white font-bold">LOGIN</button>
                    <button className="m-5 p-3 w-[90%] h-[50px] rounded-lg border border-blue-600 text-blue-600 font-bold">LOGIN WITH GOOGLE</button>
                    <p className="w-full text-right text-blue-700 pr-5">Dont have an account ? <Link to="/register" className="text-blue-600 font-bold">Sign up</Link></p>
                    
                </div>
            </div>

          

        </div>
    )
}