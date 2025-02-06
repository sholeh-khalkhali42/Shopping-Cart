import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import './index.css'
import App from './App.jsx'
import { store } from './store/index.js'
import {  createBrowserRouter, RouterProvider } from 'react-router-dom'
import { NotFound } from './component/notFound.jsx'
import { ToastContainer } from 'react-toastify'
import { MainLayout } from './component/MainLayout.jsx'
import { ProductDetails } from './component/ProductDetails.jsx'
import "react-toastify/dist/ReactToastify.css"
import { CartTable } from './component/CartTable.jsx'

const router=createBrowserRouter([
  {
    path:"/",
    element:<App/>,
    errorElement:<NotFound/>,

  },
  {
    path:"/product/:productID",
    element:(<MainLayout><ProductDetails/></MainLayout>),
    

  },
  {
    path:"/cart",
    element:(<CartTable/>),
    

  }

])
createRoot(document.getElementById('root')).render(
  <StrictMode>
  <Provider store={store}>
 
  
<RouterProvider router={router}/>
<ToastContainer/>
    </Provider>
   
  </StrictMode>
)
