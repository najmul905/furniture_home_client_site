import { Link, useNavigate } from "react-router-dom";
import { useGetProductsDataQuery } from "../../Redux/features/api/baseApi";
import {motion} from "framer-motion"
import SkeletonUI from "../../Components/Skeleton/Skeleton";

const FurnitureProducts = () => {
    const {data,isLoading}=useGetProductsDataQuery()
    console.log(isLoading)
    const offerData = data?.filter((item) => item.Discount > 5);
    const visibleItem:number=8;

    const navigate =useNavigate()
    const handleClick = () => {
      navigate("/offer");
      window.scrollTo(0, 0);
    };
   
    return (
        <div>
            <title className="flex items-center justify-center gap-10 my-10">
                <hr className="w-52  border-2 border-slate-400" /><h1 className="uppercase text-[25px] text-slate-600">Furniture Products</h1><hr className="w-52 border-2 border-slate-400"/>
            </title>
            <div hidden={isLoading} className="grid md:grid-cols-4 grid-cols-2 gap-4 mx-2 md:mx-12">
                {
                    offerData?.slice(0,visibleItem).map((Data,index)=>(
                        <motion.div
                        initial={{scale:0.9, y:100}}
                        whileInView={{scale:1,y:0}}
                        transition={{duration:1,delay:0.3}}
                        key={index}  className="relative border rounded-md overflow-hidden">
                            <img className="md:h-[224px] h-[124px] w-full shadow-md rounded-b-md" src={Data.Image} alt="" />
                            <div className="mt-4 px-2 mb-2">
                            <h1 className="line-clamp-1 text-[15px] font-semibold">{Data.Name}</h1>
                            <p>Regular Price: <span className="line-through text-red-800 font-semibold">${Data.Price}</span></p>
                            <h1>Discount Price: <span className="text-[#bc7c28] font-semibold">${Data.Price-(Data.Price*Data.Discount/100)}</span> </h1>
                            <motion.h1
                             initial={{opacity:0, x:50}}
                             whileInView={{opacity:1, x:0}}
                             transition={{delay:0.50,duration:1}}
                            className=" absolute text-[11px] top-0 right-0 m-2 bg-slate-700 px-2 rounded-xl text-white font-semibold italic">{Data.Discount}% off</motion.h1>
                            <div className=" mt-5"><button  className="px-2 border-2 font-semibold active:bg-black active:text-white border-orange-500 rounded-full">Add to Card</button></div>
                            </div>

                        </motion.div>
                    ))
                }
            </div>
            <div hidden={!isLoading}>
                <SkeletonUI></SkeletonUI>
            </div>
            <div className="text-center my-10">
            <Link onClick={handleClick} className="border border-orange-600 p-2 rounded-full font-semibold" to="/offer">
         Show more..
          </Link>
            </div>
           
        </div>
    );
};

export default FurnitureProducts;