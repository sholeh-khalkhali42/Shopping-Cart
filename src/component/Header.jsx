import React from 'react';

export const Header = () => {
  return (
    <>
      <h1 className='font-extrabold text-center text-4xl my-10 text-pink-600'>
        Shop the Latest Fashion Trends
      </h1>
      <p className='text-gray-700 text-center mt-4 text-lg'>
        Discover stylish outfits at unbeatable prices
      </p>
      <div className='flex justify-center mt-6'>
        <button className='bg-pink-600 mb-20 text-white font-semibold py-2 px-4 rounded hover:bg-pink-700 transition duration-300'>
          Shop Now
        </button>
      </div>
    </>
  );
}