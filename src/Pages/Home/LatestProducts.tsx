// import { useState } from "react";
import { useGetLatestProductsQuery } from "../../Redux/features/api/baseApi";
import { Link } from "react-router-dom";

const LatestProducts = () => {
    // const [visibleItem,setVisibleItem]=useState(4)
    const visibleItem:number=4
    const {data}=useGetLatestProductsQuery()
  
    return (
        <div>
           <title className="flex items-center justify-center gap-10 my-10">
                <hr className="w-52  border-2 border-slate-400" /><h1 className="uppercase text-[25px] text-slate-600">Latest Products</h1><hr className="w-52 border-2 border-slate-400"/>
            </title>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 pb-10 mx-14">
            {
          data?.slice(0, visibleItem).map((Data, index) => (
            <div key={index} className="border">
              <img className="bg-slate-500 md:h-60 h-36 w-full" src={Data.Image} alt="" />
              <div className="mx-5 py-4">
                <h2 className="text-[18px] font-bold">{Data.Name}</h2>
                <h3 className="my-2">$<span className="font-semibold text-[#bc7c28]">{Data.Price}</span></h3>
                <h3 className="text-16px">Date: <span className="text-[#d48217]">{Data.Date}</span></h3>
                <p className="text-justify line-clamp-2 my-3">{Data.About}</p>
                <div>
                  <button className="px-2 border-2 font-semibold active:bg-black active:text-white border-orange-500 rounded-full">Add to Card</button>
                </div>
              </div>
            </div>
          ))
        }
            </div>

             {/* Show More Button */}
     
        <div className="text-center my-6">
          <Link className="border border-orange-600 p-2 rounded-full font-semibold" to="latestFurniture">
         Show more
          </Link>
        </div>
     
        </div>
    );
};

export default LatestProducts;