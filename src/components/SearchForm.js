import React, { useEffect, useState } from 'react';
import { FiSearch } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';

const SearchForm = () => {

  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState();
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsAnimating(false)
    }, 1000);
    // clean up the time out even
    return () => clearTimeout(timeout);
  })


  const handleSearchInput = (e) => {
    setSearchTerm(e.target.value)
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (searchTerm.length > 0) {
      navigate(`/search?query=${searchTerm}`)
      document.querySelector('input').value = '';
      setSearchTerm('');
    } else {
      setIsAnimating(true)
    }
  }

  return <form onSubmit={handleSubmit} className={`${isAnimating ? "animate-shake" : "animate-none"} relative w-full`}>
    <input
      onChange={handleSearchInput}
      className='input mt-2' type="text" placeholder='Search for a camera...' />

    <button className='btn btn-accent absolute top-2 right-0 rounded-tl-none rounded-bl-none'>
      <FiSearch className='text-xl' />
    </button>
  </form>;
};

export default SearchForm;
