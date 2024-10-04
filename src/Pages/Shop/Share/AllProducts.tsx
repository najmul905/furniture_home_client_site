import { useParams } from 'react-router-dom';
import { useGetProductsDataQuery } from '../../../Redux/features/api/baseApi';
import { useEffect, useState } from 'react';

const AllProducts = () => {
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
    console.log(category)
    const { data, isLoading } = useGetProductsDataQuery()
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
    console.log(CategoryData)

    if (isLoading) {
        <div className=''>
            <h1>Loading...</h1>
        </div>
    }
    return (
        <div className='grid grid-cols-4 gap-6'>
            {
                CategoryData?.map((Data, index) => (
                    <div key={index}>
                        <div className="rounded-lg bg-base-100 my-5 shadow-xl">
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
                                    <button className="px-2 border-2  border-orange-500  rounded-full">Add to card</button>
                                    <button className="px-2 border-2  border-orange-500  rounded-full">Details</button>
                                </div>
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
    );
};

export default AllProducts;