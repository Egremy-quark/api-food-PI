const initialState = {
    recipes: [],
    copyRecipes: [],
    diets: [], 
    detail: []
}

function rootReducer (state = initialState, action){
    // eslint-disable-next-line default-case
    switch(action.type){
        case 'GET_RECIPES':
            return{
                ...state,
                recipes: action.payload,
                copyRecipes: action.payload
            };
        case 'GET_DIETS':
            return{
                ...state,
                diets: action.payload
            }
    }

} 

export default rootReducer;  