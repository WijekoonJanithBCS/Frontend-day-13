import { useState } from "react";
import getCartTotal, { addToCart, GetCart } from "../utils/cart";
import { useLocation, useNavigate } from "react-router-dom";



export default function CheckOut(){
    const location = useLocation();
    const [cart, setCart] = useState(location.state || []);
    const navigate = useNavigate();

    if(location.state == null){
        navigate("/products");
    }

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
                                                            <button onClick={ () => {
                                                                    const newCart = [...cart]

                                                                    newCart[index].qty = newCart[index].qty-1
                                                                    if(newCart[index.qty <= 0]){
                                                                        newCart.splice(index,1)

                                                                    }
                                                                    setCart(newCart)   
                                                                    
                                                                }}className="w-[60px] h-full flex justify-center items-center text-2xl font-bold text-black hover:bg-red-500"
                                                                >-</button>
                                                            <span className="w-[80px] h-full flex justify-center items-center text-2Xl font-bold text-black">{cartItem.qty}</span>
                                                            <button className="w-[60px] h-full flex justify-center items-center text-2xl font-bold text-black hover:bg-red-500"
                                                            onClick={ ()=> {
                                                                const newCart = [...cart];
                                                                newCart[index].qty = newCart[index].qty + 1;
                                                                setCart(newCart);
                                                                
                                                            }
                                                            }>+</button>
                                                        </div>
                                                    </div>
                                                    <div className="w-[170px] h-full bg-blue-400 flex flex-col justify-center items-end pr-2">
                                                        <span className="text-md font-bold text-white mt-3">{cartItem.product.price}</span>
                                                        {
                                                            <span className="text-lg text-black font-bold ">
                                                                Total: {cartItem.product.price * cartItem.qty}
                                                            </span>
                                                        }
                                                    </div>
                                                </div>
                                            )
                                        }
                                    )
                                }
                                
                                <div className="bg-blue-300 w-[600px] h-[125px] sticky bottom-0 rounded-2xl flex py-8">
                                    <button className="bg-blue-500 text-white px-4 py-3 font-bold rounded-lg ml-5 hover-bg-accent/80">Buy Now</button>
                                    <span className="text-2xl font-bold text-black absolute right-5 border-b">TOTAL LKR. {getCartTotal(cart)}</span>

                                </div>
                            </div>
                        </div>       
                               
                
            
          
        
    )
}