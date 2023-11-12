import React from 'react';
import ProductSlider from './ProductSlider';

const LatestProducts = ({ data }) => {
  return (
    <div className='mb-16'>
      <div className='container mx-auto'>
        <h2 className='h2 mb-6 text-center'>Latest Products</h2>
      </div>
      <ProductSlider data={data} />
    </div>
  );
};

export default LatestProducts;
