import React,{useEffect, useState} from 'react';
import './App.css';
import Recipe from './components/Recipe';

function App() {
  const [recipes,setRecipes] =useState([]);
  const [search, setSearch] = useState("");
  const [item,setItem] = useState("chicken");


  const  APP_ID = "056e462d";
  const APP_KEY = "8ec0bd7b9d23dd10ebbfe2dd74ea12fd";
  const result =`https://api.edamam.com/search?q=${item}&app_id=${APP_ID}&app_key=${APP_KEY}`;

  const handleChange = (e) =>{
    setSearch(e.target.value)
    
  }
  
  const handleSubmit = (e) =>{
    e.preventDefault();
    setItem(search);
    setSearch("");
    
  }
  

  useEffect(()=>{
    getRecipes();
  },[item]);

  const getRecipes = async () =>{
    const response = await fetch(result);
    const data = await response.json();
     setRecipes(data.hits)
  }
  return (
    <div className="App">
      <form className="search-container" onSubmit={handleSubmit}>
        <input 
        className="search-bar" 
        type="text" 
        value={search}
        onChange={handleChange}
        />
        <button className="search-button" type="submit">
          Get Recipe
          </button> 
      </form>
      <div className="recipe-list">
      {recipes.map(recipe =>(
      <Recipe 
      key={recipe.recipe.label}
      title={recipe.recipe.label} 
      calories={recipe.recipe.calories}
      image = {recipe.recipe.image}
      ingredients = {recipe.recipe.ingredients}
      />))}
      </div>
    </div>
  );
}

export default App;
