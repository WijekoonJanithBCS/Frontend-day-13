import axios from "axios";
import { use, useEffect, useState } from "react";
import toast from "react-hot-toast";
import ViewOrderModelInfo from "../../components/viewOrderModelInfo.jsx";

export default function AdminOrdersPage() {

    const [orders, setOrders] = useState([]);
    const [pageNumber, setPageNumber] = useState(1);
    const [pageSize, setPageSize] = useState(10);
    const [totalPages, setTotalPages] = useState(0);
    const [isLoaded, setLoaded] = useState(false);

    useEffect(() => {
        if(!isLoaded){
            const token = localStorage.getItem("token");
            axios.get(import.meta.env.VITE_API_URL + "/orders/" + pageSize + "/" + pageNumber, {
                headers: {
                    Authorization: "Bearer " + token
                }
            }).then(
                (response)=>{
                    setOrders(response.data.orders);
                    setTotalPages(response.data.totalPages);
                    setLoaded(true);
                }
            )
        }},[isLoaded])
    
    return(
        <div className="w-full h-full overflow-y-scroll bg-blue-300 pl-2">
            <h4 className="font-bold text-xl">Products</h4><br/>
            <h1>Manage your Orders at a glance</h1><br/>

            {isLoaded ? (
                <table className="w-full table-fixed border-collapse min-w-[1200px]">

                    <thead>
                        <tr className="border-b bg-gray-100 text-text-center uppercase text-sm overflow-y-scroll">
                            <th className="p-2">Order ID</th>
                            <th className="p-2">Customer Name</th>
                            <th className="p-2">Email</th>
                            <th className="p-2">Date</th>
                            <th className="p-2">Total Amount</th>
                            <th className="p-2">Status</th>
                            <th className="p-2">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        
                            {orders.map((order) => (
                                
                                <tr key={order.orderId} className="text-center border-secondary/10">
                                    <td className="px-1 py-3 text-center">{order.orderId}</td>
                                    <td className="px-1 py-3">{order.firstName +" "+ order.lastName}</td>
                                    <td className="px-1 py-3">{order.email}</td>
                                    <td className="px-1 py-3 text-center">{new Date(order.date).toLocaleDateString()}</td>
                                    <td className="px-1 py-3 text-center">{order.totalAmount.toFixed(2)}</td>
                                    <td className="px-1 py-3 text-center">{order.status}</td>
                                    <td className="px-1 py-3 text-center">
                                        {/* <button className="bg-blue-500 text-white px-4 py-2 rounded">View</button> */}
                                        <ViewOrderModelInfo order={order}/>

                                    </td>
                                </tr>
                            ))}
                                 
                                    
                    </tbody>

    

                </table>
            ) : (
                <div className="w-full h-full flex justify-center items-center">
                    <h1 className="text-2xl font-bold">Loading...</h1>
                </div>
            )}
            <div className="w-[1150px] absolute botom-5 left h-[40px] flex justify-center items-center ">
                <div className="w-[500px] h-full bg-white rounded-full items-center  justify-between flex items-center px-5  ">
                    <button className="bg-blue-400 text-white p-1 rounded-md cursor-pointer w-[100px] "onClick={()=>{
                        if(pageNumber > 1){
                            setPageNumber(pageNumber - 1);
                            setLoaded(true);
                        }
                        else{
                            toast.error("Already on the first page");
                        }
                    }}>Previous</button>
                    <span className="text-sm text-blue-500 w-[100px] flex justify-center items-center">
                        Page {pageNumber} of {totalPages}
                    </span>
                    <button className="bg-blue-400 text-white p-1 rounded-md cursor-pointer w-[100px]" onclick={()=>{
                        if(pageNumber < totalPages){
                            setPageNumber(pageNumber + 1);
                            setLoaded(true);
                        }
                        else{
                            toast.error("Already on the last page");
                        }
                    }}>Next</button>

                    <select value ={pageSize} onChange={(e)=>{
                        setPageSize(parseInt(e.target.value));//in html 3,5,10 selected values are in string
                        setLoaded(true);
                    }}>
                        <option value={1}>1 per page</option>
                        <option value={5}>5 per page</option>
                        <option value={8}>8 per page</option>
                    </select>
                    
                </div>

            </div>
                
                    
                    
        </div>
    )
        
}



