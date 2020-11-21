import React,{useEffect, useState} from 'react';
import './App.css';
import Recipe from './components/Recipe';

function App() {

  const  APP_ID = "056e462d";
  const APP_KEY = "8ec0bd7b9d23dd10ebbfe2dd74ea12fd";
  const result =`https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`;
  const[recipes,setRecipes] =useState([]); 
  

  useEffect(()=>{
    getRecipes()
  },[])

  const getRecipes = async () =>{
    const response = await fetch(result);
    const data = await response.json();
     setRecipes(data.hits)
  }
  return (
    <div className="App">
      <form className="search-container">
        <input className="search-bar" type="text"/>
        <button className="search-button" type="submit">Get Recipe</button>
        
      </form>
      <Recipe/>
    </div>
  );
}

export default App;
