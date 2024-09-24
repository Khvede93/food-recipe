import React, { useContext } from 'react';
import { GlobalContext } from '../../context';
import { RecipeItem } from '../../components';

export const Favorites = () => {
  const { favoritesList } = useContext(GlobalContext);

  return (
    <div className='py-8 container mx-auto flex flex-wrap justify-center gap-10'>
      {favoritesList && favoritesList.length ? (
        favoritesList.map((item) => <RecipeItem key={item.id} item={item} />)
      ) : (
        <div>
          <p className='lg:text-4xl text-xl text-black font-extrabold'>
            Nothing is Added in Favorites.
          </p>
        </div>
      )}
    </div>
  );
};
