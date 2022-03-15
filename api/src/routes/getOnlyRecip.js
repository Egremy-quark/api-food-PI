const { Router } = require('express');
const { getAllInfo } = require('../controllers/all_recipe');
const { getIdAll } = require('../controllers/recipe_id');
const { Recipe, Diet } = require('../db');


// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);


router.get('/', async (req, res) => {
    try {
        const { name } = req.query
        if (name) {
            const recipes = await getAllInfo() //Generamos la petición después de comprobar los datos
            console.log(name)
            const existName = recipes.filter(e => e.title?.toLowerCase().includes(name.toLowerCase()))
            existName.length
                ? res.status(200).json(existName)
                : res.status(404).send('No se encontro una receta con ese nombre')
        } else {
            const recipes = await getAllInfo()
            res.status(200).json(recipes)
        }
        // res.status(404).send('No se ingreso un nombre')

    } catch (error) {
        console.log(error)
    }
});


router.get('/:idRecipe', async (req, res) => {

    const id = req.params.idRecipe
    let idDtb = id

    if (id.length < 7) {
        idDtb = parseInt(id)
    }

    // const idNum = parseInt(id);
    const idRecipe = await getAllInfo()
    // const recipeId = await getIdAll(idNum)
    let newIdRecipe = await idRecipe.filter(e => e.id === idDtb)

    // if (e.id === idDtb) {
    //     console.log('Somos iguales')
    // } else {
    //     console.log('No lo somos pputo')
    // }



    // res.json(newIdRecipe)
    // console.log(recipeId)
    !newIdRecipe
        ? res.status(404).json("No recipe")
        : res.status(200).json(newIdRecipe)

    // res.status(404).send('No ingresaste un ID')
});

// router.get("/dogs/:id", async (req, res) => {
//     const id = req.params.id;
//     let dogsTotal = await getAllDogs();
//     if (id) {
//       let dogID = await dogsTotal.filter((el) => el.id == id);
//       dogID.length
//         ? res.status(200).json(dogID)
//         : res.status(404).send("la raza no se encuentra");
//     }
//   });




router.post('/recipe', async (req, res) => {


    try {
        let { title, summary, points, healthScore, steps, image, diets } = req.body;

        let newRecipe = await Recipe.create({
            title,
            summary,
            points,
            healthScore,
            steps,
            image
        });
        console.log(diets)

        let dietsdb = await Diet.findAll({
            where: {
                dietType: diets
            }
        })
        console.log({ dietsdb })

        //addDiet = método creado por sequelize
        newRecipe.addDiets(dietsdb)

        res.status(201).json(newRecipe);
        // res.send('Receta creada')
    } catch (error) {
        console.log(error)
    }

});



module.exports = router;