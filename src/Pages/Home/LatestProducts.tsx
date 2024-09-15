import { Rating } from "@mui/material";
import { useState } from "react";

const LatestProducts = () => {
    const [value,setValue]=useState<number|null>(null)
    return (
        <div>
           <title className="flex items-center justify-center gap-10 my-10">
                <hr className="w-52  border-2 border-slate-400" /><h1 className="uppercase text-[25px] text-slate-600">Latest Products</h1><hr className="w-52 border-2 border-slate-400"/>
            </title>

            <div className="grid grid-cols-4 gap-4 mt-8">
            <div className="text-center relative">
            <div className=" mx-auto h-56   bg-slate-100">
                <img className=" w-full mx-auto" src="https://i.postimg.cc/wBfcygsM/stock-photo-comfortable-grey-modern-armchair-blanket-isolated-white.png" alt="" />
                <p className="absolute top-0 -right-2 bg-slate-500 text-white p-2 font-semibold rounded-full text-[12px] ">Offer</p>
                </div>
            <div className="">
                <h1>Name</h1>
               <div className="my-4">
               <Rating
  name="simple-controlled"
  value={value}
  onChange={(event, newValue) => {
    setValue(newValue);
  }}

/>
               <h1>Price</h1>
               </div>
                <button className="uppercase">Add to Card</button>
            </div>
        </div>
            <div className="text-center">
            <div className="mx-auto bg-slate-100">
                <img className="mx-auto" src="https://i.postimg.cc/wBfcygsM/stock-photo-comfortable-grey-modern-armchair-blanket-isolated-white.png" alt="" />
                <p>Offer</p>
                </div>
            <div className="">
                <h1>Name</h1>
               <div className="my-4">
               <h1>Ratings</h1>
               <h1>Price</h1>
               </div>
                <button className="uppercase">Add to Card</button>
            </div>
        </div>
            <div className="text-center">
            <div className="mx-auto bg-slate-100">
                <img className="mx-auto" src="https://i.postimg.cc/wBfcygsM/stock-photo-comfortable-grey-modern-armchair-blanket-isolated-white.png" alt="" />
                <p>Offer</p>
                </div>
            <div className="">
                <h1>Name</h1>
               <div className="my-4">
               <h1>Ratings</h1>
               <h1>Price</h1>
               </div>
                <button className="uppercase">Add to Card</button>
            </div>
        </div>
            <div className="text-center">
            <div className="mx-auto bg-slate-100">
                <img className="mx-auto" src="https://i.postimg.cc/wBfcygsM/stock-photo-comfortable-grey-modern-armchair-blanket-isolated-white.png" alt="" />
                <p>Offer</p>
                </div>
            <div className="">
                <h1>Name</h1>
               <div className="my-4">
               <h1>Ratings</h1>
               <h1>Price</h1>
               </div>
                <button className="uppercase">Add to Card</button>
            </div>
        </div>
        </div>
        </div>
    );
};

export default LatestProducts;