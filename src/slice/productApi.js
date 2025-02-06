import {createApi,fetchBaseQuery} from "@reduxjs/toolkit/query/react";
export const productApi=createApi({
    reducerPath:"productsApi",
    baseQuery:fetchBaseQuery({baseUrl:"http://localhost:9000"}),
        endpoints:(builder)=>({
    getAllProducts:builder.query({
     query:()=>"stikers",
        }),
   getProductById:builder.query({
    query:(id)=>`stikers/${id}`,
   })
  }),
});
export const{useGetAllProductsQuery,useGetProductByIdQuery}=productApi;