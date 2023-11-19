import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa'
const Footer = () => {
  return <footer>
    <div className='container mx-auto'>
      <div className='text-center'>
        <h2 className='h2 uppercase mb-6 font-semibold'>subscribe to our newsletter</h2>
        <p className='text-white/70'>
          Be the first to get the latest new about trends, promotions and much more!
        </p>
      </div>
      {/* form */}
      <form className='w-full max-w-3xl mx-auto flex flex-col md:flex-row gap-5 my-14'>
        <input
          className='input'
          type="text" placeholder='your email address' />
        <button className='btn btn-accent min-w-[150px]'>Join </button>
      </form>
      {/* links */}
      <div className='text-base text-white/60 flex gap-x-6 capitalize max-w-max mx-auto mb-9'>
        <a href="#" className='hover:text-white transition-all'>Returns policy</a>
        <a href="#" className='hover:text-white transition-all'>Track your order</a>
        <a href="#" className='hover:text-white transition-all'>shipping & delivery</a>

      </div>
      {/* socials */}
      <div className='flex gap-x-6 text-lg mb-16 max-w-max mx-auto mb-16'>
        <a href="#" className='hover:text-white transition-all'>
          <FaYoutube />
        </a>
        <a href="#" className='hover:text-white transition-all'>
          <FaTwitter />
        </a>
        <a href="#" className='hover:text-white transition-all'>
          <FaFacebook />
        </a>
        <a href="#" className='hover:text-white transition-all'>
          <FaInstagram />
        </a>
      </div>

      {/* copyrights */}
      <div className='py-10 border-t-white/10'>
        <div className='container mx-auto'>
          <div className='text-center text-sm text-white/60'>
            Copyrights &copy; Photoland 2023. All Rights reserved</div>
        </div>
      </div>
    </div>

  </footer>;
};

export default Footer;
