import { useSelector } from "react-redux";
import { RootState } from "../../Redux/store";
import ProductsDetails from "./ProductsDetails";
import ProductsInfo from "./ProductsInfo";


const Card = () => {
    const data=useSelector((state:RootState)=>state.addCardSlice.products)
    console.log(data)
    return (
        <div className="pt-20">
          <h1>This is card page</h1>  
          <div className="grid grid-cols-3 gap-4">
          <div className="col-span-2"><ProductsDetails></ProductsDetails></div>
          <div><ProductsInfo></ProductsInfo></div>
          </div>
        </div>
    );
};

export default Card;