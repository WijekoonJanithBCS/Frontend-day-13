import { useState } from "react";
import { GetCart } from "../utils/cart";



export default function Cart(){

    
    const [cart, setCart] = useState(GetCart());

    return (
        <div className="w-full h-[calc(100vh-100px)]  overflow-y-scroll">
            
               
                        
                            <div className="w-full flex justify-center items-center flex-col gap-5">
                                {
                                    cart.map(
                                        (cartItem, index) => {
                                            return (
                                                <div key={index} className="w-[600px] h-[150px] bg-blue-300 mt-5 flex flex-row rounded-lg overflow-hidden">
                                                    <img className="h-[150px] aspect-square object-cover" src={cartItem.product.image} alt={cartItem.name}/>
                                                    <div className="h-full w-[350px] p-4 flex flex-col bg-blue-200 overflow-hidden justify-evenly">
                                                        <h1 className="text-xs font-bold">{cartItem.product.productId}</h1>
                                                        <h1 className="text-xl font-bold">{cartItem.product.name}</h1>
                                                        <div className="w-[200px] h-[30px] border rounded-full overflow-hidden flex">
                                                            <button className="w-[60px] h-full flex justify-center items-center text-2xl font-bold text-black hover:bg-red-500">-</button>
                                                            <span className="w-[80px] h-full flex justify-center items-center text-2Xl font-bold text-black">{cartItem.qty}</span>
                                                            <button className="w-[60px] h-full flex justify-center items-center text-2xl font-bold text-black hover:bg-red-500">+</button>
                                                        </div>
                                                    </div>
                                                </div>
                                            )
                                        }
                                    )
                                }
                            </div>
                        </div>       
                               
                
            
          
        
    )
}