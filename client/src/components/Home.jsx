import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDiets, getRecipes } from "../redux/actions/index.js";
import Paginado from "./Paginado.jsx";
import RecipePerPage from './RecipePerPage.jsx'
import NavBar from "./NavBar.jsx";
import Filters from "./Filters.jsx";
import elTrucoDelAlmendruco from "../elTrucoDelAlmendruco.js";


export default function Home() {
    // const recipesCopied = elTrucoDelAlmendruco;
    const dispatch = useDispatch()
    const recipesCopied = useSelector(state => state.copyRecipes)
    const [currentPage, setCurrentPage] = useState(1)
    const [order, setOrder] = useState("") // Creo un Hook para poder aplicar los cambios de mis ordenamientos

    const page = (e) => {
        setCurrentPage(e)
    }

    const ordered = (e) => {  // Es el encargado de modificar el order y permitir hacer un componentUpdate
        setOrder(e)
        console.log(e)
    }

    useEffect(() => {
        dispatch(getRecipes())
        dispatch(getDiets())
    }, [dispatch])


    return (
        <div className="home">
            <div >
                <NavBar
                    page={page}
                />
            </div>
            <div>
                <Filters
                    ordered={ordered}
                />
            </div>
            <div>
                <RecipePerPage
                    recipesCopied={recipesCopied} // array
                    currentPage={currentPage} // 2
                />
            </div>
            <div>
                <Paginado
                    recipesCopied={recipesCopied.length}
                    page={page}
                />
            </div>
        </div>
    )
}