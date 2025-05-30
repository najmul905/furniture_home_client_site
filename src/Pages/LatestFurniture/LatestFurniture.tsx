import Footer from "../../Components/Footer/Footer";
import { useGetLatestProductsQuery } from "../../Redux/features/api/baseApi";
import { motion } from 'framer-motion';
import { RootState, useAppDispatch } from "../../Redux/store";
import { addCard } from "../../Redux/features/addCard/addCard";
import { useState } from "react";
import Swal from "sweetalert2";
import { useSelector } from "react-redux";

const LatestFurniture = () => {
    const { data } = useGetLatestProductsQuery()
    const [viewValue, setViewValue] = useState<string | number | null>(null)
    const products = useSelector((state: RootState) => state.addCardSlice.products)
    interface Data {
        Name: string,
        Image: string,
        Price: number,
        About: string,
        _id: string | number
    }
    const dispatch = useAppDispatch()
    const handelAddToCard = (data: Data) => {
        const existingProduct = products.find((product) => product._id === data._id);
        if (existingProduct) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'This product is already in your cart!',
            });
            return;
        }
        else {
            const Quantity = 1
            dispatch(addCard({ ...data, Quantity }))
            Swal.fire({
                position: "top-end",
                icon: "success",
                html: '<div style="font-size:20px">Your work has been saved</div>',
                showConfirmButton: false,
                timer: 500
            });
        }
    }
    return (
        <div className="pt-20 ">
            <div style={{ backgroundImage: `url("https://i.ibb.co.com/1sctGFR/modern-living-room-furniture-design-ipc500.jpg")` }} className=" bg-cover mb-5  overflow-hidden md:my-20 mx-4 md:mx-36 relative bg-fixed">
                <div className="flex items-center justify-center  gap-4 md:py-20 bg-black bg-opacity-30 h-40 md:h-72 text-white">
                    <motion.hr
                        initial={{ x: -100, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ duration: 2 }}
                        className="border w-1/4 md:w-1/3" /><motion.p
                            initial={{ y: -100, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            transition={{ duration: 2 }}
                            className="md:text-[22px] text-[12px] font-semibold ">Latest Products</motion.p><motion.hr
                        initial={{ x: 100, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ duration: 2 }}
                        className="border w-1/4 md:w-1/3" />
                </div>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 pb-10 md:mx-14 mx-2">
                {
                    data?.map((Data, index) => (
                        <div
                            onMouseEnter={() => setViewValue(Data._id)}
                            onMouseLeave={() => setViewValue(null)}
                            key={index} className="border overflow-hidden">
                            <img className="bg-slate-500 md:h-60 h-36 w-full" src={Data.Image} alt="" />
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
                                        transition={{ duration: .75, ease: "easeInOut" }}
                                        onClick={() => handelAddToCard(Data)}
                                        className="border-b-2 text-[12px] md:text-[14px] hover:border-orange-500 active:border-slate-600">Add to Card</motion.button>
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