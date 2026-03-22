import axios from "axios";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import ProductCard from "../components/productCard";

export default function ProductPage(){

    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
    if (loading) {
        axios.get(import.meta.env.VITE_API_URL + "/products")
            .then((response) => {
                setProducts(response.data.products);
                setLoading(false);
            })
            .catch((error) => {
                toast.error("failed to fetch products.please try again");
                setLoading(false);
            });
    }
}, [loading]);

return(
    <div className="flex justify-center items-centerflex-wrap">
        {
            products.map(
                (item)=>{
                    return(
                        <ProductCard product={item} key={item.productId}/>
                    )
                }
            )
        }
    </div>
)
   
}