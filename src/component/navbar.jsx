import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { getTotal } from "../slice/cartSlice";

export const Navbar = () => {
  const { cartItems } = useSelector(state => state.cartme);
  
  return (
    <header className='border-b border-blue-50 sticky top-0 z-20 bg-white shadow-md'>
      <div className='flex items-center justify-between mx-auto max-w-6xl p-4'>
        <Link to="/">
          <h1 className="flex no-underline">
            <span className="text-xl font-primery font-bold tracking-tight text-blue-600">
            Trend Shop
            </span>
          </h1>
        </Link>

        <Link to="/cart" className="relative flex items-center">
          <i className="fa fa-cart-arrow-down text-platte-primery text-2xl text-blue-300"></i>
          {cartItems.length > 0 && (
            <div className="absolute top-0 right-0 transform translate-x-1/2 -translate-y-1/2 bg-yellow-200 rounded-full p-1 text-xs text-center">
              <p>{cartItems.length}</p>
            </div>
          )}
        </Link>
      </div>
    </header>
  );
}