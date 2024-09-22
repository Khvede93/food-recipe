import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { GlobalContext } from '../../context';

export const Navbar = () => {
  const { searchParam, setSearchParam } = useContext(GlobalContext);

  return (
    <nav className='flex flex-col lg:flex-row justify-between items-center py-8 container mx-auto gap-5 lg:gap-0'>
      <h2 className='text-2xl font-semibold'>
        <NavLink to={'/'}>Site Logo</NavLink>
      </h2>
      <form>
        <input
          autoComplete='off'
          value={searchParam}
          onChange={(e) => setSearchParam(e.target.value)}
          type='text'
          name='search'
          placeholder='Enter Items ...'
          className='p-3 px-8 rounded-full outline-none lg:w-96 bg-white/75 shadow-lg shadow-gray-100 focus:shadow-gray-200'
        />
      </form>
      <ul className='flex gap-5'>
        <li>
          <NavLink
            to={'/'}
            className='text-black hover:text-gray-700 duration-300'
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to={'/favorites'}
            className='text-black hover:text-gray-700 duration-300'
          >
            Favorites
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};
