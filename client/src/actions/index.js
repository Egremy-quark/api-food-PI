import axios from 'axios';

export const getRecipes = () => {
    return async (dispatch) => {
        let json = await axios.get('http://localhost:3001/recipes');
        return dispatch({
            type: 'GET_RECIPES',
            payload: json.data
        })
    }
}