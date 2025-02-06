import { createAsyncThunk,createSlice } from "@reduxjs/toolkit";
import axios from 'axios'

const initialState={
    items:[],
    status:null,
};
export const fetchProducts=createAsyncThunk("/product/fetchProduct",
    async()=>{
try{
 const response=await  axios.get("http://localhost:9000/stikers");
 console.log("stikers frpm product", response.data);
 return response.data;
}catch(err){
console.log(err);
}

});
const productsSlice=createSlice({
    name:"products",
    initialState,
    reducers:{},
    extraReducers:{
     
        [fetchProducts.pending]:(state,action)=>{
            state.status="pending";
        },
        [fetchProducts.fulfilled]:(state,action)=>{
             state.items=action.payload;
             console.log("action.paylod", action.payload);
             state.status="success";
        },
        [fetchProducts.rejected]:(state,action)=>{ 
            state.status="rejected";
        }
    }
})
export default productsSlice.reducer;