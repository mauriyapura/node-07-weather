
const {Router} = require("express");

const {
    cities,  
    
} = require("../controllers/cities"); 

const routes = Router();

routes.get("/:city", cities);


module.exports = routes; 

