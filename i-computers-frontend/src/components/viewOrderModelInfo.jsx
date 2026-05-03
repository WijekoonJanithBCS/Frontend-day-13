import { useState } from "react";

export default function ViewOrderModelInfo(props){

    const [isVisible, setIsVisible] = useState(false);  
    const order= props.order;
    return(
        <>
            <button className="bg-blue-400 text-white px-3 py-2 rounded-2xl cursor-pointer" onClick= {()=>{
            setIsVisible(true);
            }}>View Details</button>
            {
                isVisible && (
                    <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50 w-[900px] h-[500px] flex justify-center items-center"></div>
                )

            }
        </>
        
    )
}