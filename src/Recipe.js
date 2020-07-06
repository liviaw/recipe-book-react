import React from 'react';
import './App.css';

const Recipe = ({title, calories, image, ingredients}) => {

    const roundedCalories = Math.round(calories);

    return (
        <div className="recipe-element">
            <h1>{title}</h1>
            <ul>
                {ingredients.map((ing) => (
                    <li>{ing.text}</li>
                ))}
            </ul>
            <p> Calories: {roundedCalories}</p>
            <img src={image} alt="recipe"/>
        </div>
    )
}

export default Recipe;