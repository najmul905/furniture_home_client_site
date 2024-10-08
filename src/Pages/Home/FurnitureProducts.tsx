import { Link } from "react-router-dom";
import { useGetProductsDataQuery } from "../../Redux/features/api/baseApi";

const FurnitureProducts = () => {
    const {data}=useGetProductsDataQuery()
    const offerData = data?.filter((item) => item.Discount > 5);
    
    const visibleItem:number=8;
   
    return (
        <div>
            <title className="flex items-center justify-center gap-10 my-10">
                <hr className="w-52  border-2 border-slate-400" /><h1 className="uppercase text-[25px] text-slate-600">Furniture Products</h1><hr className="w-52 border-2 border-slate-400"/>
            </title>
            <div className="grid grid-cols-4 gap-4 mx-14">
                {
                    offerData?.slice(0,visibleItem).map((Data,index)=>(
                        <div key={index} className="relative">
                            <img className="h-56 w-full" src={Data.Image} alt="" />
                            <div>
                            <h1 className="line-clamp-1">{Data.Name}</h1>
                            <p>Regular Price: <span className="line-through text-red-800 font-semibold">${Data.Price}</span></p>
                            <h1>Discount Price: <span className="text-[#bc7c28] font-semibold">${Data.Price-(Data.Price*Data.Discount/100)}</span> </h1>
                            <h1 className=" absolute top-0 right-0 m-2 bg-slate-700 px-2 rounded-xl text-white font-semibold italic">{Data.Discount}% off</h1>
                            </div>

                        </div>
                    ))
                }
            </div>
            <div className="text-center my-10">
            <Link className="border border-orange-600 p-2 rounded-full font-semibold" to="latestFurniture">
         Show more..
          </Link>
            </div>
           
        </div>
    );
};

export default FurnitureProducts;