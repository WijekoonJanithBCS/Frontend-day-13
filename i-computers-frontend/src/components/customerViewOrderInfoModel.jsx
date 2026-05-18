//import axios from "axios";
import { useState } from "react";
//import toast from "react-hot-toast";
export default function CustomerViewOrderInfoModel(props){

    const [isVisible, setIsVisible] = useState(false);  
    const order= props.order;

    
    return(
        <>
            <button className="bg-blue-400 text-white px-1 py-2 rounded-2xl cursor-pointer w-2/3" onClick= {()=>{
            setIsVisible(true);
            }}>View Details</button>
            {
                isVisible && (
                    <div className="fixed inset-0 w-full h-screen bg-black/50 flex justify-center items-center z-50 ">
                        <div className="w-[500px] h-[580px] bg-white rounded-2xl p-2 flex flex-col">
                           
                           
                            
                              
                            <div className=" bg-blue-400 w-full h-[165px] rounded-md px-1 py-1">
                                <div className="flex flex-col px-0 py-1 items-start">
                                    <h1 className="text-xl font-bold text-white "> {order.orderId}</h1>
                                    <h1 className="text-sm font-bold text-white "> {new Date(order.date).toLocaleDateString()}</h1>
                                    <h1 className="text-sm font-bold text-white ">{order.firstName} {order.lastName}</h1>
                                
                                    <h1 className="text-sm font-bold text-white "> {order.email}</h1>
                                    
                                
                                    <h1 className="text-sm font-bold text-white "> {order.totalAmount.toFixed(2)}</h1>
                                    <h1 className="text-sm font-bold text-white "> {order.postalCode}</h1> 
                                    <h1 className="text-sm font-bold text-white ">status : {order.status}</h1>
                                    <div className="flex items-center gap-5 mb-1">
                                        
                                    
                                    {/* RIGHT: NOTES */}
                                    
                                        {/* <textarea
                                        value={notes}
                                        onChange={(e) => setNotes(e.target.value)}
                                        className="border border-white rounded p-1 h-8 mb-2 w-[250px]"
                                        placeholder="Write note..."
                                        />
                                        <p>{order.notes}</p>

                                        <button className=" bg-white text-blue-500 px-1 py-1 rounded mb-2 font-bold">
                                            Add Note
                                        </button>
                                    </div> */}
                                    </div>
                                    
                                    
                                    <div className="flex items-center gap-2"> 
                                                             
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
                            <div className="flex-1 mt-2 overflow-y-scroll h-[370px]">
                                
                                {
                                    order.items.map((item)=>{
                                        return(
                                            <div className="w-full h-[80px] bg-blue-300 mb-1 rounded-md flex items-center gap-5 px-3 ">
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
                                <button
                                    className="bg-blue-400 w-full text-white px-4 py-1 rounded-sm cursor-pointer font-bold mt-3 sticky bottom-0"
                                    onClick={() => setIsVisible(false)}
                                >
                                    Close
                                </button>
                            </div>
                           
                           
                           
                        </div>       


                        </div>
                    </div>
                    
                    
                )

            }
        </>
        
    )
        
    
}