import { Outlet } from "react-router-dom";
import SideBar from "./SideBar/SideBar";
import { BsThreeDotsVertical } from "react-icons/bs";

const LayOut = () => {
    return (
        <div className="">
          <div className="">
          <BsThreeDotsVertical />
          </div>

        <div className="flex gap-2  ">
            <div className=" md:sticky fixed top-0  md:w-[15vw] w-[140px] z-10 md:z-0 pt-10 bg-slate-700 h-screen"><SideBar></SideBar></div>
            <div className="flex-1  mb-10 "><Outlet></Outlet></div>
        </div>
        </div>
    );
};

export default LayOut;