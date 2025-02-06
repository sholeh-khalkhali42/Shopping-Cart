import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart, decreaseCart, getTotal, removeFromCart } from '../slice/cartSlice';
import { Helmet } from 'react-helmet';
import {Link, useNavigate} from 'react-router-dom'
import { Navbar } from './navbar';

export const CartTable = () => {
    const cart = useSelector(state => state.cartme);
    const dispatch = useDispatch();
    const navigate=useNavigate();

    useEffect(() => {
        dispatch(getTotal())
    }, [cart, dispatch])

    const handleAddToCart = (product) => {
      

       console.log(product.cartQty,"cartqtyeeeeeeeeeeee");
      // console.log(action.payload.cartQty,"action.payload");

        dispatch(addToCart(product));
    }

    const handleDecreaseCart = (product) => {
        dispatch(decreaseCart(product));
    }

    const handleRemoveCart = (product) => {
        dispatch(removeFromCart(product));
    }

    const handleQty = (e, item) => {
        if (e.target.value > item.cartQty) {
         
            handleAddToCart({...item,cartQty:1  });

        } else {
            handleDecreaseCart(item);
        }
    }

    return (
        <>
            <div className='container mx-auto mb-20 min-h-screen'>
                <Helmet><title>Shop</title></Helmet>
                {cart.cartItems.length === 0 ? (
                    <div className='text-center mt-10'>
                        <p className='text-lg font-semibold mt-10 '> Cart ist Emty </p>
                        <div className='text-center mb-10'>
                <Link to='/' className='text-blue-600 mt-10  hover:underline'>Back to Home</Link>
            </div>
                    </div>
                ) : (
                    <>
                        <h1 className='text-4xl font-bold text-center my-8'>Your Shopping Cart</h1>
                        <div className='overflow-x-auto'>
                            <table className='min-w-full bg-white border border-gray-200'>
                                <thead>
                                    <tr className='bg-gray-100'>
                                        <th className='py-2 px-4 border-b'>Product</th>
                                        <th className='py-2 px-4 border-b'>Count</th>
                                        <th className='py-2 px-4 border-b'>Price</th>
                                        <th className='py-2 px-4 border-b'>Delete</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {cart.cartItems.map((item, index) => (
                                        <tr key={index} className='hover:bg-gray-50'>
                                            <td className='py-2 px-4 border-b flex items-center'>
                                                <img className='hidden sm:inline-flex h-9 w-9 mr-2' alt={item.title} src={ `/public/images/${item.sticker}`}/>
                                                <Link to={`/product/${item.id}`} className='text-blue-600 hover:underline'>
                                                    {item.title}
                                                </Link>
                                            </td>
                                            <td className='py-2 px-4 border-b'>
                                                <input
                                                    type="number"
                                                    value={item.cartQty}
                                                    onChange={(e) => handleQty(e, item)}
                                                    className='text-gray-900 form-input border rounded-md w-16 text-center'
                                                />
                                            </td>
                                            <td className='py-2 px-4 border-b'>{(item.price * item.cartQty).toFixed(2)} $</td>
                                            <td className='py-2 px-4 border-b'>
                                                <button onClick={() => handleRemoveCart(item)} className='text-red-600 hover:text-red-800'>
                                                    <i className='fa fa-times w-8 h-8'></i>
                                                </button>
                                            </td>
                                        </tr>
                                    ))}
                                    {cart.cartTotalAmount > 0 && (
                                        <tr className='text-center bg-gray-100'>
                                            <td colSpan="2" className='py-2 font-light text-gray-600'>Total:</td>
                                            <td className='py-2'>{cart.cartTotalAmount.toFixed(2)} $</td>
                                            <td></td>
                                        </tr>
                                    )}
                                </tbody>
                            </table>
                        </div>
                    </>
                )}
            </div>
            <div className='text-center mb-10'>
                <Link to='/' className='text-blue-600 hover:underline'>Back to Home</Link>
            </div>
        </>
    );
};
