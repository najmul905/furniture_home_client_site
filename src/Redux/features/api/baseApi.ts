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
interface LatestProducts{
    Name:string,
    About:string,
    Image:string,
    Price:number,
    _id:string|number,
    Date:string
    }   
interface user_growth{
    _id:string|number,
    month:string,
    users:number
} 
interface sales_growth{
    _id:string|number,
    month:string,
    sales:number}
  interface Users{
    name:string,
    email:string,
    image:string,
    userStatus:string,
    _id:string|number
  }  

export const baseApi=createApi({
    reducerPath: "api",
    baseQuery: fetchBaseQuery({baseUrl:'http://localhost:3000/'}),
    tagTypes:["Products","Users"],
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
        getUsers:builder.query<Users[],void>({
            query:()=>"users",
            providesTags:["Users"]
        })
        ,
        getUserGrowth:builder.query<user_growth[],void>({
            query:()=>"users_growth"
        }),
        getSalesGrowth:builder.query<sales_growth[],void>({
            query:()=>"sales_growth"
        }),
        getLatestProducts:builder.query<LatestProducts[],void>({
            query:()=>"latest_products"
        })
        ,
        addProducts:builder.mutation({
            query:(data)=>({
                url:"products",
                method:"POST",
                body:data
            }),
            invalidatesTags:["Products"]
        }),
        addLatestProduct:builder.mutation({
            query:(data)=>({
                url:"latest_products",
                method:"POST",
                body:data
            })
        }),
        addOrderProducts:builder.mutation({
            query:(data)=>({
                url:"orderProducts",
                method:"POST",
                body:data
            })
        }),
        addUser:builder.mutation({
            query:(data)=>({
                url:"users",
                method:"POST",
                body:data
            })
        }),
        UpdateUserStatus:builder.mutation({
            query:({id,data})=>({
                url:`user/${id}`,
                method:"PATCH",
                body:data
            }),
            invalidatesTags:["Users"]
        })
        ,
        deleteUser:builder.mutation({
            query:(id)=>({
                url:`user/${id}`,
                method:"DELETE",
                
            }),
            invalidatesTags:["Users"]
            
        })
    })
})

 export const {useGetBestSellingQuery,useGetLatestProductsQuery,useGetCategoryQuery,useAddProductsMutation,useGetProductsDataQuery,useAddLatestProductMutation,useAddOrderProductsMutation,useAddUserMutation,useGetUsersQuery,useDeleteUserMutation,useUpdateUserStatusMutation,useGetUserGrowthQuery,useGetSalesGrowthQuery}=baseApi