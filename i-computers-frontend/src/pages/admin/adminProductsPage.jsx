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
        <div className="w-full h-full overflow-y-scroll bg-blue-400 pl-2">
            <h4 className="font-bold text-xl">Products</h4><br/>
            <h1>Manage your catalog at a glance</h1><br/>
            {
                    products.map(
                        (item, index)=>{
                            //console.log(item);
                            //console.log(index);
                            //return <h1 key={index}>{item.productId}</h1>
                        }
                    )
                }

                <table className="w-full table-fixed border-collapse min-w-[1100px]">
                    <thead className="font-bold text-align: left-0 sticky top-0 uppercase"><br/>
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
                        </tr>
                    </thead>
                    <tbody>
                        
                    {/* <tr>
                        <td>ID-001</td>
                        <td>computer</td>
                        <td>1000</td>
                        <td>1200</td>
                        <td>sample category</td>
                        <td><img src="https://picsum.photos/id/5/367/267"></img></td>
                        <td>visible</td>
                        <td>sample brand</td>
                        <td>sample model</td>
                    </tr> */}
                    {
                        products.map(
                            (item)=>{
                                return (
                                    <tr className="text-align: left-0 ">
                                        <td>{item.productId}</td>
                                        <td>{item.name}</td>
                                        <td>{item.price.toFixed(2)}</td>
                                        <td>{item.labelledPrice}</td>
                                        <td>{item.category || "uncatggorized"}</td>
                                        <td><img src={item.image} alt={item.name} className="w-10 h-10 object-cover rounded ring-1"/></td>
                                        <td>{item.isVisible ? "visible" : "hidden"}</td>
                                        <td>{item.brand}</td>
                                        <td>{item.model}</td>
                                    </tr>
                                    
                                )
                            }
                        )
                    }
                        
                    </tbody>
                </table>

            <Link to="/admin/add-product" className="text-white bg-blue-500 w-[50px] h-[50px] flex justify-center items-center text-2xl rounded-full fixed bottom-10 right-15">
                
                
                <FaCirclePlus/>
            </Link>
        </div>
    )
}