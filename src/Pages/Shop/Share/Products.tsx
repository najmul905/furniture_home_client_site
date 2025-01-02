import { useParams } from 'react-router-dom';
import { useGetProductsDataQuery } from '../../../Redux/features/api/baseApi';
import { useEffect, useState } from 'react';
import ProductsSkeleton from './ProductsSkeleton';
import { RootState, useAppDispatch } from '../../../Redux/store';
import { addCard } from '../../../Redux/features/addCard/addCard';
import { useSelector } from 'react-redux';
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

    const {email}=useSelector((state:RootState)=>state.userdataSlice)

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
    const updateData={...data,email}
    dispatch(addCard(updateData))
    console.log(updateData)
   }
    return (
       <div>
         <div hidden={isLoading} className='grid grid-cols-4 gap-6'>
            {
                CategoryData?.map((Data, index) => (
                    <div key={index}>
                        <div className="hover:rounded-lg bg-base-100 border my-5 hover:shadow-xl">
                            <figure className=''>
                                <img
                                    className=' h-44 w-full'
                                    src={Data.Image}
                                    alt="Furniture" />
                            </figure>
                            <div className="mx-2">
                                <h2 className=" line-clamp-1 text-justify capitalize">{Data.Name}</h2>
                                <h2 className='mt-2 '>$<span className='text-[#bc7c28] text-[18px]'>{Data.Price}</span></h2>
                                {/* <p className='line-clamp-2'>{Data.About}</p> */}
                                <div className="flex items-center justify-between py-2 ">
                                    <button onClick={()=>handelAddCard(Data)} className="px-2 border-2  border-orange-500  rounded-full">Add to card</button>
                                    <button className="px-2 border-2  border-orange-500  rounded-full">Details</button>
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