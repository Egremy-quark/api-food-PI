import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { orderByName, filterDiet, filterByScore, filterPost } from '../redux/actions/index'

export default function Filters({ ordered, page }) {
    const dispatch = useDispatch()
    const selectDiet = useSelector(state => state.diets)

    const handleOrderName = (e) => {
        e.preventDefault()
        ordered(e.target.value)
        dispatch(orderByName(e.target.value))
    }

    const handleDiets = (e) => {
        e.preventDefault()
        ordered(e.target.value)
        dispatch(filterDiet(e.target.value))
    }

    const handleScore = (e) => {
        e.preventDefault()
        ordered(e.target.value)
        dispatch(filterByScore(e.target.value))
    }

    const handleDbOrApi = (e) => {
        e.preventDefault()
        page(1)
        dispatch(filterPost(e.target.value))
    }

    return (
        <div className='filtros'>
            <div className='order'>
                <select onChange={(e) => handleOrderName(e)} className='order__select'>
                    <option >Alphabet order</option>
                    <option value='asc'>Ascendent</option>
                    <option value='des'>Descendent</option>
                </select>

                <select onChange={(e) => handleDiets(e)} className='order__select'>
                    <option>Diet filter</option>
                    <option value='all'>All diets</option>
                    {selectDiet.map((e, i) => {
                        // console.log(e.dietType)
                        return (
                            <option key={i.toString()} value={e.dietType} >
                                {e.dietType}
                            </option>
                        )
                    })}
                </select>

                <select onChange={(e) => handleScore(e)} className='order__select'>
                    <option>Score order</option>
                    <option value='descore'>Ascendent</option>
                    <option value='asc'>Descendent</option>
                </select>

                <select onChange={(e) => handleDbOrApi(e)} className='order__select'>
                    <option>Score Db or Api</option>
                    <option value='All'>All</option>
                    <option value='Created'>Created</option>
                    <option value='Api'>Api</option>
                </select>
            </div>
        </div >
    )
}