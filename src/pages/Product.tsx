import React from 'react';
import { useNavigate } from 'react-router-dom';

type Images = {
  src: string;
  alt: string;
};

type Props = {
  title: string;
  description: string;
  images: Images[];
  price?: number;
};

const Product = (props: Props) => {
  const navigate = useNavigate();

  const handlePayClick = () => {
    // Navigate to the checkout page when the "Buy now" button is clicked
    navigate('/checkout');
  };

  return (
    <div className='container p-0 mt-10 border-l border-r border-b rounded grid grid-cols-3'>
      <img className='col-span-3' src={props.images[0].src} alt={props.images[0].alt} />
      <div className='col-span-2'>
        <h1 className='text-4xl font-bold border-b p-6'>{props.title}</h1>
        <p className='text-gray-900 p-6'>{props.description}</p>
        <div className='border-l p-6 flex flex-col'>
          <button onClick={handlePayClick} className='bg-indigo-500 text-white hover:bg-indigo-600 font-bold rounded'>
            Buy now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Product;
