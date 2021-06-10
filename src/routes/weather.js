
const {Router} = require("express");

const {    
    weatherByCoordinates,
    weatherByCityId
} = require("../controllers/weather"); 

const routes = Router();

routes.get("/", weatherByCoordinates);
routes.get("/:city/:id", weatherByCityId);



module.exports = routes; 

