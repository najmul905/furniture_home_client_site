// import { useState } from "react";
import { useGetLatestProductsQuery } from "../../Redux/features/api/baseApi";
import { Link, useNavigate } from "react-router-dom";
import {motion} from "framer-motion"
import { useAppDispatch } from "../../Redux/store";
import { addCard } from "../../Redux/features/addCard/addCard";
import { useState } from "react";

const LatestProducts = () => {
    // const [visibleItem,setVisibleItem]=useState(4)
    interface Data{
      Name:string,
      Image:string,
      Price:number,
      About:string,
      _id:string|number
     }
    const [viewValue,setViewValue]=useState<string | number | null>(null)
     
    const visibleItem:number=8
    const {data}=useGetLatestProductsQuery()
    console.log(data)
    const navigate =useNavigate()
    const handleClick = () => {
      navigate("/latestFurniture");
      // Scroll to the top of the page
      window.scrollTo(0, 0);
    };
    const dispatch=useAppDispatch()
    const handelAddToCard=(Data:Data)=>{
      dispatch(addCard(Data))
    }
  
    return (
        <div>
           <title className="flex items-center justify-center gap-10 my-10">
                <hr className="w-52  border-2 border-slate-400" /><h1 className="uppercase text-[25px] text-slate-600">Latest Products</h1><hr className="w-52 border-2 border-slate-400"/>
            </title>

            <div className="grid grid-cols-2 md:grid-cols-4  gap-5 pb-10 mx-2 md:mx-14">
            {
          data?.slice(0, visibleItem).map((Data, index) => (
            <motion.div
            onMouseEnter={()=>setViewValue(Data._id)}
            onMouseLeave={()=>setViewValue(null)}
            initial={{scale:0.9, y:100,opacity:0}}
            whileInView={{scale:1,y:0,opacity:1}} 
            viewport={{ once: true,  }}
            transition={{duration:0.75}}
            key={index} className="border rounded overflow-hidden">
              <img className="bg-slate-500  md:h-60 h-36 w-full" src={Data.Image} alt="" />
              <div className="mx-5 py-4">
                <h2 className="text-[18px] font-bold">{Data.Name}</h2>
                <h3 className="my-2">$<span className="font-semibold text-[#bc7c28]">{Data.Price}</span></h3>
                <h3 className="text-16px">Date: <span className="text-[#d48217]">{Data.Date}</span></h3>
                <p className="text-justify line-clamp-2 my-3">{Data.About}</p>
                <div>
                  <motion.button

                  initial={{ y: 50, opacity: 0 }}
                  animate={{
                    y: viewValue === Data._id ? 0 : 50,
                    opacity: viewValue === Data._id ? 1 : 0
                  }}
                  transition={{ duration:.50, ease: "easeInOut" }}
                  onClick={()=>handelAddToCard(Data)}
                  className="px-2 border-2 font-semibold active:bg-black active:text-white border-orange-500 rounded-full">Add to Card</motion.button>
                </div>
              </div>
            </motion.div>
          ))
        }
            </div>

             {/* Show More Button */}
     
        <div className="text-center my-6">
          <Link onClick={handleClick} to="/latestFurniture" className="border border-orange-600 p-2 rounded-full font-semibold" >
         Show more..
          </Link>
        </div>
     
        </div>
    );
};

export default LatestProducts;