import { useState } from "react";

export default function ImageSlideShow(props){
    const images = props.images;
    const [activeImage , setActiveImage] = useState(0);

   
    return(
        <div className="w-[400px] h-[450px] rounded-4xl overflow-hidden shadow-lg flex flex-col bg-white border-4 border-blue-600 mt-10 ml-5">
            {/* Main Image */}
            <img 
                src={images[activeImage]} 
                className="h-[350px] w-full object-cover transition-transform duration-300 hover:scale-105"
            />

            {/* Thumbnails */}
            <div className="w-full h-[100px] flex flex-row px-2 py-2 gap-3 justify-center overflow-x-auto bg-white">
                {
                    images.map((img, index) => (
                        <img 
                            onClick={() => setActiveImage(index)}
                            key={index} 
                            src={img} 
                            className={`w-[80px] h-[80px] object-cover rounded-lg cursor-pointer transition-transform duration-200 border-2 ${
                                activeImage === index 
                                    ? "border-blue-500 scale-105" 
                                    : "border-gray-300 hover:scale-105"
                            }`}
                            
                        />
                    ))
                }
            </div>
        </div>
    )
}