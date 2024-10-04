import { Link } from "react-router-dom";

const SideBar = () => {
    return (
        <div className="pt-20 w-[25vw] h-screen bg-slate-300">
            <ul>
                <Link to="addProducts"> <li className="text-center text-[13px] font-semibold cursor-pointer">Add Products</li></Link>
                <Link to="addLatestProducts"> <li className="text-center text-[13px] font-semibold cursor-pointer">Add Latest Products</li></Link>
            </ul>
        </div>
    );
};

export default SideBar;