import { useParams } from 'react-router-dom';
import { useGetProductsDataQuery } from '../../../Redux/features/api/baseApi';
import { useEffect, useState } from 'react';
import ProductsSkeleton from './ProductsSkeleton';
import {  useAppDispatch } from '../../../Redux/store';
import { addCard } from '../../../Redux/features/addCard/addCard';
// import Footer from '../../../Components/Footer/Footer';

const Products = () => {
   interface Data{
    Name:string,
    Category:string,
    Image:string,
    Price:number,
    About:string,
    Discount:number,
    _id:string|number
   }
    const {category}=useParams()
    const { data,isLoading } = useGetProductsDataQuery()
    const [CategoryData,setCategoryData]=useState<Data[]>([])


    useEffect(() => {
        if (data) {
          if (!category) {
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

   const handelAddCard=(data:Data)=>{
    dispatch(addCard(data))
   }
    return (
       <div>
         <div hidden={isLoading} className='grid md:grid-cols-4 grid-cols-2 md:gap-6 gap-3'>
            {
                CategoryData?.map((Data, index) => (
                    <div key={index}>
                        <div className="hover:rounded-lg bg-base-100 border my-5 hover:shadow-xl">
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
                                    <button onClick={()=>handelAddCard(Data)} className="text-[12px] md:text-[14px] px-2 border-2 font-semibold bg-white active:bg-black active:text-white border-orange-500 rounded-full">Add to card</button>
                                    <button className="m-2 md:m-0 md:mt-0 text-[12px] md:text-[14px] px-2 border-2 font-semibold bg-white active:bg-black active:text-white border-orange-500 rounded-full">Details</button>
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