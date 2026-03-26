import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import toast from "react-hot-toast"
import ImageSlideShow from "../components/imageSlideShow";

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
        <div className="w-full min-h-screen flex justify-center items-center">
            {
            product == null ? (
                <div>Loading.....</div>
            ) : (
                <div className="w-full h-screen bg-blue-200 flex">
                    <div className="w-[450px] h-full">
                        <ImageSlideShow images={product.images}/>
                    </div>
                    <div className="w-[500] h-full border"></div>
                </div>
            )
            }
        </div>
);
    
}