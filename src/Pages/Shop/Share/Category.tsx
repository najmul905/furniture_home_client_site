import { Link } from 'react-router-dom';
import { useGetCategoryQuery } from '../../../Redux/features/api/baseApi';

const Category = () => {
    const {data=[],isLoading}=useGetCategoryQuery()
    if(isLoading){
<div>Loading....</div>
    }
    return (
        <div className='pt-20 bg-white bg-opacity-50  fixed w-[20vw] border-r-2 border-slate-500   h-screen overflow-y-scroll mx-4'>
            <h1 className='text-[16px] font-semibold text-center text-shadow-lg' >Category</h1>
            <div className='grid grid-cols-2 gap-4 mx-2 mt-2'>
                {
                    data?.map((Data,index)=>(
                        <Link key={index} to={`mainPage/${Data.Name}`}>
                        <div  className='text-center border rounded shadow-xl cursor-pointer'>
                            <img className='h-28 w-full' src={Data.image} alt="" />
                            <h1>{Data.Name}</h1>
                        </div>
                        </Link>
                    ))
                    
                }
            </div>
        </div>
    );
};

export default Category;