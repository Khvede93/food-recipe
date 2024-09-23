import React, { useContext } from 'react';
import { GlobalContext } from '../../context';
import { RecipeItem } from '../../components';

export const Home = () => {
  const { loading, error, recipeList } = useContext(GlobalContext);

  if (loading) {
    return (
      <div className='text-center lg:text-4xl text-xl text-black font-extrabold'>
        Loading !!! Please Wait
      </div>
    );
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className='py-8 container mx-auto flex flex-wrap justify-center gap-10'>
      {recipeList && recipeList.length ? (
        recipeList.map((item) => <RecipeItem key={item.id} item={item} />)
      ) : (
        <div>
          <p className='lg:text-4xl text-xl text-black font-extrabold'>
            Nothing to show !!! please use Search
          </p>
        </div>
      )}
    </div>
  );
};
