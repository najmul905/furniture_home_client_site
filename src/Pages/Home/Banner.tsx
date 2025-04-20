import { IoIosArrowRoundForward } from "react-icons/io";
import { Link } from "react-router-dom";
import {motion} from "framer-motion"

const Banner = () => {
    return (
        <div className="relative   bg-cover bg-fixed  " style={{backgroundImage:`url("https://i.postimg.cc/hG8vFycv/istockphoto-943910360-612x612.jpg")`,
        
        }}>
            <div className="bg-black bg-opacity-30 pt-20 pb-5 overflow-hidden">
            <div className=" md:flex md:items-center pb-20 pt-20">
                <motion.div
                 
                className="ml-[20px] md:ml-[100px]">
            <motion.h1
            initial={{x:100,opacity:0}}
            animate={{x:0,opacity:1}}
            transition={{duration:2}}
            className=" text-5xl text-white">Your Stylist Furniture <br /> in Our Shope.</motion.h1>
            <motion.p
            initial={{x:-100, opacity:0}}
            animate={{x:0,opacity:1}}
            transition={{duration:2,}}
            className="my-6 mr-28 text-white">If you want to build your home as a organist way.Then you came our shope and explore our products and build your home as a stylist way.</motion.p>
            <motion.div
            initial={{y:70,opacity:0,scale:4}}
            animate={{y:0,opacity:1,scale:1}}
            transition={{delay:1.5,duration:1}}
            >
            <Link to="shope"><button
            className="bg-black text-white py-3 px-3 hover:bg-white duration-500 hover:text-black ">SHOPE NOW</button></Link>
            </motion.div>
                </motion.div>
                <motion.div
                initial={{y:-100,opacity:0}}
                animate={{y:0,opacity:1}}
                transition={{duration:2}}
                >
                <img src="https://i.postimg.cc/T24QT0Q6/story-pic-update.png" alt="" />
                </motion.div>
            </div>
            {/* second section */}
            <div className="p-8 border-4 border-white grid md:grid-cols-3 gap-4 grid-cols-1 m-4">
                <motion.div
                initial={{x:-60,opacity:0}}
                animate={{x:0,opacity:1}}
                transition={{duration:1.5}}
                className="">
                    <div className="flex items-center justify-between bg-slate-300 rounded shadow-lg">
                    <div className="ps-2">
                        <h1 className="text-[18px] font-semibold text-orange-500 my-5">New Furniture</h1>
                        <h3 className="text-[16px] text-slate-600 mb-3">Name something</h3>
                        <button className="flex items-center text-[14px] hover:text-[#bc7c28] active:text-white">Shope Now<IoIosArrowRoundForward className="h-5 w-5" />
                        </button>
                    </div>
                    <div>
                        <img className="h-[250px] w-[180px] " src="https://i.postimg.cc/NjNcJqZB/f2926ef5-bba7-4584-9c9a-b560d442eb6e-9dec3025586412b2076dc2ec5a78effc.png" alt="" />
                    </div>
                    </div>
                </motion.div>
                <motion.div
                initial={{y:60,opacity:0}}
                animate={{y:0,opacity:1}}
                transition={{duration:1.5}}
                className="">
                    <div className="flex items-center justify-between bg-slate-300 rounded shadow-lg">
                    <div className="ps-2">
                        <h1 className="text-[18px] font-semibold text-orange-500 my-5 uppercase">Offer</h1>
                        <h3 className="text-[16px] text-slate-600 mb-3">Name something</h3>
                        <button className="flex items-center text-[14px] hover:text-[#bc7c28] active:text-white">Shope Now<IoIosArrowRoundForward className="h-5 w-5" />
                        </button>
                    </div>
                    <div>
                        <img className="h-[250px] w-[180px]" src="https://i.postimg.cc/6pQ350X6/d9141a29-559d-4b9b-b14c-43f3608cfe1c-1-62a3f40405444651a964899bc33450fb.png" alt="" />
                    </div>
                    </div>
                </motion.div>
                <motion.div
                initial={{x:60,opacity:0}}
                animate={{x:0,opacity:1}}
                transition={{duration:1.5}}
                className="">
                    <div className="flex items-center justify-between bg-slate-300 rounded shadow-lg">
                    <div className="ps-2">
                        <h1 className="text-[18px] font-semibold text-orange-500 my-5 uppercase">Discount</h1>
                        <h3 className="text-[16px] text-slate-600 mb-3">Name something</h3>
                        <button className="flex items-center text-[14px] hover:text-[#bc7c28] active:text-white">Shope Now<IoIosArrowRoundForward className="h-5 w-5" />
                        </button>
                    </div>
                    <div>
                        <img className="h-[250px] w-[180px]" src="https://i.postimg.cc/hjRcx8Hd/OIP-1.png" alt="" />
                    </div>
                    </div>
                </motion.div>
               
            </div>
            </div>
        </div>
    );
};

export default Banner;