import React, {useEffect, useState} from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const APP_ID = "b49ec504";
  const APP_KEY = "33522b2e17b1f99cd05e75d24abcfb34";
  const RECIPE = "chicken";

  const [counter, setCounter] = useState(0);

  const request = `https://api.edamam.com/search?q=${RECIPE}&app_id=${APP_ID}&app_key=${APP_KEY}`;
  useEffect(() => {
    console.log(`Effect use`);
  });

  return (
    <div className="App">
      <form className="search-form">
        <input className="search-bar" type="text" />
        <button 
          onClick={(e) => { console.log(e.target.value); setCounter(counter + 1)}} 
          className="search-bar" 
          type="text">
          Search
          {counter}
        </button>
      </form>
    </div>
  );
}

export default App;
