import { useSelector } from "react-redux";
import { RootState } from "../../Redux/store";
import { Link } from "react-router-dom";

const ProductsInfo = () => {
    const Data=useSelector((state:RootState)=>state.addCardSlice.products)
    // const prices: number[] = Data.map(product => product.Price);
    const totalAmount: string = (Data || []).reduce((sum, item) => sum + (Number(item.TotalPrice) || 0), 0).toFixed(2);

   
    return (
        <div className="md:h-screen w-full bg-slate-700 text-white h-auto md:sticky top-0 md:top-16 overflow-y-scroll">
            <div className="text-center pt-20 pb-10 md:pb-0">
                <h1 className="text-[20px] font-semibold">Total Price: <span className="text-red-700">${totalAmount}</span></h1>
                <h1 className="text-[18px] font-semibold">Total Products: {Data.length}</h1>
                <Link to="/order"><button                
                className="px-2 border-2 font-semibold bg-white active:bg-black text-black active:text-white border-orange-500 rounded-full">Order Now</button></Link>
            </div>

        </div>
    );
};

export default ProductsInfo;