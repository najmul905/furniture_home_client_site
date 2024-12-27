import { Link } from "react-router-dom";

const SideBar = () => {
    return (
        <div className="">
            <ul className="pl-5">
                <Link to="/dashboard"> <li className=" text-[13px] font-semibold cursor-pointer">Admin Home</li></Link>
                <Link to="addProducts"> <li className=" text-[13px] font-semibold cursor-pointer">Add Products</li></Link>
                <Link to="addLatestProducts"> <li className=" text-[13px] font-semibold cursor-pointer">Add Latest Products</li></Link>
            </ul>
        </div>
    );
};

export default SideBar;