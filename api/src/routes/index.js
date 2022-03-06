const { Router } = require('express');
const router = Router();

const routeR = require("./getOnlyRecip.js")
const routeD = require("./getAllDiets.js")

router.use("/recipes", routeR);
router.use("/types", routeD);




module.exports = router;