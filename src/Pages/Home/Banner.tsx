import { IoIosArrowRoundForward } from "react-icons/io";
import { Link } from "react-router-dom";

const Banner = () => {
    return (
        <div className="bg-slate-100 pt-20 ">
            <div className=" flex items-center pb-20 pt-20">
                <div className="ml-[20px] md:ml-[100px]">
            <h1 className=" text-5xl text-slate-700">Your Stylist Furniture <br /> in Our Shope.</h1>
            <p className="my-6 mr-28">If you want to build your home as a organist way.Then you came our shope and explore our products and build your home as a stylist way.</p>
            <Link to="shope"><button className="bg-black text-white py-3 px-3 hover:bg-white hover:text-black ">SHOPE NOW</button></Link>
                </div>
                <div>
                <img src="https://i.postimg.cc/T24QT0Q6/story-pic-update.png" alt="" />
                </div>
            </div>
            {/* second section */}
            <div className="p-8 grid grid-cols-3 ">
                <div className="bg-white  p-5">
                    <div className="flex items-center  bg-slate-100 ">
                    <div className="ps-2">
                        <h1 className="text-[18px] font-semibold text-orange-500 my-5">New Furniture</h1>
                        <h3 className="text-[16px] text-slate-600 mb-3">Name something</h3>
                        <button className="flex items-center text-[14px]">Shope Now<IoIosArrowRoundForward className="h-5 w-5" />
                        </button>
                    </div>
                    <div>
                        <img className="h-[250px] w-[180px] " src="https://i.postimg.cc/NjNcJqZB/f2926ef5-bba7-4584-9c9a-b560d442eb6e-9dec3025586412b2076dc2ec5a78effc.png" alt="" />
                    </div>
                    </div>
                </div>
                <div className="bg-white p-5">
                    <div className="flex items-center bg-slate-100 ">
                    <div className="ps-2">
                        <h1 className="text-[18px] font-semibold text-orange-500 my-5 uppercase">Offer</h1>
                        <h3 className="text-[16px] text-slate-600 mb-3">Name something</h3>
                        <button className="flex items-center text-[14px]">Shope Now<IoIosArrowRoundForward className="h-5 w-5" />
                        </button>
                    </div>
                    <div>
                        <img className="h-[250px] w-[180px]" src="https://i.postimg.cc/6pQ350X6/d9141a29-559d-4b9b-b14c-43f3608cfe1c-1-62a3f40405444651a964899bc33450fb.png" alt="" />
                    </div>
                    </div>
                </div>
                <div className="bg-white p-5">
                    <div className="flex items-center bg-slate-100 ">
                    <div className="ps-2">
                        <h1 className="text-[18px] font-semibold text-orange-500 my-5 uppercase">Discount</h1>
                        <h3 className="text-[16px] text-slate-600 mb-3">Name something</h3>
                        <button className="flex items-center text-[14px]">Shope Now<IoIosArrowRoundForward className="h-5 w-5" />
                        </button>
                    </div>
                    <div>
                        <img className="h-[250px] w-[180px]" src="https://i.postimg.cc/hjRcx8Hd/OIP-1.png" alt="" />
                    </div>
                    </div>
                </div>
               
            </div>
        </div>
    );
};

export default Banner;