import { Helmet } from "react-helmet";
import { Link, useParams } from "react-router-dom";
import { useGetProductByIdQuery } from "../slice/productApi.js";
import { ProductForm } from "./productForm.jsx";

export const ProductDetails = () => {
  const { productID } = useParams();
  const { data: product, error, isLoading } = useGetProductByIdQuery(productID);

  if (isLoading) return <p className="text-center text-lg">Loading...</p>;
  if (error) return <p className="text-center text-lg text-red-600">There was an error loading the product.</p>;

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-10 bg-gray-50">
      <Helmet><title>{product.title}</title></Helmet>
      <div className="w-full md:w-1/2 max-w-md border rounded-lg shadow-lg bg-white flex p-5">
        <div className="relative mr-5">
          <img 
            src={`/images/${product.sticker}`} 
            alt={product.title}
            className="h-80 w-full object-cover rounded-lg transition-transform duration-500 ease-in-out transform hover:scale-105"
          />
        </div>
        
        <div className="flex flex-col justify-between">
          <div className="mb-5">
            <h1 className="text-3xl font-bold text-gray-800">{product.title}</h1>
            <p className="text-lg text-gray-600 mt-2">{product.description}</p>
            <span className="font-medium text-lg text-gray-800 mt-2">{product.price}$</span>
          </div>
          <ProductForm product={product} />
        </div>
      </div>
      <Link to="/" className="mt-5 text-blue-600 hover:underline">Back to Home</Link>
    </div>
  );
};