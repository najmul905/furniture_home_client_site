import { useState } from 'react';
import { FaUserCircle } from "react-icons/fa";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { IoCloseSharp, IoReorderThreeOutline } from "react-icons/io5";
import { Link, useLocation } from 'react-router-dom'; // Import useLocation

type ValidPaths = "/" | "/shope" | "/dashboard" | "/latestFurniture";
const underlineMapping: Record<ValidPaths, string> = {
  "/": "home",
  "/shope": "shop",
  "/dashboard": "dashboard",
  "/latestFurniture": "latest",
};

const Navbar = () => {
    const location = useLocation();
    const currentPath = location.pathname as ValidPaths; 
    const underline: string = underlineMapping[currentPath] || "";
    const [isOpen,setIsOpen]=useState(false)
    const [userTogol, setUserTagol] = useState(false);

    const link = <>
        <ul className='md:flex md:items-center gap-8 text-[16px] text-white md:text-black'>
            <Link to='/'>
                <li className={`cursor-pointer hover:underline ${underline === "home" ? "underline text-[18px]" : ""}`}>Home</li>
            </Link>
            <Link to="/shope">
                <li className={`cursor-pointer hover:underline ${underline === "shop" ? "underline text-[18px]" : ""}`}>Shope</li>
            </Link>
            <Link to='/dashboard'>
                <li className={`cursor-pointer hover:underline ${underline === "dashboard" ? "underline text-[18px]" : ""}`}>Dashboard</li>
            </Link>
            <Link to='/latestFurniture'>
                <li className={`cursor-pointer hover:underline ${underline === "latest" ? "underline text-[18px]" : ""}`}>Latest Furniture</li>
            </Link>
        </ul>
    </>;

    const option = <>
        <ul className='flex items-center gap-4'>
            
            <li><AiOutlineShoppingCart className='h-6 w-6 ' /></li>
            <li onClick={() => setUserTagol(!userTogol)}>
                <FaUserCircle className='h-6 w-6' />
            </li>
            <li onClick={()=>setIsOpen(!isOpen)} className='md:hidden'>
                {
                    isOpen?
                    <IoCloseSharp className="h-6 w-6 me-3 cursor-pointer" />:
                    <IoReorderThreeOutline className="h-6 w-6 me-3 cursor-pointer" />
                }
            </li>
            <ul className={`absolute right-0 ${userTogol ? " mt-44 duration-500" : "-mt-36 duration-500"} w-48 bg-white border border-gray-200 rounded-md shadow-lg -z-10`}>
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Profile</li>
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Settings</li>
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Logout</li>
            </ul>
        </ul>
    </>;

    return (
        <div className='bg-slate-300 fixed top-0 w-full h-8 z-10'>
            <div className='flex items-center justify-between px-10 py-2 bg-slate-300'>
                <div><img className='md:h-[50px] h-[40px]' src="https://i.postimg.cc/0jNDs17y/furniture-home.png" alt="" /></div>
                <div
                className={` md:mt-0 transition-all bg-black px-5 md:bg-transparent bg-opacity-50 ${isOpen?'mt-28':'-mt-40'} duration-500 -z-10 md:-z-0 right-40 md:px-2 pt-16 py-2 md:py-0 rounded-b-md absolute md:static`}
                >{link}</div>
                <div>{option}</div>
            </div>
        </div>
    );
};

export default Navbar;
