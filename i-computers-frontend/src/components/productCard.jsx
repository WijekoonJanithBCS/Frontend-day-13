export default function ProductCard(props){
    const product = props.product

    return(
        <div className="w-[400px] h-[400px] m-4 p-4 rounded-lg shadow-lg bg-blue-300 ">
           <img src={product.images[0]} className="h-[200px] w-full object-cover rounded-lg border-2 border-black"></img>
        </div>
    )
}