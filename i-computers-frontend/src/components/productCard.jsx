import { Link } from "react-router-dom"

export default function ProductCard(props){
    const product = props.product

    return(

        <Link to={"/overview/"+product.productId} >
            <div className="w-[400px] h-[400px] m-4 p-4 rounded-lg shadow-lg bg-blue-300 overflow-hidden ">
           
                 <img src={product.images[0]} className="h-[200px] w-full object-cover rounded-lg border-2 border-black object-cover"></img>
                 <div className="h-[150px] bg-blue-200 w-full absolute-bottom border justify-center flex-col p-2 mt-2">
                    <span className="text-xs opacity-50">{product.productId}</span>
                    <h1 className="font-semibold text-lg">{product.name}</h1>
                    <h1 className="font-semibold text-lg">{product.price}</h1>
                 </div>
        </div>
           
        </Link>
        
        
       
        
        
    )
}