"use strict";

let cities = [
  { name: "New York, NY", latitude: 40.7128, longitude: -74.006 },

  { name: "Los Angeles, CA", latitude: 34.0522, longitude: -118.2437 },

  { name: "Chicago, IL", latitude: 41.8781, longitude: -87.6298 },

  { name: "Houston, TX", latitude: 29.7604, longitude: -95.3698 },

  { name: "Phoenix, AZ", latitude: 33.4484, longitude: -112.074 },

  { name: "Philadelphia, PA", latitude: 39.9526, longitude: -75.1652 },

  { name: "San Antonio, TX", latitude: 29.4241, longitude: -98.4936 },

  { name: "San Diego, CA", latitude: 32.7157, longitude: -117.1611 },

  { name: "Dallas, TX", latitude: 32.7767, longitude: -96.797 },

  { name: "San Jose, CA", latitude: 37.3382, longitude: -121.8863 },
];
const cityForcast = document.getElementById("cityForcast");
const tableDiv = document.getElementById("tableDiv");

window.onload = () => {
  //   console.log("I am here");
  selectCities();
};

function selectCities() {
  const selectCity = document.createElement("select");
  selectCity.className = "form form-control";
  selectCity.addEventListener("change", () =>
    citiesWeatherData(selectCity.value)
  );
  //   console.log("Hello");
  //   console.log(selectCity.value);
  for (let city of cities) {
    const citiesOption = document.createElement("option");
    citiesOption.textContent = city.name;
    citiesOption.value = city.name;
    selectCity.appendChild(citiesOption);
    cityForcast.appendChild(selectCity);
  }
}

// create function for city weather info

function citiesWeatherData(selectedCity) {
  console.log(selectedCity);
  const selectedCityData = cities.find((city) => city.name === selectedCity);

  let apiUrl = `https://api.weather.gov/points/${selectedCityData.latitude},${selectedCityData.longitude}`;
  fetch(apiUrl)
    .then((response) => response.json())
    .then((data) => {
      //   console.log(data.properties.forecast);
      let newApi = data.properties.forecast;
      fetch(newApi)
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          const table = document.createElement("table");
          table.className = "table border mt-5";
          const tableHeader = document.createElement("thead");
          tableHeader.className = "table-dark";
          const tableBody = document.createElement("tbody");
          const headerRow = document.createElement("tr");
          ["Time", "Temprature", "Wind", "Forecast"].forEach((text) => {
            const header = document.createElement("th");
            header.textContent = text;
            headerRow.appendChild(header);
          });
          tableHeader.appendChild(headerRow);
          table.appendChild(tableHeader);
          for (let values of data.properties.periods) {
            const row = document.createElement("tr");
            const cell = document.createElement("td");
            cell.textContent = values.name;
            const cell2 = document.createElement("td");
            cell2.textContent = `Temperature: ${values.temperature} ${values.temperatureUnit}`;
            const cell3 = document.createElement("td");
            cell3.textContent = `Wind: ${values.windDirection} ${values.windSpeed}`;
            const cell4 = document.createElement("td");
            cell4.textContent = `Forcast: ${values.forcast} ${values.shortForcast}`;

            row.appendChild(cell);
            row.appendChild(cell2);
            row.appendChild(cell3);
            row.appendChild(cell4);
            tableBody.appendChild(row);
          }
          table.appendChild(tableBody);
          tableDiv.appendChild(table);
        });
    });
}
