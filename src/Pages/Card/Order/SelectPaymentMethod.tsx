import { useState } from "react";
import { FaChevronRight, FaCreditCard } from "react-icons/fa";
import { useSelector } from "react-redux";
import { RootState, useAppDispatch } from "../../../Redux/store";
import { setConfirmValue } from "../../../Redux/features/confirmOrderSlice/confirmOrderSlice";

const SelectPaymentMethod = () => {
    const [isChecked, setIsChecked] = useState(false);
    const{DetailsConfirm}=useSelector((state:RootState)=>state.confirmOrderSlice)
    console.log(DetailsConfirm,isChecked)
    const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setIsChecked(event.target.checked);
    };

    const Data=useSelector((state:RootState)=>state.addCardSlice.products)
    // const prices: number[] = Data.map(product => product.Price);
    const SubTotalAmount: string = (Data || []).reduce((sum, item) => sum + (Number(item.TotalPrice) || 0), 0).toFixed(2);
    const totalProducts: number = (Data || []).reduce((sum, item) => sum + (Number(item.Quantity) || 0), 0);
    const totalAmount = (Number(SubTotalAmount) + 150.0).toFixed(2);

    // handel order button Control
    const dispatch=useAppDispatch()
    const handelOrder=()=>{
        dispatch(setConfirmValue(true))
    }
    return (
        <div className="bg-white py-4 rounded-md">
            <h1 className="uppercase font-semibold text-[15px] ms-4 mb-2">3. Select Payment Method</h1>
            <div className="mx-4">
                <div>
                    <button disabled={isChecked} className={`p-2 w-full border border-black flex items-center justify-between ${isChecked && " bg-slate-300 text-slate-500"}`}><span className="flex items-center font-semibold gap-2"><FaCreditCard />
                   Card </span> <span><FaChevronRight />
                   </span> </button>
                  <p className="text-center font-semibold">or</p>
                   <div className="flex items-center justify-center gap-1">
                   <input 
                   onChange={handleCheckboxChange}
                   type="checkbox" name="" id="" />
                   <label className="text-[15px] font-semibold text-green-600">Cash on Delivery</label>
                   </div>
                </div>
                <div>
                    <h1 className="text-[15px] font-semibold text-center my-4 uppercase">Order Summary</h1>
                    <div className="">
                        <h1 className="flex items-center justify-between text-[14px] font-semibold">Total Products: <span>{Data.length}</span></h1>
                        <h1 className="flex items-center justify-between text-[14px] font-semibold">Total Products Quantity: <span>{totalProducts}</span></h1>
                        <h1 className="flex items-center justify-between text-[14px] font-semibold">Subtotal Price: <span>{SubTotalAmount}tk</span></h1>
                        <h1 className="flex items-center justify-between text-[14px] font-semibold">Delivery Charge: <span>150tk</span></h1>
                        <hr className="w-full border border-black"></hr>
                        <h1 className="flex items-center justify-between text-[14px] font-semibold">Total Price: <span className="font-bold text-red-700">{totalAmount}tk</span></h1>
                    </div>

                   <div className="mt-5">
                   <button onClick={handelOrder} disabled={!isChecked ||!DetailsConfirm} className={`w-full py-1  ${!isChecked ||!DetailsConfirm ? "bg-[#c4a781]" : "bg-[#f7b054]"}  rounded-xl shadow-inner shadow-slate-800 `}>Confirm Order</button>
                   </div>
                </div>
            </div>
        </div>
    );
};

export default SelectPaymentMethod;