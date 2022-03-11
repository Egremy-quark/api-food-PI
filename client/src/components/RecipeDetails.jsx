import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getDetails } from '../redux/actions';
// import detallesDelAlmedruco from "../detallesDelAlmendruco"


export default function RecipeDetails() {
    const dispatch = useDispatch();
    const recipeId = useParams(); //Matchear para renderizado
    let newRecipe = useSelector((state) => state.detail)
    // let newRecipe = detallesDelAlmedruco[0];


    useEffect(() => {
        dispatch(getDetails(recipeId.id))
    })

    return (
        <div>
            {console.log({ newRecipe })}
            <Link to='/home'><button>A casita</button></Link>
            <div>
                {
                    (newRecipe.length === 0) ?
                        <div>
                            <p>Loading</p>
                        </div>
                        :
                        <div>
                            <img src={newRecipe.image} alt="Img not found" />
                            <div>
                                <h1>{newRecipe.title}</h1>
                                <h5><span>Diet Type:</span></h5>
                                <p>
                                    {newRecipe.diets?.map((r, i) => (
                                        <li key={i.toString()}>
                                            {r.name}
                                        </li>
                                    ))}
                                </p>
                                <h5>
                                    <span>Servings:</span>{newRecipe.servings}
                                </h5>
                                <h5>
                                    <span>Spoonacular Score:</span>{newRecipe.points}
                                </h5>
                                <h5>
                                    <span>Health Score:</span>{newRecipe.healthScore}
                                </h5>
                                <h5>
                                    <span>Summary:</span>{newRecipe.summary}
                                </h5>
                                <h5>
                                    <span>Instructions:</span>{newRecipe.steps}
                                </h5>
                            </div>

                        </div>
                }
            </div>
        </div>
    )
}