import { useSelector } from "react-redux";
import Sales_growth from "./AdminHome/Sales_growth";
import UsersChart from "./AdminHome/UsersChart";
import { RootState } from "../../../Redux/store";
import WeaklyTopCustomer from "./AdminHome/WeaklyTopCustomer";
import AllProductsReview from "./AdminHome/AllProductsReview";

const AdminHome = () => {
    const  {name}=useSelector((state:RootState)=>state.userSlice)

    return (
        <div className="pt-20 md:mx-10">
            <div className="mb-9">
                <h1 className="text-[24px] font-bold font-TestimonialFont mb-2">Welcome Back, {name}</h1>
                <p className="text-[14px] text-slate-700">Here whats happening in your store all time</p>
            </div>
            <div className="mb-8">
                <AllProductsReview></AllProductsReview>
            </div>
            <div className="">
                <div className="grid grid-cols-2 mb-8 gap-5 items-center">
                <UsersChart></UsersChart>
            <Sales_growth></Sales_growth> 
                </div>
                <WeaklyTopCustomer></WeaklyTopCustomer>
            </div>
           
        </div>
    );
};

export default AdminHome;