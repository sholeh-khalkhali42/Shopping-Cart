
import { useState } from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addToCart } from '../slice/cartSlice';
export const ProductForm = ({product}) => {
    const [qty,setQty]=useState(1);
    const dispatch=useDispatch();
    const navigate=useNavigate();
    const handelAdd=(item)=>{
        dispatch(addToCart(item))
        
    }
    
    const updateQty=(e)=>{
     
            if (e.target.value > qty) {
                setQty(qty+1);
            } else {
                if(qty>0)
                setQty(qty-1);
            }
        }
       
       

  return (
   <>
   
    <div className='w-full'>
        <div className='flex justify-start space-x-2 w-full space-y-1 flex-grow-0 '>
            <label className="text-gray-500 text-base">count</label>
          
            <input name="quantity" value={qty} onChange={(e)=>updateQty(e)} type="number" id="quantity"
            min="1"  step="3" className='text-gray-900  form-input border border-gray-300'/>
{/* <p>there is  pruduct</p> */}
        </div>
    </div>
    <button className="fa fa-cart-arrow-down bg-cyan-200 text-lg p-2  mt-5 rounded
     border border-spacing-0 hover:bg-green-100"
    onClick={()=>handelAdd({...product,cartQty:qty})}>add to card</button>
   
   </>

  )
}
