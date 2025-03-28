import { Link } from 'react-router-dom';
import { useGetCategoryQuery } from '../../../Redux/features/api/baseApi';
import { motion } from 'framer-motion';
import CategorySkeleton from './CategorySkeleton';



const Category = () => {
    const {data=[],isLoading}=useGetCategoryQuery()
    if(isLoading){
<div>Loading....</div>
    }
    // const AllProducts="AllProducts"
    return (
        <div className='pt-20 bg-white bg-opacity-50  fixed w-[20vw] border-r-2 border-slate-500   h-screen overflow-y-scroll md:mx-4'>
            <h1 className='text-[16px] font-semibold text-center text-shadow-lg' >Category</h1>
            <div hidden={isLoading} className='grid md:grid-cols-2 grid-cols-1 md:gap-4 gap-y-2 md:gap-y-0 mx-2 mt-2'>
                {
                    data
                    ?.slice().sort((a, b) => (a.Name === "All Products" ? -1 : b.Name === "allProducts" ? 1 : 0))
                    .map((Data, index)=>(
                        <Link key={index} to={`mainPage/${Data.Name}`}>
                        <motion.div 
                          whileHover={{ scale: [null, 0.9] }}
                          transition={{ duration: 0.2 }}
                        className='text-center border rounded shadow-xl cursor-pointer'>
                            <img className='md:h-28 h-20 w-full' src={Data.image} alt="" />
                            <h1>{Data.Name}</h1>
                        </motion.div>
                        </Link>
                    ))
                    
                }
            </div>
            <div hidden={!isLoading}>
                <CategorySkeleton></CategorySkeleton>
            </div>
        </div>
    );
};

export default Category;