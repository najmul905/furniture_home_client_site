import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
interface BestSellingItem {
    _id: number|string;
    Name: string;
    Price: number;
    Image:string;
    Ratings:number
    // Add more properties as necessary
}
interface Category{
    Name:string,
    _id:number|string,
    image:string
}
interface Products{
    Name:string,
    About:string,
    Category:string,
    Image:string,
    Price:number,
    Discount:number,
    _id:number|string
    }

export const baseApi=createApi({
    reducerPath: "api",
    baseQuery: fetchBaseQuery({baseUrl:'http://localhost:3000/'}),
    tagTypes:['Products'],
    endpoints:(builder)=>({
        getBestSelling:builder.query<BestSellingItem[],void>({
            query:()=>'best_selling'
        }),
        getCategory:builder.query<Category[],void>({
            query:()=>'category'
        }),
        getProductsData:builder.query<Products[],void>({
            query:()=>"products",
            providesTags:["Products"]
        }),
        addProducts:builder.mutation({
            query:(data)=>({
                url:"products",
                method:"POST",
                body:data
            }),
            invalidatesTags:["Products"]
        })
    })
})

 export const {useGetBestSellingQuery,useGetCategoryQuery,useAddProductsMutation,useGetProductsDataQuery}=baseApi