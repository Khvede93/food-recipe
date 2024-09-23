import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { GlobalContext } from '../../context';

export const Details = () => {
  const { id } = useParams();
  const { recipeDetails, setRecipeDetails } = useContext(GlobalContext);
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
    <div>Loading Data Please Wait</div>;
  }

  if (error) {
    <div>Something Went Wrong | {error.message}</div>;
  }

  return <div>Details</div>;
};
