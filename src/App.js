import React, {useEffect, useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Recipe from './Recipe';

function App() {
  const APP_ID = "b49ec504";
  const APP_KEY = "33522b2e17b1f99cd05e75d24abcfb34";

  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("chicken");

  const request = `https://api.edamam.com/search?q=${search}&app_id=${APP_ID}&app_key=${APP_KEY}`;
  useEffect(() => {
    console.log(`b4 Effect use`);
    getRecipes();
  }, [search]);

  const getRecipes= async () => {
    const response = await fetch(request);
    const data = await response.json();
    setRecipes(data.hits);
    
  }

  const updateSearch = (event) => {
    event.preventDefault();
    console.log("change");
    setSearch(event.target.value);
    console.log("serhing.. " + search);
  }

  const getSearch = (event) => {
    event.preventDefault();
  }

  return (
    <div className="App">
      <form className="search-form">
        <input className="search-bar" type="text" value={search} onChange={updateSearch}/>
        <button 
          className="search-button" 
          type="submit">
          Search
        </button>
      </form>
      {recipes.map((recipe, index) => (
        <Recipe key={recipe.recipe.label} 
          title={recipe.recipe.label} 
          calories={recipe.recipe.calories}
          image={recipe.recipe.image}/>
      ))}
    </div>
  );
}

export default App;
