const { Sequelize } = require('sequelize');
const axios = require('axios');
require('dotenv').config();
const { APIKEY } = process.env;
const { Recipe, Diet } = require('../db')


const getIdApi = async (id) => {
    try {
        const apiUrl = await axios.get(`https://api.spoonacular.com/recipes/${id}/information?apiKey=${APIKEY}`);
        const e = apiUrl.data;
        console.log(e)
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
        };

    } catch (error) {
        console.log(error)
    }


};

const getIdDb = async (id) => {
    try {
        const dbId = await Recipe.findByPk(id, {
            include: {
                model: Diet,
                attributes: ["dietType"],
                through: {
                    attributes: [],
                }
            }
        });

        return dbId;

    } catch (error) {
        console.log(error)
    }
};

const getIdAll = async (id) => {
    const idApi = getIdApi(id);
    const idDb = getIdDb(id);
    const [Api, Db] = await Promise.all([idApi, idDb]);
    return Api || Db;
};

module.exports = {
    getIdApi,
    getIdDb,
    getIdAll,
};