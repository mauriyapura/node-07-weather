
const express = require("express");

const CityRepository = require("../repositories/cityRepository");
const logger = require("../loaders/logger");
const repository = new CityRepository();


const findCities = async (city)=>{

    const cities = await repository.findCities(city);

    //logger.silly(JSON.stringify(cities));

    return cities.features.map(el => {
        return {
            id: el.id,
            name: el.place_name,
            log: el.geometry.coordinates[0],
            lat: el.geometry.coordinates[1],

        }
    });
   
    
}

module.exports = {
    findCities
};

