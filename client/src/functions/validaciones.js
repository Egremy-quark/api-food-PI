export function validate(recipe) {
    let errors = {};
    let regularExpression = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;
    let regExpUrl = /(http(s?):)([/|.|\w|\s|-])*\.(?:jpg|gif|png)/g;


    if (!recipe.title.trim()) {
        errors.title = "Your recipe need a title!"
    } else if (!regularExpression.test(recipe.title.trim())) {
        errors.title = "Title field only accepts letters and blank spaces"
    } else if (!recipe.summary) {
        errors.summary = "You need give a brief explanation about your recipe"
    } else if (!recipe.steps) {
        errors.steps = "Must tell us how to make that delicius recipe"
    } else if (!regExpUrl.test(recipe.image.trim())) {  //búsqueda de una ocurrencia entre una expresión regular y una cadena especificada
        errors.image = "Must be a URL direction"
    }
    return errors;
}


// let [recipe, setRecipe] = useState({
//     title: "",
//     summary: "",
//     points: 50,
//     healthScore: 50,
//     steps: "",
//     image: "",
//     diets: []
// })


// let newRecipe = await Recipe.create({
//     title,
//     summary,
//     points,
//     healthScore,
//     steps,
//     image
// });