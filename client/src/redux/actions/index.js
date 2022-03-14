import axios from 'axios';


export const getRecipes = () => {
    return async (dispatch) => {
        try {
            let json = await axios.get('http://localhost:3001/recipes');
            // console.log(json.data)
            return dispatch({
                type: 'GET_RECIPES',
                payload: json.data
            })
        } catch (error) {
            console.log(error)
        }
    }
}

export const getDiets = () => {
    return async (dispatch) => {
        try {
            let allDiets = await axios.get('http://localhost:3001/types')
            return dispatch({
                type: 'GET_DIETS',
                payload: allDiets.data
            })
        } catch (error) {
            console.log(error)
        }
    }
}

export const filterDiet = (payload) => {
    return {
        type: 'FILTER_BY_DIET',
        payload
    }
}

export const orderByName = (payload) => {
    return {
        type: 'ORDER_BY_NAME',
        payload
    }
}

export const getDetails = (id) => {
    return async (dispatch) => {
        try {
            let aboutRecipe = await axios.get(`http://localhost:3001/recipes/${id}`);
            return dispatch({
                type: 'GET_DETAILS',
                payload: aboutRecipe.data
            })
        } catch (error) {
            console.log(error)
        }
    }
}

export function getRecipeName(name) {
    return async function (dispatch) {
        const json = await axios.get(`http://localhost:3001/recipes?name=${name}`)
        console.log(json.data)
        return dispatch({
            type: 'GET_RECIPES_NAME',
            payload: json.data
        })
    }
}

export const filterByScore = (payload) => {
    return {
        type: 'ORDER_BY_SCORE',
        payload
    }
}

export const postRecipe = (payload) => {
    return async function (dispatch) {
        let recipeDb = await axios.post('http://localhost:3001/recipes/recipe', payload)
        return recipeDb
    }
}

export const filterPost = (payload) => {
    return {
        type: 'FILTER_POST',
        payload
    }
}