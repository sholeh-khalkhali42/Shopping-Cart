import { configureStore,  getDefaultMiddleware } from '@reduxjs/toolkit'
import productsReducer, {fetchProducts} from '../slice/ProductSlice'
import cartReducer ,{ getTotal} from "../slice/cartSlice"
import { productApi } from '../slice/productApi'
export const store= configureStore({
    reducer:{
   products:productsReducer,
    cartme:cartReducer,
      [productApi.reducerPath]:productApi.reducer,
       },
   
middleware:(getDefaultMiddleware)=>getDefaultMiddleware().concat(productApi.middleware)
   




}) ;
store.dispatch(getTotal());

store.dispatch(fetchProducts());