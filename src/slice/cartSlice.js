import { toast } from "react-toastify";
import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  cartItems: localStorage.getItem("cartItems")
    ? JSON.parse(localStorage.getItem("cartItems"))
    : [],

  cartTotalQty: 0,
  cartTotalAmount: 0,
};
const cartSlice = createSlice({
  name: "cartme",
  initialState: initialState,
  reducers: {
    addToCart(state, action) {
      if (!action.payload || !action.payload.id) {
        console.error("Invalid payload add to cart action");
        return;
      }
      if(action.payload.cartQty){
        console.log(action.payload.cartQty,'carqty:')
      
      }
   const   {id}=action.payload;
      const exitingIndex = state.cartItems.findIndex(
        (item) => item.id === id
      );
      if (exitingIndex >= 0) {
        state.cartItems[exitingIndex] = {
          ...state.cartItems[exitingIndex],
          cartQty: state.cartItems[exitingIndex].cartQty + action.payload.cartQty,
        };
        toast.info("increased  product", { position: "bottom-right" });
      } else {
        let temp = { ...action.payload, cartQty:action.payload.cartQty };
        state.cartItems.push(temp);
        toast.info("add product", { position: "bottom-right" });
      }
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },
    getTotal(state, action) {
      let { total, qty } = state.cartItems.reduce(
        (cartTotal, cartItem) => {
          const { price, cartQty } = cartItem;
          const totalItem = price * cartQty;
          console.log( cartTotal.total,"cartTotal.total");
          console.log(  cartTotal.qty," cartTotal.qty");
          cartTotal.total += totalItem;
          console.log( cartTotal.total,"cartTotal.total");
          cartTotal.qty += cartQty;
           console.log(  cartTotal.qty," cartTotal.qty");

          console.log(cartTotal,"carttotal");
          return cartTotal;
        },
        {
          total: 0,
          qty: 0,
        }
      );
      total = parseFloat(total.toFixed());
      console.log(total,"total");
      state.cartTotalQty = qty;
      state.cartTotalAmount = total;
    },

    decreaseCart(state, action) {
       if (!action.payload || !action.payload.id) {
      console.error("Invalid payload for decreaseCart action");
      return;
    }

      const{id}=action.payload;
      const itemIndex = state.cartItems.findIndex(
        (item) => item.id === id
      );
      if (state.cartItems[itemIndex].cartQty > 1) {
        state.cartItems[itemIndex].cartQty -= 1;
        toast.info("count was decreased", { position: "bottom-left" });
      } else if (state.cartItems[itemIndex].cartQty === 1) {
        const nextCartItems = state.cartItems.filter(
          (item) => item.id !== action.payload.id
        );
        state.cartItems = nextCartItems;
        toast.error("product was delete ", { position: "bottom-left" });
      }
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },
    removeFromCart(state, action) {
      if (!action.payload || !action.payload.id) {
      console.error("Invalid payload for remove cart action");
      return;
    }

      const nextCartItems = state.cartItems.filter(
        (item) => item.id !== action.payload.id
      );
      if (nextCartItems.length < state.cartItems.length) {
        state.cartItems = nextCartItems;
        toast.error("product removed from cart ", {
          position: "bottom-left",
        });
        localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
      }
    }
  },
});

export const { addToCart, decreaseCart, removeFromCart, getTotal } =
  cartSlice.actions;
export default cartSlice.reducer;
