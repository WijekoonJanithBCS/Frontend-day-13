import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


export default function UserData() {
    const [user, setUser] = useState(null);
    const [state, setState] = useState("me")

    useEffect(
        () => {
            const token = localStorage.getItem("token");
            if (token != null) {
                axios.get(import.meta.env.VITE_API_URL + "/users/profile", {
                    headers: {
                        "Authorization": `Bearer ${token}`
                    }
                }).then(
                    (response) => {
                        console.log("USER PROFILE:", response.data);
                        setUser(response.data);
                    })
            }
        }, []       
    )

    return(
        <>
        {user==null ? <div className="w-[100px] h-[50px] flex justify-center items-center gap-3">
            <Link to="/login" className="text-white font-bold">Login</Link>
            <Link to="/register" className="text-white font-bold">Register</Link>
           
        </div> : 
        <div className="w-[210px] h-[65px] flex justify-end gap-1 bg-white">
            <img src="/UserImage.png" className="w-[40px] h-[65px] border-1"/>
            <span className="text-blue-500 pt-5">Welcome -</span>
            <select value={state} onChange={
                (e)=>{
                    setState(e.target.value)
                    //console.log(e.target.value)
                    if(e.target.value=="orders"){
                        window.location.href="/my-orders"
                    }
                    if(e.target.value=="settings"){
                        window.location.href="/settings"
                    }
                    if(e.target.value=="logout"){
                        localStorage.removeItem("token")
                        window.location.href="/login"
                    }
                    setstate("me")

                }
            } className=" text-blue-500">
                <option value="me" >{user.firstName}</option>
                <option value="orders" className="text-blue-400 p-2">My order</option>
                <option value="settings" className="text-blue-400 p-2">Settings</option>
                <option value="logout" className="text-blue-400 p-2">Log out</option>
            </select>
        </div>}
        </>
        
    )
}