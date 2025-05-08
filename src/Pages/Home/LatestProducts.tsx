// import { useState } from "react";
import { useGetLatestProductsQuery } from "../../Redux/features/api/baseApi";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion"
import { RootState, useAppDispatch } from "../../Redux/store";
import { addCard } from "../../Redux/features/addCard/addCard";
import { useState } from "react";
import { useSelector } from "react-redux";
import Swal from "sweetalert2";

const LatestProducts = () => {
  const products = useSelector((state: RootState) => state.addCardSlice.products)
  interface Data {
    Name: string,
    Image: string,
    Price: number,
    About: string,
    _id: string | number
  }
  const [viewValue, setViewValue] = useState<string | number | null>(null)

  const visibleItem: number = 8
  const { data } = useGetLatestProductsQuery()
  console.log(data)
  const navigate = useNavigate()
  const handleClick = () => {
    navigate("/latestFurniture");
    // Scroll to the top of the page
    window.scrollTo(0, 0);
  };
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
    <div>
      <title className="flex items-center justify-center gap-10 my-10">
        <hr className="w-52  border-2 border-slate-400" /><h1 className="uppercase text-[25px] text-slate-600">Latest Products</h1><hr className="w-52 border-2 border-slate-400" />
      </title>

      <div className="grid grid-cols-2 md:grid-cols-4  gap-5 pb-10 mx-2 md:mx-14">
        {
          data?.slice(0, visibleItem).map((Data, index) => (
            <motion.div
              onMouseEnter={() => setViewValue(Data._id)}
              onMouseLeave={() => setViewValue(null)}
              initial={{ scale: 0.9, y: 100, opacity: 0 }}
              whileInView={{ scale: 1, y: 0, opacity: 1 }}
              viewport={{ once: true, }}
              transition={{ duration: 0.75 }}
              key={index} className="border rounded overflow-hidden">
              <img className="bg-slate-500  md:h-60 h-36 w-full" src={Data.Image} alt="" />
              <div className="mx-5 py-4">
                <h2 className="text-[18px] font-bold">{Data.Name}</h2>
                <h3 className="my-2">$<span className="font-semibold text-[#bc7c28]">{Data.Price}</span></h3>
                <h3 className="text-16px">Date: <span className="text-[#d48217]">{Data.Date}</span></h3>
                <p className="text-justify line-clamp-2 my-3">{Data.About}</p>
                <div>
                  <motion.button

                    initial={{ y: 20, opacity: 0 }}
                    animate={{
                      y: viewValue === Data._id ? 0 : 20,
                      opacity: viewValue === Data._id ? 1 : 0
                    }}
                    transition={{ duration: .50, ease: "easeInOut" }}
                    onClick={() => handelAddToCard(Data)}
                    className="border-b-2 text-[12px] md:text-[14px] hover:border-orange-500 active:border-slate-600">Add to Card</motion.button>
                </div>
              </div>
            </motion.div>
          ))
        }
      </div>

      {/* Show More Button */}

      <div className="text-center my-6">
        <Link onClick={handleClick} to="/latestFurniture" className="border border-orange-600 p-2 rounded-full font-semibold" >
          Show more..
        </Link>
      </div>

    </div>
  );
};

export default LatestProducts;