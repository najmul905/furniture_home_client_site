import Footer from "../../Components/Footer/Footer";
import { useGetLatestProductsQuery } from "../../Redux/features/api/baseApi";

const LatestFurniture = () => {
    const{data}=useGetLatestProductsQuery()
    console.log(data)
    return (
        <div className="pt-20 ">
            <div  style={{backgroundImage:`url("https://i.ibb.co.com/1sctGFR/modern-living-room-furniture-design-ipc500.jpg")`}} className=" bg-cover  my-20 mx-36 relative bg-fixed">
             <div className="flex items-center justify-center gap-4 py-20 bg-black bg-opacity-50 h-72 text-white">
             <hr className="border  w-1/3"/><p className="text-[22px] font-semibold ">Latest Products</p><hr className="border w-1/3" />
             </div>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 pb-10 mx-14">
                {
                    data?.map((Data,index)=>(
                        <div key={index} className="border ">
                            <img className="bg-slate-500 md:h-60 h-36 w-full" src={Data.Image} alt="" />
                            <div className="mx-5 py-4">
                                <h2 className="text-[18px] font-bold">{Data.Name}</h2>
                                <h3 className="my-2">$<span className="font-semibold text-[#bc7c28]">{Data.Price}</span></h3>
                                <h3 className="text-16px">Date: <span className="text-[#d48217]">{Data.Date}</span></h3>
                                <p className="text-justify line-clamp-2 my-3">{Data.About}</p>

                                <div>
                                <button className="px-2 border-2 font-semibold active:bg-black active:text-white border-orange-500  rounded-full">Add to Card</button>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
            <Footer></Footer>
        </div>
    );
};

export default LatestFurniture;