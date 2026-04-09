import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast"
import ImageSlideShow from "../components/imageSlideShow";
import { addToCart, GetCart,   } from "../utils/cart";

export default function Overview(){

    const params = useParams();
    console.log(params)

    const[product, setProduct] = useState(null);

    useEffect(()=>{
        axios.get(import.meta.env.VITE_API_URL + "/products/" + params.productId)
        .then(
            (response)=>{
                setProduct(response.data.product)
            }
        ).catch((error)=>{
            toast.error("failed to fetch product details");
        })
    }, [])

   return (
    <>
      <Toaster position="top-right" reverseOrder={false} />
         <div className="w-full min-h-screen flex justify-center items-center">
        
            {
            product == null ? (
                <div>Loading.....</div>
            ) : (
                <div className="w-full h-screen bg-blue-200 flex">
                    <div className="w-[50%] h-full flex justify-center items-center">
                        <ImageSlideShow images={product.images}/>
                    </div>
                    <div className="w-[50%] h-full p-5 flex flex-col gap-5 justify-center items-center">
                        <h1 className="text-3xl font-bold mb-4">{product.name}
                            {
                                product.altNames.map((altName, index)=>{
                                    return (
                                        <span key={index} className="text-sm gray-600">|{altName}</span>
                                    )
                                })
                            }
                        </h1>
                        {
                        <p className="text-lg font-medium mb-2">
                            <span>{product.brand || ""}</span>
                            <span> - </span>
                            <span>{product.model || ""}</span>
                        </p>
                        }
                        <p className="text-sm text-gray-600 mb-2">Product ID : {product.productId}</p>
                        <p className="text-md- mb-2">{product.description}</p>
                        <p className="text-2xl font-bold mb-4">{product.price}</p>
                        {
                            product.labelledPrice &&
                            <p className="text-lg font-bold mb-2">Price : {product.labelledPrice}</p>
                        }
                        <div className="w-full h-[100px] flex justify-center items-center text-white font-bold gap-5">
                            <button className="px-4 py-3 bg-green-400 cursor-pointer rounded-lg" onClick={
                                ()=>{
                                    addToCart(product, 1);
                                    console.log("clicked");
                                    toast.success(product.name + "added to cart");
                                }
                                }>ADD TO CART</button>
                            <button className="px-4 py-3 bg-blue-500 cursor-pointer rounded-lg" onClick={
                                ()=>{
                                    console.log(GetCart());
                                }
                                }>BUY NOW</button>
                        </div>
                    </div>
                </div>
            )
            }
        </div>

    

    </>
    )
}
         
         
       