
const express = require("express");

const Success = require("../handlers/successHandler");
const {weatherByCoordinatesService, weatherByCityIdService} = require("../services/weatherService");


/**
 * 
 * @param {express.Request} req 
 * @param {express.Response} res 
 */

const weatherByCoordinates = async (req, res, next)=> {
    
    try {
        const {lon, lat} = req.query;
        const weather = await weatherByCoordinatesService(lon, lat);
        const success = new Success(weather);        
        res.json(success);
        
    } catch (err) {
        next(err);        
    }    
};

const weatherByCityId = async (req, res, next)=> {   

    try {
        //const {city, id} = req.params;
        const id = req.params.id;
        const city = req.params.city;
        const weather = await weatherByCityIdService(city, id);
        const success = new Success(weather);        
        res.json(success);
        
    } catch (err) {
        next(err);        
    }    
};


module.exports={
    weatherByCoordinates,
    weatherByCityId    
}



