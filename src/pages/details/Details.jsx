import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { GlobalContext } from '../../context';

export const Details = () => {
  const { id } = useParams();
  const { recipeDetails, setRecipeDetails, handleAddToFavorites } =
    useContext(GlobalContext);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function getRecipeDetails() {
      setLoading(true);
      try {
        const response = await fetch(
          `https://forkify-api.herokuapp.com/api/v2/recipes/${id}`
        );
        if (!response.ok) {
          throw new Error(`Something Went Wrong | ${response.status}`);
        }
        const data = await response.json();

        if (data?.data && data?.data?.recipe) {
          setRecipeDetails(data?.data?.recipe);
        }
      } catch (e) {
        setError(e);
      } finally {
        setLoading(false);
      }
    }
    getRecipeDetails();
  }, [id]);

  if (loading) {
    return (
      <div className='text-center lg:text-4xl text-xl text-black font-extrabold'>
        Loading Data Please Wait
      </div>
    );
  }

  if (error) {
    return <div>Something Went Wrong | {error.message}</div>;
  }

  return (
    <div className='container mx-auto py-10 grid grid-cols-1 lg:grid-cols-2 gap-10'>
      <div className='row-start-2 lg:row-start-auto'>
        <div className='h-96 overflow-hidden rounded-xl group'>
          <img
            loading='lazy'
            src={recipeDetails?.image_url}
            alt={`recipe image ${recipeDetails?.title}`}
            className='w-full h-full object-cover block group-hover:scale-105 duration-300'
          />
        </div>
      </div>
      <div className='flex flex-col gap-3'>
        <span className='text-sm text-cyan-700 font-md'>
          {recipeDetails?.publisher}
        </span>
        <h3 className='text-2xl font-bold truncate text-black'>
          {recipeDetails?.title}
        </h3>
        <div>
          <button
            onClick={() => handleAddToFavorites(recipeDetails)}
            className='p-3 px-8 rounded-lg text-sm uppercase font-md tracking-wider mt-3 shadow-md inline-block bg-black text-white hover:text-cyan-700'
          >
            Save as Favorites
          </button>
        </div>
        <div>
          <span className='text-2xl font-semibold text-black'>Ingredients</span>
          <ul className='flex flex-col gap-3'>
            {recipeDetails?.ingredients.map((ing, i) => (
              <li key={i}>
                <span className='text-2xl font-semibold text-black'>
                  {ing.quantity} {ing.unit}
                </span>
                <span className='text-2xl font-semibold text-black'>
                  {' '}
                  - {ing.description}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};
