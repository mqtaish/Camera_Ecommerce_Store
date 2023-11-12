import React from 'react';

// useFetch Hook
import useFetch from '../hooks/useFetch.js'
// import components
import LatestProducts from '../components/LatestProducts.js';
import Hero from './../components/Hero.js'

const Home = () => {

  const { data } = useFetch('/products?populate=*&filters[isNew] = true')

  return (
    <section>
      <Hero />
      <LatestProducts data={data} />
    </section>
  );
};

export default Home;
