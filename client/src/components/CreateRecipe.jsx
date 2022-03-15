import React from 'react';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { postRecipe, getRecipes, getDiets } from '../redux/actions/index'; //traer de actions getdiets y postrecipes..
import { useEffect } from 'react';
import { validate } from '../functions/validaciones'
import { Preview } from './Preview';



export default function CreateRecipe() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const allDiets = useSelector((state) => state.diets);

    const [errors, setErrors] = useState({});
    let [recipe, setRecipe] = useState({
        title: "",
        summary: "",
        points: 0,
        healthScore: 0,
        image: "",
        steps: [],
        diets: []
    });

    useEffect(() => {
        dispatch(getRecipes());
        dispatch(getDiets());
    }, [dispatch])


    let handleChange = (e) => {
        // console.log({ ...recipe })
        setRecipe({
            ...recipe, //Spread de los anteriores recipes más el nuevo
            [e.target.name]: e.target.value //Tomamos el valor del form
        })

        setErrors(validate({
            ...recipe,
            [e.target.name]: e.target.value //Mandamos los errores si es que existen dentro de nuestro form
        }))
    }



    // let handleSelect = (e) => {
    //     setRecipe({
    //         ...recipe,
    //         diets: [...recipe.diets, e.target.value]
    //     })
    // }

    // const handleSelect = (e) => {
    //     e.preventDefault();
    //     console.log(e.target.value)
    //     if (e.target.value === 'Diets types') {
    //         // let b = Object.values(e.target.value)
    //         setRecipe({
    //             ...recipe,
    //             diets: [...recipe.diets, e.target.value]
    //         })
    //     } else {
    //         e.target.value = ""
    //     }
    // }

    // const handleSelect = (e) => {
    //     e.preventDefault();
    //     console.log(e.target.value)
    //     if (e.target.value === 'Diets types') {
    //         let b = Object.values(e.target.value)
    //         setRecipe({
    //             ...recipe,
    //             diets: [...recipe.diets, ...b]
    //         })
    //     } else {
    //         e.target.value = ""
    //     }

    // }

    const handleSelect = (e) => {
        e.preventDefault();
        (e.target.value === 'Diets types')
            ? e.target.value = ""
            : setRecipe({
                ...recipe,
                diets: [...recipe.diets, e.target.value]
            })
    }

    const handleClick = (e) => {
        e.preventDefault()
        console.log(e)
        if (e.target[0].value.length !== 0) {
            setRecipe({
                ...recipe,
                steps: [...recipe.steps, e.target[0].value]
            })
        }
        e.target[0].value = '';
    }

    let handleSubmit = (e) => {
        e.preventDefault();
        setErrors(validate(recipe));
        if (recipe.title && recipe.summary && recipe.diets.length) {
            dispatch(postRecipe(recipe));
            alert('Recipe successfully Created');
            // navigate('/home');
            setRecipe({
                title: "",
                summary: "",
                points: 0,
                healthScore: 0,
                image: "",
                steps: [],
                diets: []
            })
        } else {
            alert('All fields are required')
        }
    }

    // const handleSubmit = (e) => {
    //     e.preventDefault()
    //     console.log({ ...recipe })
    //     dispatch(postRecipe(recipe))
    //     setRecipe({
    //         title: "",
    //         points: 0,
    //         healthScore: 0,
    //         summary: "",
    //         image: "",
    //         diets: [],
    //         steps: []
    //     })
    // }


    const handleDelete = (data, action) => {
        if (action === 'diets') {
            console.log(data, action)
            setRecipe({
                ...recipe,
                diets: recipe.diets.filter(e => {
                    // console.log(data, action)         
                    return e !== data.e
                })
            })
        } else {
            setRecipe({
                ...recipe,
                steps: recipe.steps.filter(e => e !== data.e)
            })
        }
    }


    console.log({ recipe });

    return (
        <div className='create-recipe' >
            <Link to='/home' > Home </Link>

            <div className='form-recipe'>



                <form onSubmit={(e) => handleSubmit(e)} >
                    <h1>Create your recipe</h1>
                    <div className='image'>
                        <label>Load Image here: </label>
                        <input
                            type="url"
                            value={recipe.image}
                            name="image"
                            onChange={(e) => handleChange(e)}
                            required
                        />
                        {/* {errors.image && (<p>{errors.image}</p>)} */}
                    </div>
                    <div className='image' >
                        <label>Title: </label>
                        <input
                            type="text"
                            value={recipe.title}
                            name="title"
                            onChange={(e) => handleChange(e)}
                        />
                        {/* {errors.title && (<p>{errors.title}</p>)} */}
                    </div>
                    <div className='image'>
                        <label>Summary: </label>
                        <textarea
                            type="text"
                            value={recipe.summary}
                            name="summary"
                            maxLength="1000"
                            onChange={(e) => handleChange(e)}
                        />
                        {/* {errors.summary && (<p>{errors.summary}</p>)} */}
                    </div>

                    {/* ====================================================== */}
                    {/* En este caso no hay errores ya que nosotros definimos un mínimo y un máximo, por tanto, no hace falta validar */}
                    <div >
                        <label >Spoonacular Score: </label>
                        <input type="range" min="0" max="100" value={recipe.points} name="points" onChange={(e) => handleChange(e)} />
                        {/* {<p >{recipe.spoonacularScore}</p>} */}

                    </div>
                    <div >
                        <label>Health Score: </label>
                        <input type="range" min="0" max="100" value={recipe.healthScore} name="healthScore" onChange={(e) => handleChange(e)} />
                        {/* {<p >{recipe.healthScore}</p>} */}
                    </div>


                    {/* ====================================================== */}

                    {/* ==================Dietas=============== */}

                    <select onChange={handleSelect}>
                        <option >Diets types</option>
                        {
                            allDiets?.map(e => {
                                return <option key={e.id} value={e.dietType} >{e.dietType}</option>
                            })
                        }
                    </select>
                    {/* ==================Dietas=============== */}
                    <div>
                        <input value="Create recipe" type="submit" />
                        <label>Create recipe</label>
                    </div>
                </form>




                <form onSubmit={handleClick}>
                    <label>Steps:
                        <input placeholder='Add step' type='text' />
                    </label>
                    <button type='submit'>Add step</button>
                </form>

            </div>

            <Preview
                title={recipe.title}
                image={recipe.image}
                points={recipe.points}
                healthScore={recipe.healthScore}
                summary={recipe.summary}
                diets={recipe.diets}
                handleDelete={handleDelete}
                steps={recipe.steps}
            />
        </div >


    )
}









