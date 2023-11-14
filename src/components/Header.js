import React, { useContext, useState } from 'react';

// images
import Logo from '../img/logo.png'

// icons
import { SlBag } from 'react-icons/sl';
import { FiMenu } from 'react-icons/fi';

// link
import { Link } from 'react-router-dom';

// components
import SearchForm from '../components/SearchForm'
import CategoryNavMobile from '../components/CategoryNavMobile'
import Cart from '../components/Cart'

// cart context
import { CartContext } from '../context/CartContext';

const Header = () => {

  const { isOpen, setIsOpen, itemsAmount } = useContext(CartContext);
  const [catNavMobile, setCatnavMobile] = useState(false);


  return (
    <header className='bg-primary py-6 fixed w-full top-0 z-40 lg:relative xl:mb-[30px]'>
      <div className="container mx-auto">
        <div className='flex flex-row gap-4 lg:items-center justify-between xl:mb-0'>

          {/* menu */}
          <div onClick={() => setCatnavMobile(true)} className='xl:hidden text-3xl cursor-pointer'><FiMenu /></div>

          {/* category nav mobile */}
          <div className={`${catNavMobile ? 'left-0' : '-left-full'}  fixed top-0 bottom-0 z-30 w-full h-screen transition-all duration-200`} >
            <CategoryNavMobile setCatnavMobile={setCatnavMobile} />
          </div>

          {/* logo */}

          <Link to={'/'}>
            <img src={Logo} alt="" />
          </Link>



          {/* searchform - show only on deskop */}
          <div className='hidden w-full xl:flex xl:max-w-[734px]  '>
            <SearchForm />
          </div>
          {/* phone & cart  */}
          <div className='flex items-center gap-x-[10px]'>
            {/* phone */}
            <div className='hidden xl:flex uppercase'>Need help? 123 456 798</div>
            {/* cart icon */}
            <div className='relative cursor-pointer'>
              <SlBag onClick={() => setIsOpen(!isOpen)} className='text-2xl' />
              {/* amount */}
              <div className='bg-accent text-primary absolute w-[18px] h-[18px] rounded-full top-3 
              right-0  text-[13px] flex justify-center items-center font-bold tracking-[-0.1em]'>{itemsAmount}</div>

              {/* cart */}
              <div
                className={`
                 ${isOpen ? 'right-0' : '-right-full'}
                 bg-[#0e0f10] shadow-xl fixed top-0 bottom-0 w-full z-10 md:max-w-[500px] transition-all duration-300]`}>
                <Cart />
              </div>

            </div>

          </div>
        </div >
        {/* searchform - show on mobile only */}
        < div className='lg:hidden'>
          <SearchForm />
        </ div>
      </div >
    </header >
  );
};

export default Header;
