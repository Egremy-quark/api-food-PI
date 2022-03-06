const { Router } = require("express");
const axios = require("axios") ;
const { Diet } = require("../db.js");
require('dotenv').config();
const { APIKEY} = process.env;


const router = Router();




router.get('/', async (req, res) => {
    try {
        const info = await axios.get(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${APIKEY}&addRecipeInformation=true&number=100`);
        const types = info.data?.results.map(e => e.diets); //extraemos info
        const newTypes = types.flat().concat('Vegetarian', 'Ketogenic')
        const finalTypes = [...new Set(newTypes)]
        console.log(finalTypes)

        for (let element in finalTypes) {
            Diet.findOrCreate({
                where: {dietType: finalTypes[element]}
            })
        }

        const newDiets = await Diet.findAll()
        res.status(200).json(newDiets)

    } catch (error) {
        console.log(error)
    }
});


module.exports = router;