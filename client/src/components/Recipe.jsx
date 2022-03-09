import React from 'react';


const Recipe = ({ title, diets, image, points, healthScore }) => {
    return (
        <div>
            <img src={image} alt="Img not found" />
            <div>
                <h2 >{title}</h2>
                <ul>Diets: {diets.map((e) => {
                    return <li key={e.name}>
                        {e.name}
                    </li>
                })}
                </ul>

                <p >Points: {points}</p>
                <p >Healt: {healthScore}</p>
            </div>
        </div>
    )
}

export default Recipe

/*
                <Recipe
                    title={e.title}
                    healthScore={e.healthScore}
                    spoonacularScore={e.spoonacularScore}
                    image={e.image}
                    diets={e.diets}
                />
*/

