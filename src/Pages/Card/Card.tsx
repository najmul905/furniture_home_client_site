// import { useSelector } from "react-redux";
// import { RootState } from "../../Redux/store";
import ProductsDetails from "./ProductsDetails";
import ProductsInfo from "./ProductsInfo";


const Card = () => {
    // const data=useSelector((state:RootState)=>state.addCardSlice.products)
    return (
        <div className="">
          <div className="grid md:grid-cols-3 grid-cols-1 px-2 gap-y-5 md:gap-y-0 md:gap-4">
          <div className="col-span-2"><ProductsDetails></ProductsDetails></div>
          <div><ProductsInfo></ProductsInfo></div>
          </div>
        </div>
    );
};

export default Card;