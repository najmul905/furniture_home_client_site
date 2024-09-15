import { Rating } from "@mui/material";
import { useGetBestSellingQuery } from "../../Redux/features/api/baseApi";

const BestSelling = () => {

    const {data = [],isError,isLoading}=useGetBestSellingQuery();
   if(isError){
    <div>error</div>
   }
   if(isLoading){
    <div>Loading....</div>
   }
    
    return (
        <div>
            {/* title */}
            <title className="flex items-center justify-center gap-10 my-10">
                <hr className="w-52  border-2 border-slate-400" /><h1 className="uppercase text-[25px] text-slate-600">Best Selling Furniture</h1><hr className="w-52 border-2 border-slate-400"/>
            </title>
        <div className="grid grid-cols-4 gap-4 items-center justify-center mx-12">
            {
               data.map(d=><div key={d._id}>
                <div className=" ">
                   <div className="bg-slate-100 p-14">
                   <img className="h-[300px] w-[200px] mx-auto " src={d.Image} alt="" />
                   </div>
                    <div className="text-center my-5">
                        <h1 className="font-bold">{d.Name}</h1>
                        <div className="my-4">
                        <Rating name="read-only" value={d.Ratings} readOnly size="small" />
                        <p>$ {d.Price}</p>
                        </div>
                        <button className="border-b-2 text-[12px] active:border-slate-600">ADD TO CARD</button>
                    </div>
                </div>
               </div>)
            }
        </div>
        <div className="grid grid-cols-2 gap-5 mx-20 mt-32">
            <div className="flex items-center bg-slate-100 rounded-md overflow-auto">
                <div className="ml-[30px]">
                <h3 className="text-[15xl] font-semibold text-slate-600">Sunday Offer</h3>
                <h1 className="text-3xl font-semibold uppercase">GET 50% EXTRA OFFER</h1>
                <button>View Collection</button>
                </div>
                <div>
                    <img className="h-[300px] p-8" src="https://i.postimg.cc/y6SR2rKw/Modern-Furniture-PNG-Background-Image.png" alt="" />
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
                    <img className="h-[300px] p-8" src="https://i.postimg.cc/y6SR2rKw/Modern-Furniture-PNG-Background-Image.png" alt="" />
                </div>
            </div>
            
        </div>
            
        </div>
    );
};

export default BestSelling;