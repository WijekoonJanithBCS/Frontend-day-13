import { useState } from "react";

export default function ViewOrderModelInfo(props){

    const [isVisible, setIsVisible] = useState(false);  
    const order= props.order;
    return(
        <>
            <button className="bg-blue-400 text-white px-3 py-2 rounded-2xl cursor-pointer" onClick= {()=>{
            setIsVisible(true);
            }}>View Details</button>
            {
                isVisible && (
                    <div className="fixed inset-0 w-full h-screen bg-black/50 flex justify-center items-center z-50 ">
                        <div className="w-[500px] h-[550px] bg-white rounded-2xl p-5 flex flex-col">
                           
                           
                            
                              
                            <div className=" bg-blue-400 w-full h-[150px] rounded-md px-1 py-3 ">
                                <div className="flex flex-col px-0 py-1 items-start">
                                    <h1 className="text-xl font-bold text-white "> {order.orderId}</h1>
                                    <h1 className="text-sm font-bold text-white "> {new Date(order.date).toLocaleDateString()}</h1>
                                    <h1 className="text-sm font-bold text-white ">{order.firstName} {order.lastName}</h1>
                                
                                    <h1 className="text-sm font-bold text-white "> {order.email}</h1>
                                    
                                
                                    <h1 className="text-sm font-bold text-white "> {order.totalAmount.toFixed(2)}</h1>
                                    <h1 className="text-sm font-bold text-white "> {order.postalCode}</h1>                               
                                </div>
                                
                            </div>
                            {/* "productId": "ID009",
                            "name": "phone",
                            "labelledPrice": 1200,
                            "price": 1000,
                            "image": "https://ozebosikoowxwswoeutq.supabase.co/storage/v1/object/public/images/1774252291324pexels-phone-1869510_1920.jpg",
                            "qty": 5,
                            "_id": "69f6f66aa4eb9cef5cae7f62"
                            <div className="flex-1 mt-5 overflow-y-scroll"> */}
                            <div className="flex-1 mt-5 overflow-y-scroll">
                                {
                                    order.items.map((item)=>{
                                        return(
                                            <div className="w-full h-[80px] bg-blue-300 mb-3 rounded-md flex items-center gap-5 px-3">
                                                <img src={item.image} alt={item.name} className="w-[60px] h-[60px] object-cover rounded-md border-1"/>
                                                <div className="flex-1 border-1 rounded-md">
                                                    <h1 className="text-sm font-bold">{item.name}</h1>
                                                    <h1 className="text-sm font-bold">Price: {item.price.toFixed(2)}</h1>
                                                    <h1 className="text-sm font-bold">Qty: {item.qty}</h1>
                                                </div>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                            <button 
                                onClick={()=>{setIsVisible(false)}} className="bg-blue-400 text-white px-4 py-2 rounded-md w-full cursor-pointer">
                                Close
                            </button>
                               


                        </div>
                    </div>
                    
                    
                )

            }
        </>
        
    )
        
}