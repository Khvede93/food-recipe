import React from 'react';
import { Link } from 'react-router-dom';

export const RecipeItem = ({ item }) => {
  console.log(item);

  return (
    <div className='flex flex-col w-80 overflow-hidden p-5 bg-white/75 shadow-xl gap-5 border rounded-2xl border-white text-center'>
      <div className='h-40 flex justify-center overflow-hidden items-center rounded-xl'>
        <img
          src={item?.image_url}
          alt={`Recipe image for ${item?.title}`}
          className='w-full block'
        />
      </div>
      <div>
        <span className='text-sm text-cyan-700 font-medium'>
          {item?.publisher}
        </span>
        <h3 className='text-2xl font-bold truncate text-black'>
          {item?.title}
        </h3>
        <Link
          to={`/recipe-item/${item?.id}`}
          className='text-sm p-3 px-8 rounded-lg uppercase font-medium tracking-wider inline-block shadow-medium bg-black text-white mt-5 hover:text-cyan-700'
        >
          Details
        </Link>
      </div>
    </div>
  );
};
