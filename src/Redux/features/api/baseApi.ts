import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
interface BestSellingItem {
    _id: number|string;
    Name: string;
    Price: number;
    Image:string;
    Ratings:number
    // Add more properties as necessary
}

export const baseApi=createApi({
    reducerPath: "api",
    baseQuery: fetchBaseQuery({baseUrl:'http://localhost:3000/'}),
    endpoints:(builder)=>({
        getBestSelling:builder.query<BestSellingItem[],void>({
            query:()=>'best_selling'
        })
    })
})

 export const {useGetBestSellingQuery}=baseApi