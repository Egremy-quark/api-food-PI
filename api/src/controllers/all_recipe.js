const {Sequelize} = require('sequelize');
const axios = require('axios');
const { APIKEY } = process.env;
const { Recipe, Diet } = require('../db')

/*
En este archivo haremos el requerimiento de la información de nuestra API
*/

const getApiInfo = async () => {
    try {
        const getUrl = await axios.get(`https://api.spoonacular.com/recipes/complexSearch?apiKey=d5c50438aee0420487fd3ada80f2adcd&addRecipeInformation=true&number=100`)

        const getInfo = getUrl.data?.results.map(e => {
                return {
                id: e.id,
                title: e.title,
                summary: e.summary,
                points: e.spoonacularScore,
                healthScore: e.healthScore,
                servings: e.servings,
                image: e.image,
                diets: e.diets.map( (e) => {return {name: e}}),
                steps: e.analyzedInstructions[0]?.steps.map((e) => {return e.step})
            }
        });

            return getInfo
    } catch (error) {
        console.log(error)
    }
}

const getDataBaseInfo = async () => {
    try {
        return await Recipe.findAll({
            include: {
                model: Diet,
                attributes: ['dietType'],
                through: {
                    attributes: []
                }
            }
        }); 
    } catch (error) {
        console.log(error)
    }
}

/*
const allDiets = async function(){
    const dietList = await axios.get(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}&number=60&addRecipeInformation=true`);
    const repeated = await dietList.data.results.map( d => d.diets).flat(1);
    return [... new Set(repeated)]
};
*/

const getAllInfo = async () => {
    const getApi = await getApiInfo()
    const getDb = await getDataBaseInfo()
    const allInfo = getApi.concat(getDb) //[...getApi, ...getDb]
    return allInfo
}

module.exports = {
    getApiInfo,
    getDataBaseInfo,
    getAllInfo
}