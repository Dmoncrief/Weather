"use strict"

let cities = [
    { name: "New York, NY", 
    latitude: 40.7128,
     longitude: -74.0060 },

    { name: "Los Angeles, CA", 
    latitude: 34.0522, 
    longitude: -118.2437 },

    { name: "Chicago, IL", 
    latitude: 41.8781, 
    longitude: -87.6298 },

    { name: "Houston, TX", 
    latitude: 29.7604, 
    longitude: -95.3698 },

    { name: "Phoenix, AZ", 
    latitude: 33.4484, 
    longitude: -112.0740 },

    { name: "Philadelphia, PA", 
    latitude: 39.9526, 
    longitude: -75.1652 },

    { name: "San Antonio, TX", 
    latitude: 29.4241, 
    longitude: -98.4936 },

    { name: "San Diego, CA", 
    latitude: 32.7157, 
    longitude: -117.1611 },

    { name: "Dallas, TX", 
    latitude: 32.7767, 
    longitude: -96.7970 },

    { name: "San Jose, CA", 
    latitude: 37.3382, 
    longitude: -121.8863 }
];

console.log("cities")





const cityForcast = document.getElementById("cityForcast");
const selectCities = document.createElement("select");
selectCities.className = "form form-control"

for (let city of cities){
const citiesOption = document.createElement("option")
    citiesOption.textContent = city.name
    citiesOption.value = city.name;
    selectCities.appendChild(citiesOption);

}

cityForcast.appendChild(selectCities);

// create function for city weather info

function createCityWeatherInfo() {
    const cityWeather = document.getElementById("cityWeather");
    
   
    cityWeather.innerHTML = "";

    for (let city of cities) {
       
        const option = document.createElement("option");
        option.text = city.name;
        option.value = `${city.latitude},${city.longitude}`;
        cityWeather.appendChild(option);
    }
}

