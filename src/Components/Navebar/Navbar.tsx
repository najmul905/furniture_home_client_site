import {  useState } from 'react';
import { FaUserCircle } from "react-icons/fa";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { IoCloseSharp, IoReorderThreeOutline } from "react-icons/io5";
import { Link, useLocation } from 'react-router-dom'; // Import useLocation
import { motion} from 'framer-motion'
import { useSelector } from 'react-redux';
import { RootState } from '../../Redux/store';
import { auth } from '../Firebase/Firebase';
import { signOut } from 'firebase/auth';


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
    const  {email,displayName,photoURL,isLoading}=useSelector((state:RootState)=>state.userdataSlice)
    console.log(email,displayName,isLoading)
    
    const handelLogOut = () => {
        signOut(auth).catch((error) => console.error("Logout failed: ", error));
    };

    const link = <>
        <ul className='md:flex md:items-center md:justify-center z-10 gap-8 text-[16px] text-white  md:text-black'>
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
            
            <li><AiOutlineShoppingCart className='h-6 w-6 cursor-pointer' /></li>
            <li onClick={() => setUserTagol(!userTogol)}>
            {email?
                <img className='h-9 w-9 rounded-full cursor-pointer' src={photoURL??undefined}
                 alt="" />:<FaUserCircle className='h-6 w-6 cursor-pointer' />}
            </li>
            <li onClick={()=>setIsOpen(!isOpen)} className='md:hidden'>
                {
                    isOpen?
                    <IoCloseSharp className="h-6 w-6 me-3 cursor-pointer" />:
                    <IoReorderThreeOutline className="h-6 w-6 me-3 cursor-pointer" />
                }
            </li>
            <motion.ul
            initial={{opacity:0}}
            animate={userTogol?{opacity:1}:{}}
            transition={{duration:0.5}}
            className={`absolute right-0  mt-60  w-48 bg-white border border-gray-200 rounded-md shadow-lg -z-10`}>
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Profile</li>
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Settings</li>
               { email?<li onClick={handelLogOut} className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Logout</li>:
                <Link to="logIn"><li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">LogIn</li></Link>}
            </motion.ul>
        </ul>
    </>;

    return (
        <div className='bg-slate-300 fixed top-0 w-full h-8 z-10'>
            <div className='flex items-center justify-between px-10 py-2 bg-slate-300'>
                <div><img className='md:h-[50px] h-[40px]' src="https://i.postimg.cc/0jNDs17y/furniture-home.png" alt="" /></div>
                <div
                
                className={` md:mt-0 transition-all bg-black  px-5 md:bg-transparent bg-opacity-70 ${isOpen?"opacity-100":"opacity-0"} md:opacity-100  mt-28  duration-500 -z-10 md:-z-0  md:px-2 pt-16 py-2 md:py-0 rounded-b-md absolute md:static right-0 md:max-w-none md:text-center w-full`}
                >{link}</div>
                <div>{option}</div>
            </div>
        </div>
    );
};

export default Navbar;
