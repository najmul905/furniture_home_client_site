import { Outlet } from "react-router-dom";
import SideBar from "./SideBar/SideBar";

const Dashboard = () => {
    return (
        <div className="flex"> 
           <div className="fixed  pt-20 h-screen w-[20vw] bg-[#d6953e] border-r-2 border-black"><SideBar></SideBar></div>
           <div className="ml-[20vw] flex-grow flex items-center justify-center"> <Outlet></Outlet></div>  
        </div>
    );
};

export default Dashboard;