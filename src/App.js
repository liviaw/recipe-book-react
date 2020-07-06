import React, {useEffect, useState} from 'react';
import './App.css';
import Recipe from './Recipe';

function App() {
  const APP_ID = "b49ec504";
  const APP_KEY = "33522b2e17b1f99cd05e75d24abcfb34";

  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("chicken");

  const request = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`;
  useEffect(() => {
    console.log(`b4 Effect use`);
    getRecipes();
  }, [query]);

  const getRecipes= async () => {
    const response = await fetch(request);
    const data = await response.json();
    setRecipes(data.hits);
    
  }

  const updateSearch = (event) => {
    event.preventDefault();
    setSearch(event.target.value);
  }

  const getSearch = (event) => {
    // prevent default will not stop useEffect, but it stops you from automatically
    // refreshing the page when submitting
    event.preventDefault();
    setQuery(search);
    setSearch("");
  }

  return (
    <div className="App">
      <form className="search-form" onSubmit={getSearch}>
        <input className="search-bar" type="text" value={search} onChange={updateSearch}/>
        <button 
          className="search-button" 
          type="submit">
          Search
        </button>
      </form>
      <div className="recipes">
        {recipes.map((recipe, index) => (
          <Recipe key={recipe.recipe.label} 
            title={recipe.recipe.label} 
            calories={recipe.recipe.calories}
            image={recipe.recipe.image}
            ingredients={recipe.recipe.ingredients}/>
        ))}
      </div>
    </div>
  );
}

export default App;
