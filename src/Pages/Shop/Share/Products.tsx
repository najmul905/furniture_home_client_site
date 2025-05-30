import { useParams } from 'react-router-dom';
import { useGetProductsDataQuery } from '../../../Redux/features/api/baseApi';
import { useEffect, useState } from 'react';
import ProductsSkeleton from './ProductsSkeleton';
import {  RootState, useAppDispatch } from '../../../Redux/store';
import { addCard } from '../../../Redux/features/addCard/addCard';
// import Swal from 'sweetalert2';
import {motion} from "framer-motion"
import CarouselPage from './CarouselPage';
import { useSelector } from 'react-redux';
import Swal from 'sweetalert2';
// import Footer from '../../../Components/Footer/Footer';

interface Data{
  Name:string,
  Category:string,
  Image:string,
  Price:number,
  About:string,
  Discount:number,
  _id:string|number
 }

const Products = () => {
  const products=useSelector((state:RootState)=>state.addCardSlice.products)

   
    const {category}=useParams()
    const { data,isLoading } = useGetProductsDataQuery()
    const [CategoryData,setCategoryData]=useState<Data[]>([])

    // ViewValue
    const [viewValue,setViewValue]=useState<string | number | null>(null)
    console.log(viewValue)

    useEffect(() => {
        if (data) {
          if (!category || category === "All Products") {
            // If no category is provided or if it's "all", set all data
            setCategoryData(data);
          } else {
            // Otherwise, filter the data based on category
            const filteredData = data.filter(allData => allData.Category === category);
            setCategoryData(filteredData);
          }
        }
      }, [data, category]);

      const dispatch=useAppDispatch()
      
   const handelAddCard=(Data:Data)=>{
    const existingProduct = products.find((product) => product._id === Data._id);
    if (existingProduct) {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'This product is already in your cart!',
        });
        return;
    }
    else{
      const Quantity=1
      dispatch(addCard({...Data,Quantity}))
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
       <div className='pt-20'>
        <CarouselPage></CarouselPage>
         <div hidden={isLoading} className='grid md:grid-cols-4 grid-cols-2 md:gap-6 gap-3 mt-5'>
            {
                CategoryData?.map((Data, index) => (
                    <div
                   
                    key={index}>
                        <div
                         onMouseEnter={()=>setViewValue(Data._id)}
                         onMouseLeave={()=>setViewValue(null)}
                        className="overflow-hidden hover:rounded-lg bg-base-100 border  hover:shadow-md">
                            <figure className=''>
                                <img
                                    className=' md:h-44 h-36 w-full'
                                    src={Data.Image}
                                    alt="Furniture" />
                            </figure>
                            <div className="mx-2">
                                <h2 className="text-[13px] font-semibold line-clamp-1 text-justify capitalize">{Data.Name}</h2>
                                <h2 className='mt-2 '>$<span className='text-[#f7b054] text-[18px]'>{Data.Price}</span></h2>
                                {/* <p className='line-clamp-2'>{Data.About}</p> */}
                                <div className="md:flex  items-center justify-between py-2 ">
                                    <motion.button
                                    initial={{ y: 20, opacity: 0 }}
                                    animate={{
                                      y: viewValue === Data._id ? 0 : 20,
                                      opacity: viewValue === Data._id ? 1 : 0
                                    }}
                                    transition={{ duration:.50, ease: "easeInOut" }}
                                    onClick={()=>handelAddCard(Data)} className="border-b-2 text-[12px] md:text-[14px] hover:border-orange-500 active:border-slate-600">Add to card</motion.button>
                                    <motion.button
                                    initial={{ y: 20, opacity: 0 }}
                                    animate={{
                                      y: viewValue === Data._id ? 0 : 20,
                                      opacity: viewValue === Data._id ? 1 : 0
                                    }}
                                    transition={{ duration:0.75, ease: "easeInOut" }}
                                    className="border-b-2 text-[12px] md:text-[14px] hover:border-orange-500 active:border-slate-600">Details</motion.button>
                                </div>
                            </div>
                        </div>
                    </div>
                ))
            }
            
        </div>
        <div hidden={!isLoading}>
            <ProductsSkeleton></ProductsSkeleton>
        </div>
       </div>
    );
};

export default Products;