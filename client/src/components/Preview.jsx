import React from 'react'

export const Preview = ({ title, image, points, healthScore, summary, diets, handleDelete, steps }) => {

    return (
        <div className='preview-bc'>


            <h2>Preview</h2>
            {
                (image === "")
                    ? <p>¡Aqui se mostrara su imagen!</p>
                    : <img src={image} alt='img' />
            }
            <span>Title: </span><p>{title}</p>
            <span>Score: </span><p>{points}</p>
            <span>Health Score: </span><p>{healthScore}</p>
            <span>Summary: </span><p>{summary}</p>
            <div>
                <ul>
                    <li>
                        {
                            (diets.length !== 0)
                                ? diets.map((e, i) =>
                                    <p key={i.toString()}>
                                        <button onClick={() => handleDelete({ e }, 'diets')}>x</button>
                                        {e}
                                    </p>)
                                : <p>Aun no se agrego ningun tipo de dieta</p>
                        }
                    </li>
                </ul>
            </div>
            <div>
                <ul>
                    <li>
                        {
                            (steps.length !== 0)
                                ? steps.map((e, i) =>
                                    <p key={i}>
                                        <button onClick={() => handleDelete({ e }, "steps")}>X</button>
                                        {e}
                                    </p>
                                )
                                : <p>No se agrego ningun paso aun</p>
                        }
                    </li>
                </ul>
            </div>



        </div>
    )
}

// let newRecipe = await Recipe.create({
//     title,
//     summary,
//     points,
//     healthScore,
//     steps,
//     image
// });