import React, {useEffect, useState} from 'react';

const Recipe = ({title, calories, image}) => (


    <div>
        <h1>{title}</h1>
        <p> {calories}</p>
        <img src={image} alt="recipe"/>
    </div>
)

export default Recipe;