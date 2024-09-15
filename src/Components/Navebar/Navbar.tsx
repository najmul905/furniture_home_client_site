import  { useState } from 'react';
import { FaUserCircle } from "react-icons/fa";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { IoSearchSharp } from "react-icons/io5";
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [underline,setUnderline]=useState("home")
    const [userTogol,setUserTagol]=useState(false)
    console.log(userTogol)
    const link=<>
    <ul className='md:flex md:items-center gap-8 text-[16px]' >
       <Link to='/'> <li onClick={()=>setUnderline("home")} className={`cursor-pointer hover:underline ${underline==="home"?"underline text-[18px]":""}`}>Home</li></Link>
       <Link to="/shope"> <li onClick={()=>setUnderline("shop")} className={`cursor-pointer hover:underline ${underline==="shop"?"underline text-[18px]":""}`}>Shope</li></Link>
        <Link to='/dashboard'><li onClick={()=>setUnderline("dashboard")} className={`cursor-pointer hover:underline ${underline==="dashboard"?"underline text-[18px]":""}`}>Dashboard</li></Link>
        <Link to='/latestFurniture'><li onClick={()=>setUnderline("latest")} className={`cursor-pointer hover:underline ${underline==="latest"?"underline text-[18px]":""}`}>Latest Furniture</li></Link>
    </ul>
            </>
    const option=<>
    <ul className='flex items-center gap-4'>
        <li className='md:block hidden'><div className="flex items-center border bg-white border-gray-300 rounded-md w-[300px]">
      <input
        className="w-full ps-2 py-1 rounded focus:outline-none"
        placeholder="Search"
        type="search"
      />
       <IoSearchSharp className="h-6 w-6 me-3 cursor-pointer" />
    </div></li>
    <li className='md:hidden'>
    <IoSearchSharp className="h-6 w-6 me-3 cursor-pointer" />
    </li>
        <li className=''><AiOutlineShoppingCart className='h-6 w-6 ' /></li>
        <li onClick={()=>setUserTagol(!userTogol)} className=''><FaUserCircle className='h-6 w-6'/></li>
        <ul className={`absolute right-0 ${userTogol ?" mt-44 duration-500":"-mt-36 duration-500"} w-48 bg-white border border-gray-200 rounded-md shadow-lg -z-10`}>
          <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Profile</li>
          <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Settings</li>
          <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Logout</li>
        </ul>
    </ul>   
    </>
    return (
       <div className='  bg-white fixed top-0 w-full h-8 z-10'>
         <div className='flex items-center justify-between px-10 py-2 bg-white'>
            <div><img className='h-[50px] ' src="https://i.postimg.cc/0jNDs17y/furniture-home.png" alt="" /></div>
            <div>{link}</div>
            <div>
            {option}
            </div>
        </div>
       </div>
    );
};

export default Navbar;