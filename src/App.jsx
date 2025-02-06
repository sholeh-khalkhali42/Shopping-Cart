import { MainLayout } from './component/MainLayout.jsx'
import { Helmet } from 'react-helmet'
import { Header } from './component/Header.jsx'
import { ProductList } from './component/ProductList.jsx'
import React, { useState } from 'react'
import ReactPaginate from 'react-paginate'
import { useSelector } from 'react-redux'

export const PaginateItems = ({ productPerPage, products, status }) => {
    const [itemOffset, setItemOffset] = useState(0);
    const endOffset = itemOffset + productPerPage;
    const currentProducts = products.slice(itemOffset, endOffset);
    console.log(currentProducts, "currentProducts");
    const pageCount = products.length > 0 ? Math.ceil(products.length / productPerPage) : 0;

    const handleClick = (e) => {
        console.log(e.selected, "e.selected");
        const newOffset = e.selected * productPerPage;
        setItemOffset(newOffset);
    }

    return (
        <>
            <ProductList currentProducts={currentProducts} status={status} />
            <ReactPaginate
                containerClassName='flex justify-center items-center mb-8 mt-10'
                pageClassName='block border border-gray-300 w-10 h-10 flex items-center justify-center rounded-md mr-2 text-gray-700 hover:bg-gray-200 transition duration-200'
                activeClassName='bg-gray-300 text-white'
                breakLabel="..."
                onPageChange={handleClick}
                pageRangeDisplayed={5}
                pageCount={pageCount}
                previousLabel={<span className='text-gray-700 hover:text-gray-900'>Previous</span>}
                nextLabel={<span className='text-gray-700 hover:text-gray-900'>Next</span>}
                renderOnZeroPageCount={null}
            />
        </>
    )
}

const App = () => {
    const { items: products, status } = useSelector(state => state.products);
    console.log(status);
    return (
        <MainLayout>
            <Helmet><title>Stickers Store</title></Helmet>
            <Header />
            <PaginateItems products={products} productPerPage={6} status={status} />
        </MainLayout>
    )
}

export default App;