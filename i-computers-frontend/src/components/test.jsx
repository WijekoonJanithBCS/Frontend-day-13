import { useState } from "react"

export default function TestPage(){
   const [count, setCount] = useState(10)
    return(
        <div className="w-full min-h-screen bg-red-300 flex justify-center items-center">
            <div className="w-[300px] h-[300px] bg-white flex flex-col justify-center items-center">
                <h1 className="text-5xl">{count}</h1>
                <div className="w-70 h-[50px] bg-yellow-200 border-2 border-blue-600 flex justify-center items-center gap-2">
                    <button onClick={()=>{
                        setCount(-1)
                        }
                    } className="w-[100px] h-[45px] bg-red-500 text-white">Decrement</button>
                    <button onClick={()=>{
                        setCount(+1)
                        }
                    }className="w-[100px] h-[45px] bg-green-500 text-white">Increment</button>
                </div>

            </div>
        </div>
    )
}