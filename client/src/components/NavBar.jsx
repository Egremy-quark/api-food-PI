import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { getRecipeName, getRecipes } from '../redux/actions/index'

export default function NavBar({ page }) {
    const dispatch = useDispatch()
    const [title, setTitle] = useState("")

    const handleChange = (e) => {
        e.preventDefault();
        setTitle(e.target.value)
    }

    const handleClick = (e) => {
        e.preventDefault();
        page(1)
        dispatch(getRecipeName(title))
    }

    const handleClickReset = (e) => {
        e.preventDefault();
        page(1)
        dispatch(getRecipes())
    }

    return (
        <div >
            <nav className='navar'>
                <div className="item1">
                    Recipes<span>API</span>
                </div>
                <form className="item2">

                    <button type='reset' onClick={(e) => handleClickReset(e)}>
                        <img src="./patras.png" alt="patras" />
                    </button>

                    <input type='text' placeholder='Search recipe by name' onChange={(e) => handleChange(e)}>
                    </input>

                    <button type='submit' onClick={(e) => handleClick(e)} className='active'>
                        <img src="./buscar.png" alt="bucando" />
                    </button>


                </form>
                <div className="item3">
                    <a href='https://github.com/Egremy-quark/api-food-PI'>
                        Github
                        <img src="./giju.png" alt="gija" />
                    </a>
                </div>

            </nav>
        </div >
    )
}