const initialState = {
    recipes: [],
    copyRecipes: [],
    diets: [],
    detail: []
}

function rootReducer(state = initialState, action) {
    // eslint-disable-next-line default-case
    switch (action.type) {
        case 'GET_RECIPES':
            return {
                ...state,
                recipes: action.payload,
                copyRecipes: action.payload
            };
        case 'GET_DIETS':
            return {
                ...state,
                diets: action.payload
            }
        case 'GET_DETAILS':
            return {
                ...state,
                detail: action.payload
            }
        case 'FILTER_BY_DIET':
            const recipes = state.copyRecipes;
            const dietsPostFilter = action.payload === "all" ? recipes :
                // eslint-disable-next-line array-callback-return
                recipes.filter(r => {
                    let dietType = r.diets.map(d => d.name)
                    if (dietType.includes(action.payload)) return r
                })
            return {
                ...state,
                recipes: dietsPostFilter
            }
        case 'GET_RECIPES_NAME':
            return {
                ...state,
                copyRecipes: action.payload
            }

        case 'ORDER_BY_NAME':
            let orderList = state.copyRecipes.sort(function (a, b) {
                if (a.title.toLowerCase() > b.title.toLowerCase()) {
                    return 1
                } else if (a.title.toLowerCase() < b.title.toLowerCase()) {
                    return -1
                } else {
                    return 0
                }
            })
            if (action.payload === 'des') { orderList = orderList.reverse() }

            return {
                ...state,
                copyRecipes: orderList
            }

        default:
            return { ...state }; //InitialState
    }

}

export default rootReducer;  
