import { useGetProductsDataQuery } from '../../../Redux/features/api/baseApi';

const AllProducts = () => {
    const { data, isLoading } = useGetProductsDataQuery()
    if (isLoading) {
        <div className=''>
            <h1>Loading...</h1>
        </div>
    }
    return (
        <div className='grid grid-cols-3 gap-6'>
            {
                data?.map((Data, index) => (
                    <div key={index}>
                        <div className="rounded-lg bg-base-100 my-5 shadow-xl">
                            <figure className=''>
                                <img
                                    className=' h-72 w-full'
                                    src={Data.Image}
                                    alt="Furniture" />
                            </figure>
                            <div className="mx-2">
                                <h2 className="card-title line-clamp-1 text-justify capitalize">{Data.Name}</h2>
                                <h2 className='my-4 '>$<span className='text-[#bc7c28] text-[18px]'>{Data.Price}</span></h2>
                                <p className='line-clamp-2'>{Data.About}</p>
                                <div className="flex items-center justify-between py-4 mx-4">
                                    <button className="px-2 border-2  border-orange-500  rounded-full">Buy Now</button>
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