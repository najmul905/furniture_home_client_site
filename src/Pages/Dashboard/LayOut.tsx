import { Outlet } from "react-router-dom";
import SideBar from "./SideBar/SideBar";

const LayOut = () => {
    return (
        <div className="flex gap-2  ">
            <div className="pt-20 sticky top-0 pe-4  bg-slate-700 h-screen "><SideBar></SideBar></div>
            <div className="flex-1 mx-20 mb-10"><Outlet></Outlet></div>
        </div>
    );
};

export default LayOut;