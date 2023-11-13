import React from 'react';
import { Link } from 'react-router-dom'
const Product = ({ product }) => {
  return (
    <Link to={`/product/${product.id}`}>
      <div className='group w-full h-[360px] rounded-[8px] grad overflow-hidden relative'>

        {/* badge */}

        {(product.attributes.isNew) ? (<div div className='rounded-[8] z-10 absolute top-4 right-4 bg-accent text-primary
         px-2 rounded-full uppercase font-extrabold text-[12px]'>New</div>
        ) : (
          ''
        )}

        {/* image */}
        <div className='w-full h-[200px] flex items-center justify-center relative'>
          <img
            className='w-[160px] h-[160px] group-hover:scale-90 transition-all'
            src={`http://localhost:1337${product.attributes.image.data.attributes.url}`}
            alt=''
          />
        </div>

        {/* text */}
        <div className='px-6 pb-8 flex flex-col'>
          {/*category title  */}
          <div className='text-sm text-accent capitalize mb-2'>{product.attributes.categories.data[0].attributes.title}</div>
          {/* title */}
          <div className='text-[15px] mb-4 lg:mb-9'>{product.attributes.title.substring(0, 35)}...</div>
          {/* price */}
          <div className='text-lg text-accent'>${product.attributes.price}</div>
        </div>

      </div>

    </Link >

  );
};

export default Product;
