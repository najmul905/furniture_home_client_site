import { IoIosArrowRoundForward } from "react-icons/io";
import { Link } from "react-router-dom";

const Banner = () => {
    return (
        <div className="relative   bg-cover bg-fixed  " style={{backgroundImage:`url("https://i.postimg.cc/hG8vFycv/istockphoto-943910360-612x612.jpg")`,
        
        }}>
            <div className="bg-black bg-opacity-50 pt-20 pb-5">
            <div className=" flex items-center pb-20 pt-20">
                <div className="ml-[20px] md:ml-[100px]">
            <h1 className=" text-5xl text-white">Your Stylist Furniture <br /> in Our Shope.</h1>
            <p className="my-6 mr-28 text-white">If you want to build your home as a organist way.Then you came our shope and explore our products and build your home as a stylist way.</p>
            <Link to="shope"><button className="bg-black text-white py-3 px-3 hover:bg-white hover:text-black ">SHOPE NOW</button></Link>
                </div>
                <div>
                <img src="https://i.postimg.cc/T24QT0Q6/story-pic-update.png" alt="" />
                </div>
            </div>
            {/* second section */}
            <div className="p-8 border-4 border-white grid grid-cols-3 gap-4 m-4">
                <div className="">
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
                </div>
                <div className="">
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
                </div>
                <div className="">
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
                </div>
               
            </div>
            </div>
        </div>
    );
};

export default Banner;