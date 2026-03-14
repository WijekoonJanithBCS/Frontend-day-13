import { useState } from "react";
import { FaCirclePlus } from "react-icons/fa6";
import { Link } from "react-router-dom";

const sampleProducts = [
   
        {
            productId: "ID001",
            name: "Dell Inspiron 15",
            description: "15.6 inch laptop with Intel i5 processor and 8GB RAM",
            altNames: ["Dell Laptop", "Inspiron Laptop", "Dell i5"],
            price: 185000,
            labelledPrice: "200000",
            category: "Laptops",
            image: "https://picsum.photos/200/300?random=1",
            isVisible: true,
            brand: "Dell",
            model: "Inspiron 15"
        },
        {
            productId: "ID002",
            name: "HP Pavilion Desktop",
            description: "Powerful desktop for office and home use",
            altNames: ["HP Desktop", "Pavilion PC"],
            price: 145000,
            labelledPrice: "160000",
            category: "Desktops",
            image: "https://picsum.photos/200/300?random=2",
            isVisible: true,
            brand: "HP",
            model: "Pavilion"
        },
        {
            productId: "ID003",
            name: "Logitech Wireless Mouse",
            description: "Ergonomic wireless mouse with long battery life",
            altNames: ["Wireless Mouse", "Logitech Mouse"],
            price: 4500,
            labelledPrice: "5500",
            category: "Accessories",
            image: "https://picsum.photos/200/300?random=3",
            isVisible: true,
            brand: "Logitech",
            model: "M185"
        }
];

export default function AdminProductsPage(){
    const [products, setProducts] = useState(sampleProducts);

    return(
        <div className="w-full h-full overflow-y-scroll ">
            {
                    products.map(
                        (item, index)=>{
                            console.log(item);
                            console.log(index);
                            return <h1 key={index}>{item.productId}</h1>
                        }
                    )
                }
            <Link to="/admin/add-product" className="text-white bg-blue-500 w-[50px] h-[50px] flex justify-center items-center text-2xl rounded-full fixed bottom-10 right-15">
                
                
                <FaCirclePlus/>
            </Link>
        </div>
    )
}