import React from 'react';

export const Navbar = () => {
  return (
    <nav className='flex flex-col lg:flex-row justify-between items-center py-8 container mx-auto gap-5 lg:gap-0'>
      <h2 className='text-2xl font-semibold'>Site Logo</h2>
      <form>
        <input
          type='text'
          name='search'
          placeholder='Enter Items ...'
          className='p-3 px-8 rounded-full outline-none lg:w-96 bg-white/75 shadow-lg shadow-gray-100 focus:shadow-gray-200'
        />
      </form>
    </nav>
  );
};
