import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react'

// import swiper styles
import 'swiper/css';
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import '../slider.css'
// import required modules

// import required modules
import { Pagination } from 'swiper'

// img
import CameraImg from './../img/camera.png';

// data
const sliderData = [
  {
    img: CameraImg,
    pretitle: 'Special offer',
    titlePart1: 'Save 20%',
    titlePart2: 'On your',
    titlePart3: 'first order',
    btnText: 'Shop Now'
  },
  {
    img: CameraImg,
    pretitle: 'Special offer',
    titlePart1: 'Save 20%',
    titlePart2: 'On your',
    titlePart3: 'first order',
    btnText: 'Shop Now'
  },
  {
    img: CameraImg,
    pretitle: 'Special offer',
    titlePart1: 'Save 20%',
    titlePart2: 'On your',
    titlePart3: 'first order',
    btnText: 'Shop Now'
  },
]

const MainSlider = ({ data }) => {
  return <Swiper modules={[Pagination]} loop={true}
    pagination={{
      clickable: true,
    }}
    className='mainSlider h-full xl:bg-mainSlider max-w-[360px] md:max-w-lg xl:max-w-[1410px] xl:bg-no-repeat max-w-lg lg:max-w-none rounded-[8px] overflow-hidden drop-shadow-2xl '
  >
    <>
      {sliderData.map((slide, index) => (
        <SwiperSlide key={index} >
          <div className='flex flex-col lg:flex-row h-full p-[20px] md:[60px]'>
            {/* text */}
            <div className='w-full lg:flex-1'>
              <div className='uppercase mb-1 text-center lg:text-left'>
                {slide.pretitle}
              </div>
              <div className='text-3xl md:text-[46px] font-semibold uppercase leading-none text-center lg:text-left mb-8 xl:mb-20'>
                {slide.titlePart1}   <br />
                {slide.titlePart2}   <br />
                {slide.titlePart3}
              </div>
              <button className='btn btn-accent mx-auto lg:mx-0'>Shop Now</button>

            </div>
            {/* img */}
            <div className='flex-1'>
              <img className='xl:absolute xl:right-0 xl:-bottom-12' src={slide.img} alt="" />
            </div>
          </div>
        </SwiperSlide>
      ))}
    </>
  </Swiper >;
};

export default MainSlider;

