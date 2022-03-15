const { Sequelize } = require('sequelize');
const axios = require('axios');
require('dotenv').config();
const { APIKEY } = process.env;
const { Recipe, Diet } = require('../db')

/*
En este archivo haremos el requerimiento de la información de nuestra API
*/

const getApiInfo = async () => {
    try {
        const getUrl = await axios.get(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${APIKEY}&addRecipeInformation=true&number=100`)

        const getInfo = getUrl.data?.results.map(e => {
            return {
                id: e.id,
                title: e.title,
                summary: e.summary.replace(/<[^>]*>?/g, ''),
                points: e.spoonacularScore,
                healthScore: e.healthScore,
                servings: e.servings,
                madeOnDb: false,
                image: e.image,
                diets: e.diets,
                steps: e.analyzedInstructions[0]?.steps.map((e) => { return e.step })
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
    // return getApi

}

module.exports = {
    getApiInfo,
    getDataBaseInfo,
    getAllInfo
}