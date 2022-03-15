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

    console.log(newRecipe)
    useEffect(() => {
        dispatch(getDetails(recipeId.id))
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [dispatch])

    return (
        <div>
            {console.log(newRecipe)}
            <Link to='/home'><button>A casita</button></Link>
            <div className='recipeDetail'>
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
                                {

                                    newRecipe.diets.map((e, i) => {
                                        console.log(e)
                                        return <p key={i}>
                                            {e}
                                        </p>

                                    })
                                }


                                <h5> <span>Servings:</span>{newRecipe.servings} </h5>
                                <h5> <span>Spoonacular Score:</span>{newRecipe.points} </h5>
                                <h5> <span>Health Score:</span>{newRecipe.healthScore} </h5>
                                <h5> <span>Summary:</span>{newRecipe.summary} </h5>
                                <h5> <span>Instructions:</span>{newRecipe.steps} </h5>
                                <p>{newRecipe.steps?.lenght === 0 ?
                                    <p>No hay pasos para esta receta</p>
                                    : newRecipe.steps?.map((e, i) => {
                                        return <p key={i}><span>Paso {i + 1}:</span> {e}</p>
                                    })}
                                </p>
                            </div>

                        </div>
                }
            </div>
        </div>
    )
}