import Footer from "../../Components/Footer/Footer";
import { useGetProductsDataQuery } from "../../Redux/features/api/baseApi";
import {motion} from "framer-motion"
import { useAppDispatch } from "../../Redux/store";
import { addCard } from "../../Redux/features/addCard/addCard";

const Offer = () => {
    const {data}=useGetProductsDataQuery()
    const offerData = data?.filter((item) => item.Discount > 5);
    const dispatch=useAppDispatch()
    interface Data{
        Name:string,
        Category:string,
        Image:string,
        Price:number,
        About:string,
        Discount:number,
        _id:string|number
       }
    const handelAddToCard=(data:Data)=>
        dispatch(addCard(data))
    return (
        <div className="pt-20">
            <div style={{ backgroundImage: `url("https://i.ibb.co.com/1sctGFR/modern-living-room-furniture-design-ipc500.jpg")` }} className=" bg-cover  my-20 mx-36 relative bg-fixed">
                <div className="flex items-center justify-center gap-4 py-20 bg-black bg-opacity-50 h-72 text-white">
                    <motion.hr
                        initial={{ x: -100, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ duration: 2 }}
                        className="border  w-1/3" /><motion.p
                            initial={{ y: -100, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            transition={{ duration: 2 }}
                            className="text-[22px] font-semibold ">Offer Products</motion.p><motion.hr
                        initial={{ x: 100, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ duration: 2 }}
                        className="border w-1/3" />
                </div>
            </div>
            <div className="grid grid-cols-3 gap-4 mx-14">
                {
                    offerData?.map((Data,index)=>(
                        <div key={index} className="relative border">
                            <img className="h-56 w-full bg-slate-300" src={Data.Image} alt="" />
                            <div className="pt-4 ps-2">
                            <h1 className="line-clamp-1 text-[18px] font-bold">{Data.Name}</h1>
                            <p className="my-1"><span className="text-[10px] font-bold">Regular Price:</span> <span className="line-through text-red-800 text-[14px] font-semibold">${Data.Price}</span></p>
                            <h1 className=""><span className="text-[12px] font-bold">Discount Price:</span> <span className="text-[#bc7c28] font-semibold">${Data.Price-(Data.Price*Data.Discount/100)}</span> </h1>
                            <h1 className=" absolute top-0 right-0 m-2 bg-slate-700 px-2 rounded-xl text-white font-semibold italic">{Data.Discount}% off</h1>
                            <div>
                            <button 
                            onClick={()=>handelAddToCard(Data)}
                            className="px-2 border-2 font-semibold active:bg-black active:text-white border-orange-500 rounded-full my-4">Add to Card</button>
                            </div>
                            </div>

                        </div>
                    ))
                }
            </div>
            <div className="mt-8">
                <Footer></Footer>
            </div>
        </div>
    );
};

export default Offer;