import React from 'react';
import { Link } from 'react-router-dom'


const Recipe = ({ title, diets, image, points, healthScore, id, madeOnDb }) => {
    return (
        <div className='card'>
            {/* {console.log(id)} */}
            <div className="card__img">
                <img src={image} alt="Img not found" />
            </div>
            <div className='info'>
                <div className='info__description'>
                    <div className="info__icons">
                        <div className="item">
                            <div className="img">
                                <img
                                    className='iconimg'
                                    src="./heart.svg"
                                    alt="kokoro"
                                />
                            </div>
                            <p > {healthScore}</p>
                        </div>
                        <div className="item">
                            <div className="img">
                                <img
                                    className='iconimg'
                                    src="./star.svg"
                                    alt="estar"
                                />
                            </div>
                            <p > {points}</p>
                        </div>
                    </div>
                    <h2 >{title}</h2>
                    {/* {
                        madeOnDb ?
                            <ul>
                                {diets.map((e, i) => {
                                    return <li key={i.toString()}>
                                        {e.dietType}
                                    </li>
                                })}
                            </ul>
                            :
                            <ul>
                                {diets.map((e, i) => {
                                    return <li key={i.toString()}>
                                        {e}
                                    </li>
                                })}
                            </ul>
                    } */}

                </div>
                <div className="moreinfo">
                    <Link to={`/recipes/${id}`}>More info</Link>

                </div>


            </div>

        </div>
    )
}

export default Recipe




// {

//     <ul>
//         {diets.map((e, i) => {
//             return <li key={i.toString()}>
//                 {e.dietType}
//             </li>
//         })}
//     </ul>

// }