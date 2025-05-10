import { useGetBestSellingQuery, useGetLatestProductsQuery, useGetProductsDataQuery, useGetUsersQuery } from "../../../../Redux/features/api/baseApi";

const AllProductsReview = () => {
    const {data:bestSell}=useGetBestSellingQuery()
    const {data:Products}=useGetProductsDataQuery()
    const {data:Users}=useGetUsersQuery()
    const {data:LatestProducts}=useGetLatestProductsQuery()
    
    return (
        <div>
            <div className="grid md:grid-cols-5 grid-cols-2 gap-4">
                <div className="h-[100px] border rounded p-4 bg-[#F5F5DC]">
                    <h1 className="text-[18px] font-semibold font-TestimonialFont">Selling Revenue</h1>
                    <p className="text-[18px] font-bold">$45903</p>
                </div>
                <div className="h-[100px] border rounded p-4 bg-[#959567]">
                <h1  className="text-[18px] font-semibold font-TestimonialFont">Best Sell Products</h1>
                <p className="text-[18px] font-bold">{bestSell?.length}</p>
                </div>
                <div className="h-[100px] border rounded p-4 bg-[#929257]">
                <h1  className="text-[18px] font-semibold font-TestimonialFont">Total Products</h1>
                <p className="text-[18px] font-bold">{Products?.length}</p>
                </div>
                <div className="h-[100px] border rounded p-4 bg-[#79c4b9]">
                <h1 className="text-[18px] font-semibold font-TestimonialFont">Total Latest Products</h1>
                <p className="text-[18px] font-bold">{LatestProducts?.length}</p>
                </div>
                <div className="h-[100px] border rounded p-4 bg-[#4ca68b]">
                <h1  className="text-[18px] font-semibold font-TestimonialFont">Now Total Users</h1>
                <p className="text-[18px] font-bold">{Users?.length}</p>
                </div>
            </div>
        </div>
    );
};

export default AllProductsReview;