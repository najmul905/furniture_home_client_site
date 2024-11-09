import { useCallback, useEffect, useState } from "react";
import { IoIosArrowDropleftCircle, IoIosArrowDroprightCircle } from "react-icons/io";


const Testimonial = () => {

    interface Data{
        Name:string,
        Image:string,
        About:string,
        Position:string
    }
    const [data,setData]=useState<Data[]>([])
    const [cur,setCur]=useState<number>(0)
    useEffect(()=>{
        fetch("Testimonial.json")
        .then(res=>res.json())
        .then(item=>setData(item))
    },[])
    const next=useCallback(()=>{
      
        setCur((cur)=>(cur===data.length-1?0:cur+1))
    },[data])
    const pre=useCallback(()=>{
        setCur((cur) => (cur===0?data.length-1:cur-1))
    },[data])
    
    
    return (
        <div className="mt-10">
            <title className="flex items-center justify-center gap-10 my-10">
                <hr className="w-52  border-2 border-slate-400" /><h1 className="uppercase text-[25px] text-slate-600">Testimonial</h1><hr className="w-52 border-2 border-slate-400" />
            </title>
           <div className="overflow-hidden rounded-md relative mx-14">
           <div className="flex transition-transform ease-out duration-500"
           style={{transform:`translatex(-${cur*100}%)`}}
           >
            {
                data?.map((Data,index)=>(
                    <div key={index} className="flex-shrink-0 w-full h-60 bg-slate-400">
                        <img src={Data.Image} className="h-20 w-20 rounded-full mt-3 mx-auto" alt="" />
                        <div className="text-center mx-20">
                            <p className="font-TestimonialFont text-[20px] text-white">{Data.About}</p>
                            <h1 className="my-4 text-[14px] font-semibold">{Data.Name}</h1>
                            <h1 className="text-[13px] font-semibold">{Data.Position}</h1>
                        </div>
                    </div>
                ))
            }
           </div>
           <div className="flex items-center justify-between absolute mx-8 inset-0">
            <button onClick={pre}><IoIosArrowDropleftCircle className="text-white active:text-black" size={25}></IoIosArrowDropleftCircle></button>
            <button onClick={next}><IoIosArrowDroprightCircle className="text-white active:text-black" size={25}></IoIosArrowDroprightCircle></button>
           </div>
           </div>
        </div>
    );
};

export default Testimonial;