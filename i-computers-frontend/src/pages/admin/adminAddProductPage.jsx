import { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export default function AdminAddProductPage(){
    const [name, setName] = useState("");
    const [productId, setProductId] = useState("");
    const [description, setDescription] = useState("");
    const [altNames, setAltNames] = useState("");
    const [price, setPrice] = useState("");
    const [labelledPrice, setLabelledPrice] = useState("");
    const [category, setCategory] = useState("Others");
    const [brand, setBrand] = useState("Standard");
    const [model, setModel] = useState("");
    const [isVisible, setIsVisible] = useState(true);
    const navigate = useNavigate();

    async function handleAddProduct(){
        try{
            const token = localStorage.getItem("token");
            if(token==null){
                toast.error("please login to add products");
                window.location.href= "/login";
                return;
            }
            await axios.post(import.meta.env.VITE_API_URL + "/products", {
                productId: productId,
                name: name,
                description: description,
                price: price,
                labelledPrice: labelledPrice,
                altNames: altNames.split(","),
                category: category,
                brand: brand,
                model:model,
                isVisible: isVisible,
            },{
                headers: {
                    Authorization: "Bearer " + token
                }
            })
            toast.success("product added successfully");
            //redirect to admin/product page
            navigate("/admin/pdoducts")

        }catch(err){
            //toast.error("failed to add product");
            toast.error(err?.response?.data?.message || "failed to add product");
            return;
        }
    }
    return(
        <div className="w-full max-h-full flex flex-wrap overflow-y-scroll">
            <h1 className="w-full font-bold mb-4 text-3xl sticky top-0 bg-white">Add New Product</h1>
            <div className="w-[50%] h-[100px] flex flex-col">
                <label className="text-xl font-bold ml-2">Product ID : </label>
                <input value={productId} onChange={(e)=>{setProductId(e.target.value)}}type="text" placeholder="Ex : ID001" className="border-3 border-blue-400 rounded-[10px] h-[50px] m-2 p-2 focus:outline-none"/>
            </div>
            <div className="w-[50%] h-[100px] flex flex-col">
                <label className="text-xl font-bold ml-2">Product Name : </label>
                <input value={name} onChange={(e)=>{setName(e.target.value)}}type="text" placeholder="Ex : Laptop" className="border-3 border-blue-400 rounded-[10px] h-[50px] m-2 p-2 focus:outline-none"/>
            </div>
            <div className="w-full h-[150px] flex flex-col">
                <label className="text-xl font-bold ml-2">Description : </label>
                <textarea value={description} onChange={(e)=>{setDescription(e.target.value)}}type="text" placeholder="Description" className="border-3 border-blue-400 rounded-[10px] h-[100px] m-2 p-2 focus:outline-none"/>
            </div>
            <div className="w-[100%] h-[100px] flex flex-col">
                <label className="text-xl font-bold ml-2">Alternative Names ( Comma Seperated ) : </label>
                <input value={altNames} onChange={(e)=>{setAltNames(e.target.value)}}type="text" placeholder="Ex : Laptop, Camera, HDD" className="border-3 border-blue-400 rounded-[10px] h-[50px] m-2 p-2 focus:outline-none"/>
            </div>
            <div className="w-[50%] h-[100px] flex flex-col">
                <label className="text-xl font-bold ml-2">Price : </label>
                <input value={price} onChange={(e)=>{setPrice(e.target.value)}}type="text" placeholder="Ex : 10000" className="border-3 border-blue-400 rounded-[10px] h-[50px] m-2 p-2 focus:outline-none"/>
            </div>
            <div className="w-[50%] h-[100px] flex flex-col">
                <label className="text-xl font-bold ml-2">Labelled Price : </label>
                <input value={labelledPrice} onChange={(e)=>{setLabelledPrice(e.target.value)}}type="text" placeholder="Ex :" className="border-3 border-blue-400 rounded-[10px] h-[50px] m-2 p-2 focus:outline-none"/>
            </div>
            <div className="w-[25%] h-[100px] flex flex-col">
                <label className="text-xl font-bold ml-2">Category : </label>
                <select value={category} onChange={(e)=>{setCategory(e.target.value)}} type="text" className="border-3 border-blue-400 rounded-[10px] h-[50px] m-2 p-2 focus:outline-none">
                    <option value="Others">Others</option>
                    <option value="Laptops">Laptops</option>
                    <option value="Desktops">Desktops</option>
                    <option value="Components">Components</option>
                    <option value="Accessories">Accessories</option>
                    <option value="Pheripherals">Pheripherals</option>
                </select>
            </div>
             <div className="w-[25%] h-[100px] flex flex-col">
                <label className="text-xl font-bold ml-2">Brand : </label>
                <select value={brand} onChange={(e)=>{setBrand(e.target.value)}} type="text" className="border-3 border-blue-400 rounded-[10px] h-[50px] m-2 p-2 focus:outline-none">
                    <option value="Generic">Generic</option>
                    <option value="Dell">Dell</option>
                    <option value="HP">HP</option>
                    <option value="Asus">Asus</option>
                    <option value="Acer">Acer</option>
                    <option value="Apple">Apple</option>
                </select>
            </div>
            <div className="w-[25%] h-[100px] flex flex-col">
                <label className="text-xl font-bold ml-2">Model : </label>
                <input value={model} onChange={(e)=>{setModel(e.target.value)}} type="text" placeholder="Ex: Inspiration" className="border-3 border-blue-400 rounded-[10px] h-[50px] m-2 p-2 focus:outline-none"/>
            </div>
            <div className="w-[25%] h-[100px] flex flex-col">
                <label className="text-xl font-bold ml-2">Is visible : </label>
                <select value={isVisible} onChange={(e)=>{setIsVisible(e.target.value)}}  className="border-3 border-blue-400 rounded-[10px] h-[50px] m-2 p-2 focus:outline-none">
                    <option value={true}>YES</option>
                    <option value={false}>NO</option>
                </select>
            </div>
            <div className="w-full h-[80px] bg-blue-200 sticky bottom-0 rounded-b-2xl flex justify-end items-center p-4">
                <button onClick={handleAddProduct} className="bg-blue-400 text-white font-bold px-4 py-3 rounded-[10px] hover:bg-blue-600 mr-2">Add Product</button>
                <button className="bg-blue-400 text-white font-bold px-4 py-3 rounded-[10px] hover:bg-blue-600">Cancel</button>
            </div>
            
        </div>
    )
}