import { Rating } from "@mui/material";
import { useEffect, useState } from "react";


const BestSelling = () => {
    const[Data,setData]=useState([])
    interface products{
        Image:string,
        Name:string,
        Ratings:number,
        Price:number
    }
    useEffect(()=>{
        fetch("../../../public/BestSelling.json")
        .then(res=>res.json())
        .then(data=>setData(data))
    },[])
    const data:products[]=Data
    
    return (
        <div>
            {/* title */}
            <title className="flex items-center justify-center gap-10 my-10">
                <hr className="w-52  border-2 border-slate-400" /><h1 className="uppercase text-[25px] text-slate-600">Best Selling Furniture</h1><hr className="w-52 border-2 border-slate-400"/>
            </title>
        <div className="grid grid-cols-4 gap-4 items-center justify-center">
            {
               data.map((d,index)=><div key={index}>
                <div className=" ">
                    <img className="h-[300px] w-[200px] mx-auto bg-slate-100 py-10" src={d.Image} alt="" />
                    <div className="text-center my-5">
                        <h1>{d.Name}</h1>
                        <Rating name="read-only" value={d.Ratings} readOnly />
                        <p>$ {d.Price}</p>
                        <button className="border-b-2 text-[13px]">ADD TO CARD</button>
                    </div>
                </div>
               </div>)
            }
        </div>
            
        </div>
    );
};

export default BestSelling;