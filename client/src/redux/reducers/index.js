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
            // for (let i = 0; i < action.payload.length; i++) {

            //     if (action.payload[i].madeOnDb) {
            //         console.log(action.payload[i])
            //         let arrDiets = action.payload.diets.split(',')
            //         console.log(arrDiets)
            //         action.payload.diets = arrDiets
            //     }
            // }
            // MadeOnDb
            console.log(action.payload)
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
                    // console.log(r.diets)
                    let dietType = r.diets.map(d => {
                        // console.log(d.name)
                        return d.name
                    })
                    // console.log(dietType)
                    if (dietType.includes(action.payload))
                        // console.log(r)
                        return r //Verificar si lo que pasamos por el option está dentro de cada recipe
                })
            // console.log(dietsPostFilter)
            return {
                ...state,
                copyRecipes: dietsPostFilter
            }
        case 'GET_RECIPES_NAME':
            return {
                ...state,
                copyRecipes: action.payload
            }

        case 'ORDER_BY_NAME':
            let orderList = state.copyRecipes.sort((a, b) => {
                if (a.title.toLowerCase() > b.title.toLowerCase()) return 1
                if (a.title.toLowerCase() < b.title.toLowerCase()) return -1
                return 0
            })
            if (action.payload === 'des') { orderList = orderList.reverse() }
            return {
                ...state,
                copyRecipes: orderList
            }

        case 'ORDER_BY_SCORE':
            let recipesByScore = state.recipes.sort((a, b) => {
                if (a.healthScore > b.healthScore) return 1;
                if (b.healthScore > a.healthScore) return -1;
                return 0;
            })
            if (action.payload === 'descore') { recipesByScore = recipesByScore.reverse() }
            return {
                ...state,
                copyRecipes: recipesByScore
            }
        // case 'POST_RECIPE':
        //     return {
        //         ...state,
        //     }
        case 'FILTER_POST':
            let recipesCopy = [];

            action.payload === 'All' ?
                recipesCopy = state.recipes
                : action.payload === 'Created' ?
                    recipesCopy = state.recipes.filter((r) => r.MadeOnDb)
                    : action.payload === 'Api' ?
                        recipesCopy = state.recipes.filter((r) => !r.MadeOnDb)
                        : recipesCopy = state.recipes
            return {
                ...state,
                copyRecipes: recipesCopy
            }
        default:
            return { ...state }; //InitialState
    }

}

export default rootReducer;  
