import { useParams } from "react-router-dom";

export default function Overview(){

    const params = useParams();

    return(
        <div className="w-full min-h-screen flex justify-center items-center">
            <div >overview page</div>
        </div>
    )
    
}