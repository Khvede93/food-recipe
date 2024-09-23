import React, { useContext } from 'react';
import { GlobalContext } from '../../context';
import { RecipeItem } from '../../components';

export const Home = () => {
  const { loading, error, recipeList } = useContext(GlobalContext);

  return (
    <div className='py-8 container mx-auto flex flex-wrap justify-center gap-10'>
      {recipeList && recipeList.length ? <RecipeItem /> : null}
    </div>
  );
};
