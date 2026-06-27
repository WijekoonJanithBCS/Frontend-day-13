import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";

export default function ForgotPasswordPage(){
    const [email, setEmail] = useState("");
    const [otpSend, setOtpSend] = useState(false);
    const [otp, setOtp] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const Navigate = useNavigate();

    async function sendOtp(){
        setOtpSend(true)
        try{
            await axios.post(import.meta.env.VITE_API_URL + "/users/send-otp", {email: email})
            toast.success("OTP sent to your email. Please check your inbox.");
        }
        catch(err){
            toast.error(err?.response?.data?.message || "failed to send OTP");
            setOtpSend(false);
        }
    }
    async function resetPassword(){
        //const navigate = useNavigate();
        console.log("Reset button clicked");
        
        if(newPassword !== confirmPassword){
            toast.error("Passwords do not match");
            
        }
        try{
            await axios.post(import.meta.env.VITE_API_URL + "/users/verify-otp", {email: email, otp: otp, newPassword: newPassword})
            toast.success("Password reset successful. Please login with your new password.");
            Navigate("/login")
        }
        catch(err){
            toast.error(err?.response?.data?.message || "failed to reset password");
        }
    }
    return(
        //i need box with enter your email and send OTP button and when user click on send OTP button 
        <div className="w-full h-screen bg-[url('/img02.jpg')] bg-cover bg-center no-repeat flex">
           
            {!otpSend && <div className="w-[100%] h-full flex flex-row justify-center items-center ">
                <div className="bg-white w-[400px] h-[300px] rounded-lg flex flex-col justify-center items-center">
                    <h3 className="text-2xl text-blue-600">Forgot passsword  ? Dont worry .....</h3>
                    <input type="email" placeholder="Email" 
                        onChange={(e)=>{
                            setEmail(e.target.value)
                        }
                        } className="m-5 p-3 w-[90%] h-[40px] rounded-lg border border-blue-600"/>
                    <button onClick={sendOtp} className="m-5 p-3 w-[90%] h-[50px] rounded-lg bg-blue-400 hover:bg-blue-500 text-white font-bold">SEND OTP</button>
                </div>
            </div>}

            {
                otpSend && <div className="w-[100%] h-full flex flex-row justify-center items-center ">
                <div className="bg-white w-[400px] h-[400px] rounded-lg flex flex-col justify-center items-center">
                    <h3 className="text-2xl text-blue-600">Enter OTP and new password</h3>
                    <input type="text" placeholder="OTP"
                        onChange={(e)=>{
                            setOtp(e.target.value)
                        }}
                        className="m-5 p-3 w-[90%] h-[40px] rounded-lg border border-blue-600"/>
                    <input type="password" placeholder="New Password"
                        onChange={(e)=>{
                            setNewPassword(e.target.value)
                        }}
                        className="m-5 p-3 w-[90%] h-[40px] rounded-lg border border-blue-600"/>
                    <input type="password" placeholder="Confirm Password"
                        onChange={(e)=>{
                            setConfirmPassword(e.target.value)
                        }}
                        className="m-5 p-3 w-[90%] h-[40px] rounded-lg border border-blue-600"/>
                       
                    <button onClick={resetPassword} className="m-5 p-3 w-[90%] h-[50px] rounded-lg bg-blue-400 hover:bg-blue-500 text-white font-bold">RESET PASSWORD</button>
                </div>
            </div>}

        </div>
    )
}
