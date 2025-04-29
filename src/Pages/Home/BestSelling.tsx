import { Rating } from "@mui/material";
import { useGetBestSellingQuery } from "../../Redux/features/api/baseApi";
import {motion} from "framer-motion"
import { useAppDispatch } from "../../Redux/store";
import { addCard } from "../../Redux/features/addCard/addCard";
import { useState } from "react";

const BestSelling = () => {

    interface Data{
        Name:string,
        Image:string,
        Price:number,
       Ratings:number,
        _id:string|number
       }
    const [viewValue,setViewValue]=useState<string | number | null>(null)


    const {data = [],}=useGetBestSellingQuery();
    console.log(data)
  
   const dispatch=useAppDispatch()
   const handelAddCard=(data:Data)=>{
    const Quantity=1
    dispatch(addCard({...data,Quantity}))
   }

    return (
        <div>
            {/* title */}
            <title className="flex items-center justify-center gap-10 my-10">
                <hr className="w-52  border-2 border-slate-400" /><h1 className="uppercase text-[25px] text-slate-600">Best Selling Furniture</h1><hr className="w-52 border-2 border-slate-400"/>
            </title>
        <div className="grid md:grid-cols-4 grid-cols-2 gap-4  mx-2 md:mx-12">
            {
               data.map(d=><div key={d._id}>
                <div 
                onMouseEnter={()=>setViewValue(d._id)}
                onMouseLeave={()=>setViewValue(null)}
                className="overflow-hidden ">
                   <div className="bg-slate-100 md:p-14">
                   <img className="md:h-[200px] h-[100px]  mx-auto " src={d.Image} alt="" />
                   </div>
                    <motion.div
                   
                    className="text-center my-5">
                        <motion.h1
                         initial={{opacity:0, y:20}}
                         whileInView={{opacity:1, y:0}}
                         viewport={{ once: true, amount: 0.8 }}
                         transition={{delay:0.30,duration:1}}
                        className="font-bold">{d.Name}</motion.h1>
                        <div className="my-4">
                       <motion.div
                        initial={{opacity:0, y:50}}
                        whileInView={{opacity:1, y:0}}
                        viewport={{ once: true, amount: 0.8 }}
                        transition={{delay:0.30,duration:1}}
                       > <Rating name="read-only" value={d.Ratings} readOnly size="small" /></motion.div>
                        <motion.p
                          initial={{opacity:0, y:20}}
                          whileInView={{opacity:1, y:0}}
                          viewport={{ once: true, amount: 0.8 }}
                          transition={{delay:0.40,duration:1}}
                        >$ {d.Price}</motion.p>
                        </div>
                        <motion.button 
                        onClick={()=>handelAddCard(d)}
                        initial={{ y: 20, opacity: 0 }}
                        animate={{
                          y: viewValue === d._id ? 0 : 20,
                          opacity: viewValue === d._id ? 1 : 0
                        }}
                        transition={{ duration:.50, ease: "easeInOut" }}
                        className="border-b-2 text-[12px] md:text-[14px] hover:border-orange-500 active:border-slate-600">ADD TO CARD</motion.button>
                    </motion.div>
                </div>
               </div>)
            }
        </div>
        <div className="grid md:grid-cols-2 grid-cols-1 gap-5 mx-2 md:mx-12 mt-10">
            <div className="flex items-center bg-slate-100 rounded-md overflow-auto">
                <div className="ml-[30px]">
                <h3 className="text-[15xl] font-semibold text-slate-600">Sunday Offer</h3>
                <h1 className="text-3xl font-semibold uppercase">GET 50% EXTRA OFFER</h1>
                <button>View Collection</button>
                </div>
                <div>
                    <img className="md:h-[300px] h-[150px] md:p-8" src="https://i.postimg.cc/y6SR2rKw/Modern-Furniture-PNG-Background-Image.png" alt="" />
                </div>
            </div>
            <div className="flex items-center bg-slate-100 rounded-md ">
                <div className="ml-[30px]">
                <h3 className="text-[15xl] font-semibold text-slate-600">Flash Sell</h3>
                <h1 className="text-3xl font-semibold uppercase">Save Up To
                70% Off</h1>
                <button>View Collection</button>
                </div>
                <div className="">
                    <img className="h-[300px] p-8" src="https://i.postimg.cc/2ywBw8pD/vintage-rubber-wood-and-oak-chair-fjord-1000-6-16-165943-1.png" alt="" />
                </div>
            </div>
            
        </div>
            
        </div>
    );
};

export default BestSelling;