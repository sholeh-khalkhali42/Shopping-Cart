import { Link } from 'react-router-dom';

export const ProductCard = ({ product }) => {
  if (!product) return <p className="text-center text-lg">Nothing to display</p>;

  const { id, title, price, sticker, description } = product;

  return (
    <Link to={`/product/${id}`} className="mx-auto">
      <div className="h-80 w-72 shadow-lg rounded-lg overflow-hidden bg-white mb-10 transition-transform duration-300 hover:shadow-xl hover:scale-105">
        <div className="h-40 border-b relative">
          <img 
            src={`/images/${sticker}`} 
            alt={title} 
            className="w-full h-full object-cover transform duration-500 ease-in-out hover:scale-110"
          />
        </div>
        <div className="h-24 p-4 flex flex-col justify-between">
          <div className="font-bold text-gray-800 text-lg">
            {title} - <span className="text-green-600">{price}$</span>
          </div>
          <div className="text-gray-500 text-sm">
            {description}
          </div>
        </div>
      </div>
    </Link>
  );
};