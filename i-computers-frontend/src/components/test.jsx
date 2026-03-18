import { useState } from "react";

export default function Test(){

    const [files, setFile] = useState(null);

    async function uploadFile(){
        try{
            const url = await uploadFile(files)
            // here you can call your real upload function later
            console.log(files);
        }catch(err){
            console.log("upload files");
        }
    }

    return(
        <div className="w-full h-screen bg-yellow-300 flex justify-center items-center">
            
            <input 
                type="file" 
                onChange={(e)=>{
                    setFile(e.target.files[0]);
                }}
            />

            <button 
                onClick={uploadFile} 
                className="w-[100px] h-[40px] bg-blue-700 text-white rounded-2xl"
            >
                Upload image
            </button>

        </div>
    );
}