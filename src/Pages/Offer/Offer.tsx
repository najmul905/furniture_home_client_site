import Footer from "../../Components/Footer/Footer";
import { useGetProductsDataQuery } from "../../Redux/features/api/baseApi";
import { motion } from "framer-motion"
import { RootState, useAppDispatch } from "../../Redux/store";
import { addCard } from "../../Redux/features/addCard/addCard";
import { useState } from "react";
import Swal from "sweetalert2";
import { useSelector } from "react-redux";

const Offer = () => {
    const products = useSelector((state: RootState) => state.addCardSlice.products)

    const { data } = useGetProductsDataQuery()
    const [viewValue, setViewValue] = useState<string | number | null>(null)

    const offerData = data?.filter((item) => item.Discount > 5);
    const dispatch = useAppDispatch()
    interface Data {
        Name: string,
        Category: string,
        Image: string,
        Price: number,
        About: string,
        Discount: number,
        _id: string | number
    }
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
        <div className="md:pt-20 pt-10">
            <div style={{ backgroundImage: `url("https://i.ibb.co.com/1sctGFR/modern-living-room-furniture-design-ipc500.jpg")` }} className=" bg-cover  my-20 md:mx-36 mx-5 relative bg-fixed">
                <div className="flex items-center justify-center gap-4 md:py-20 py-10 bg-black bg-opacity-50 md:h-72 text-white">
                    <motion.hr
                        initial={{ x: -100, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ duration: 2 }}
                        className="border  w-1/3" /><motion.p
                            initial={{ y: -100, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            transition={{ duration: 2 }}
                            className="md:text-[22px] text-[15px] font-semibold ">Offer Products</motion.p><motion.hr
                        initial={{ x: 100, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ duration: 2 }}
                        className="border w-1/3" />
                </div>
            </div>
            <div className="grid md:grid-cols-3 grid-cols-2 mx-5 gap-4  md:mx-32">
                {
                    offerData?.map((Data, index) => (
                        <div
                            onMouseEnter={() => setViewValue(Data._id)}
                            onMouseLeave={() => setViewValue(null)}
                            key={index} className="relative overflow-hidden ">
                            <img className="h-56 w-full bg-slate-300" src={Data.Image} alt="" />
                            <div className="pt-4 ps-2">
                                <h1 className="line-clamp-1 text-[18px] font-bold">{Data.Name}</h1>
                                <p className="my-1"><span className="text-[10px] font-bold">Regular Price:</span> <span className="line-through text-red-800 text-[14px] font-semibold">${Data.Price}</span></p>
                                <h1 className=""><span className="text-[12px] font-bold">Discount Price:</span> <span className="text-[#bc7c28] font-semibold">${Data.Price - (Data.Price * Data.Discount / 100)}</span> </h1>
                                <h1 className=" absolute top-0 right-0 m-2 bg-slate-700 px-2 rounded-xl text-white font-semibold italic">{Data.Discount}% off</h1>
                                <div>
                                    <motion.button
                                        initial={{ y: 50, opacity: 0 }}
                                        animate={{
                                            y: viewValue === Data._id ? 0 : 50,
                                            opacity: viewValue === Data._id ? 1 : 0
                                        }}
                                        transition={{ duration: .50, ease: "easeInOut" }}
                                        onClick={() => handelAddToCard(Data)}
                                        className="px-2 border-2 font-semibold active:bg-black active:text-white border-orange-500 rounded-full my-4">Add to Card</motion.button>
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