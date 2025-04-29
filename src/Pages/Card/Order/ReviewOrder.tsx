import { useSelector } from "react-redux";
import { RootState } from "../../../Redux/store";


const ReviewOrder = () => {
    const data=useSelector((state:RootState)=>state.addCardSlice.products)
    const SubTotalAmount: string = (data || []).reduce((sum, item) => sum + (Number(item.Price) || 0), 0).toFixed(2);
    return (
        <div className="bg-white p-4 rounded-md">
            <h1 className="uppercase text-[15px] font-semibold mb-4">1.Review your Order (<span className="text-[12px] text-slate-400">{data.length} items</span>)</h1>
            <div>
                <div className="h-72 overflow-y-scroll overflow-x-hidden">
                {data?.map(Data=>(
                    <div key={Data._id} className="flex items-center gap-4">
                        <img className="h-16 w-20 my-3" src={Data.Image} alt="" />
                        <div>
                            <h1>Name: {Data.Name}</h1>
                            <div><h1>Price: {Data.TotalPrice}</h1><h1>Quantity:{Data.Quantity}</h1></div>
                        </div>
                    </div>
                ))}
                </div>
                <h1 className="w-full border border-slate-400"></h1>
                <div>
                    <h1 className="text-[14px] font-semibold uppercase flex items-center justify-between mt-10">SubTotal: <span className="text-[#f7b054]">{SubTotalAmount}tk</span></h1>
                </div>
            </div>
        </div>
    );
};

export default ReviewOrder;