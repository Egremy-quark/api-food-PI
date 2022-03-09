import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getDetails } from '../redux/actions';


export default function RecipeDetails() {
    const dispatch = useDispatch();
    const recipeId = useParams(); //Matchear para renderizado
    let newRecipe = useSelector((state) => state.detail)

    useEffect(() => {
        dispatch(getDetails(recipeId.id))
    })

    return (
        <div>
            <Link to='/home'><button>A casita</button></Link>
            <div>
                {
                    (newRecipe.length === 0)
                        ?
                        <div>
                            <p>Loading...</p>
                        </div>
                        :
                        <div>
                            <img src={newRecipe.image} alt="Img not found" />
                            <div>
                                <h1>{newRecipe.title}</h1>
                                <h5><span>Dish Type:</span></h5>
                                <p >
                                    {newRecipe.dishTypes?.map((r) => (
                                        <li>
                                            *{r.name}
                                        </li>
                                    ))}
                                </p>
                                <h5><span>Diet Type:</span></h5>
                                <p>
                                    {newRecipe.diets?.map((r) => (
                                        <li>
                                            *{r.name}
                                        </li>
                                    ))}
                                </p>
                                <h5>
                                    <span>Servings:</span>{newRecipe.servings}
                                </h5>
                                <h5>
                                    <span>Spoonacular Score:</span>{newRecipe.spoonacularScore}
                                </h5>
                                <h5>
                                    <span>Health Score:</span>{newRecipe.healthScore}
                                </h5>
                                <h5>
                                    <span>Ready in minutes:</span>{newRecipe.readyInMinutes}
                                </h5>
                                <h5>
                                    <span>Summary:</span>{newRecipe.summary}
                                </h5>
                                <h5>
                                    <span>Instructions:</span>{newRecipe.instructions}
                                </h5>
                            </div>

                        </div>
                }
            </div>
        </div>
    )
}