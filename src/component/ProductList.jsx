import { useSelector } from "react-redux";
import { useGetAllProductsQuery } from "../slice/productApi.js";
import { ProductCard } from "./ProductCard.jsx";

export const ProductList = ({currentProducts,status}) => {
 //   const { data } = useGetAllProductsQuery();
//const {status}=useSelector(state=>state.products)
    return (
        <>
            <div className="max-w-4xl grid grid-cols-3 mx-auto">
                {status === "success" ? (
                    <>
                        {currentProducts?.map((product, index) => (
                            <ProductCard key={index} product={product} />
                        ))}
                    </>
                ) : status === "pending" ? (
                    <p>is loading.....</p>
                ) : (
                    <p>it is problem</p>
                )}
            </div>
            </>
      
    );
};
