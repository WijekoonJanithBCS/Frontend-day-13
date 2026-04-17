import axios from "axios";
import { useState, useEffect } from "react";
import { FaCirclePlus } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { MdEdit } from "react-icons/md";

export default function AdminProductsPage(){

    const [products, setProducts] = useState([]);
    const token = localStorage.getItem("token");

    useEffect(() => {
        axios.get(import.meta.env.VITE_API_URL + "/products", {
            headers: {
                Authorization: "Bearer " + token
            }
        })
        .then((response) => {
            setProducts(response.data.products);
        })
        .catch((err) => {
            console.log("API ERROR:", err);
        });
    }, []);

    return (
        <div className="w-full h-full overflow-y-scroll bg-blue-400 pl-2">
            <h4 className="font-bold text-xl">Products</h4><br/>
            <h1>Manage your catalog at a glance</h1><br/>

            <table className="w-full table-fixed border-collapse min-w-[1100px]">
                <thead className="font-bold text-left sticky top-0 uppercase">
                    <tr className="border-b">
                        <th>Product ID</th>
                        <th>Name</th>
                        <th>Price</th>
                        <th>labelledPrice</th>
                        <th>category</th>
                        <th>images</th>
                        <th>isVisible</th>
                        <th>brand</th>
                        <th>model</th>
                        <th>Actions</th>
                    </tr>
                </thead>

                <tbody>
                    {
                        products.map((item) => (
                            <tr key={item.productId} className="text-left">
                                <td>{item.productId}</td>
                                <td>{item.name}</td>
                                <td>{item.price ? item.price.toFixed(2) : "0.00"}</td>
                                <td>{item.labelledPrice ? item.labelledPrice.toFixed(2) : "0.00"}</td>
                                <td>{item.category || "uncategorized"}</td>
                                <td>
                                    <img 
                                        src={item.images?.[0]}
                                        alt={item.name} 
                                        className="w-10 h-10 object-cover rounded ring-1"
                                    />
                                </td>
                                <td>{item.isVisible ? "visible" : "hidden"}</td>
                                <td>{item.brand}</td>
                                <td>{item.model}</td>
                                <td className="px-5 py-4">
                                    <Link to="/admin/update-product" state={item}><MdEdit /></Link>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>

            <Link to="/admin/add-product"
                className="text-white bg-blue-500 w-[50px] h-[50px] flex justify-center items-center text-2xl rounded-full fixed bottom-10 right-10">
                <FaCirclePlus/>
            </Link>
        </div>
    );
}