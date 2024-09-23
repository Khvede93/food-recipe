import { createContext, useState } from 'react';

export const GlobalContext = createContext(null);

export default function GlobalState({ children }) {
  const [searchParam, setSearchParam] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [recipeList, setRecipeList] = useState([]);
  const [recipeDetails, setRecipeDetails] = useState(null);
  const [favoritesList, setFavoritesList] = useState([]);

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    setError(null);
    try {
      const response = await fetch(
        `https://forkify-api.herokuapp.com/api/v2/recipes?search=${searchParam}`
      );
      if (!response.ok) {
        throw new Error(`Something went wrong | ${response.status}`);
      }
      const data = await response.json();
      if (data?.data?.recipes) {
        setRecipeList(data?.data?.recipes);
        setSearchParam('');
      }
    } catch (e) {
      setError(e.message);
      setSearchParam('');
    } finally {
      setLoading(false);
    }
  }

  function handleAddToFavorites(getCurrentRecipe) {
    let cpyFavoritesList = [...favoritesList];
    const index = cpyFavoritesList.findIndex(
      (item) => item.id === getCurrentRecipe.id
    );
    console.log(index);
    if (index === -1) {
      cpyFavoritesList.push(getCurrentRecipe);
    } else {
      cpyFavoritesList.splice(index);
    }
    setFavoritesList(cpyFavoritesList);
  }

  return (
    <GlobalContext.Provider
      value={{
        searchParam,
        setSearchParam,
        handleSubmit,
        loading,
        error,
        recipeList,
        recipeDetails,
        setRecipeDetails,
        handleAddToFavorites,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
}
