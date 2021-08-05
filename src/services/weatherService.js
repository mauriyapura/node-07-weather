
const express = require("express");

const weatherRepository = require("../repositories/weatherRepository");
const cityRepository = require("../repositories/cityRepository");
const logger = require("../loaders/logger");
const weatherRepo = new weatherRepository();
const cityRepo = new cityRepository();


const weatherByCoordinatesService = async(lon, lat)=>{

    const weather = await weatherRepo.weatherByCoordinates(lon, lat);
    console.log(weather)
    //logger.silly(JSON.stringify(weather));

    return {
        //name: weather.name,
        description: weather.weather[0].description,
        temperature: weather.main.temp,
        temperatureMin: weather.main.temp_min,
        temperatureMax: weather.main.temp_max
    }       
}


const weatherByCityIdService = async (city, id) => {
    const cities = await cityRepo.findCities(city);
    //console.log(cities)
    const cityData = cities.features.find(e => e.id === id);
    const lon = cityData.geometry.coordinates[0];
    const lat = cityData.geometry.coordinates[1];
    return await weatherByCoordinatesService(lon, lat);
}

module.exports = {
    weatherByCoordinatesService,
    weatherByCityIdService
};










