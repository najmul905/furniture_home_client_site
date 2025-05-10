import { NavLink} from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../../../Redux/store";
const SideBar = () => {
    const  {email,image,name}=useSelector((state:RootState)=>state.userSlice)
    return (
        <div className="">
            <div className="text-center  pb-5 flex flex-col items-center mt-5  gap-2">
            <img className="md:h-12 md:w-12 h-8 w-8 rounded-full" src={image??undefined} alt="" />
            <h1 className="text-white md:text-[15px] text-[12px] font-semibold">Name: {name}</h1>
            <h1 className="text-white md:text-[13px] text-[10px] font-semibold">Email: {email}</h1>
            </div>
            <hr />
            <ul className="pl-5 space-y-2 ">
                <li               
                className=" md:text-[13px] text-[10px] font-semibold cursor-pointer  "><NavLink  to="/dashboard" end  className={({isActive})=>isActive ?"text-blue-500":"text-white hover:text-blue-400"}> Admin Home</NavLink> </li>
                <li className=" md:text-[13px] text-[10px] font-semibold cursor-pointer "><NavLink to="allUsers"  className={({isActive})=>isActive?"text-blue-500":"text-white hover:text-blue-400"}> All Users</NavLink> </li>
                <li className=" md:text-[13px] text-[10px] font-semibold cursor-pointer 0"><NavLink to="addProducts" className={({isActive})=>isActive?"text-blue-500":"text-white hover:text-blue-400"}> Add Products</NavLink> </li>
                <li className=" md:text-[13px] text-[10px] font-semibold cursor-pointer "><NavLink to="addLatestProducts" className={({isActive})=>isActive?"text-blue-500":"text-white hover:text-blue-400"}>Add Latest Products</NavLink> </li>  
            </ul>
        </div>
    );
};

export default SideBar;