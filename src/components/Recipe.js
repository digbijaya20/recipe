import React from 'react';

const Recipe = ({title, calories,image, ingredients}) =>{
    return(
        <div className="recipe-container">
            <h1>{title}</h1>
            <ul>
                {ingredients.map(items => (
                    <li>{items.text}</li>
                ))}
            </ul>
            <p> <b>Calorie:</b> {calories}</p>
            <img src={image} alt=""/>
        </div>
    )
}

export default Recipe;