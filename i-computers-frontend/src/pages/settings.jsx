import axios from "axios";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import UploadFile from "../utils/mediaUpload";
//import { ToastContainer, toast } from "react-toastify";

export default function SettingsPage(){
    //const [user, setUser] = useState(null)
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [file, setFile] = useState(null)
    const [existingImageUrl, setExistingImageUrl] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")

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
                        //setUser(response.data);
                        setFirstName(response.data.firstName)
                        setLastName(response.data.lastName)
                        setExistingImageUrl(response.data.image)
                    }
                ).catch(
                    ()=>{
                        localStorage.removeItem("token")
                        window.location.href="/login"
                    }
                )
            }
            else{
                window.location.href="/login"
            }
        }, []       
    )

    async function UpdateProfile(){
        const token = localStorage.getItem("token");
         const updateInfo = {
            firstName: firstName,
            lastName: lastName,
            image: existingImageUrl
         }
         if(file != null){
            updateInfo.image = await UploadFile(file)
             
         }
         const response =await axios.put(import.meta.env.VITE_API_URL + "/users/updateUserProfile", updateInfo, {
            headers: {
                "Authorization": `Bearer ${token}`
            }
        })
        localStorage.setItem("token", response.data.token)

        toast.success("Profile updated successfully")
        window.location.reload()
    }
    

    async function ChangePassword(){
        try {
        if (password !== confirmPassword) {
            toast.error("Passwords do not match");
            return;
        }

        const token = localStorage.getItem("token");

        await axios.put(
            import.meta.env.VITE_API_URL + "/users/update-password",
            { password },
            {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }
        );

        toast.success("Password changed successfully");

    } catch (error) {
        console.log(error);
        toast.error(error?.response?.data?.message || "Password change failed");
    }

    }

    return(
        <div className="w-full h-screen flex justify-center items-center flex-col bg-blue-200">
            <div className="w-[350px] h-[450px] rounded-lg overflow-hidden bg-white">
                <h1 className="text-2xl font-bold p-5 ml-4">Account settings</h1>
                <input value={firstName} onChange = {(e)=>{
                    setFirstName(e.target.value)
                }} className="w-[80%] h-[40px] p-2 border border-blue-300 rounded-lg ml-8 mb-4" placeholder="First Name"></input>
                
                <input value={lastName} onChange = {(e)=>{
                    setLastName(e.target.value)
                }} className="w-[80%] h-[40px] p-2 border border-blue-300 rounded-lg ml-8 mb-4" placeholder="Last Name"></input>
                
                <input type="file" onChange = {(e)=>{
                    setFile(e.target.files[0])
                }} className="w-[80%] h-[40px] p-2 border border-blue-300 rounded-lg ml-8 mb-4" placeholder="Image File"></input>
                
                <input type="password" value={password} onChange = {(e)=>{
                    setPassword(e.target.value)
                }} className="w-[80%] h-[40px] p-2 border border-blue-300 rounded-lg ml-8 mb-4" placeholder="Password"></input>

                <input type="password" value={confirmPassword} onChange = {(e)=>{
                    setConfirmPassword(e.target.value)
                }} className="w-[80%] h-[40px] p-2 border border-blue-300 rounded-lg ml-8" placeholder="confirmPassword"></input>

                <button onClick={UpdateProfile} className="w-100px h-[40px] bg-blue-400 text-white font-bold rounded-lg mt-5 p-2 ml-3">Update Profile</button>

                <button onClick={ChangePassword} className="w-100px h-[40px] bg-blue-400 text-white font-bold rounded-lg mt-5 p-2 ml-3">Change Password</button>
            </div>
        </div>
    )
}