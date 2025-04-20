import { NavLink} from "react-router-dom";

const SideBar = () => {
    return (
        <div className="">
            <ul className="pl-5 space-y-2 ">
                <li               
                className=" text-[13px] font-semibold cursor-pointer  "><NavLink  to="/dashboard" end  className={({isActive})=>isActive ?"text-blue-500":"text-gray-500 hover:text-blue-400"}> Admin Home</NavLink> </li>
                <li className=" text-[13px] font-semibold cursor-pointer "><NavLink to="allUsers"  className={({isActive})=>isActive?"text-blue-500":"text-gray-500 hover:text-blue-400"}> All Users</NavLink> </li>
                <li className=" text-[13px] font-semibold cursor-pointer 0"><NavLink to="addProducts" className={({isActive})=>isActive?"text-blue-500":"text-gray-500 hover:text-blue-400"}> Add Products</NavLink> </li>
                <li className=" text-[13px] font-semibold cursor-pointer "><NavLink to="addLatestProducts" className={({isActive})=>isActive?"text-blue-500":"text-gray-500 hover:text-blue-400"}>Add Latest Products</NavLink> </li>  
            </ul>
        </div>
    );
};

export default SideBar;