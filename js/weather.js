const weather = document.querySelector(".weather h2");
const citySpan = document.querySelector(".weather-city");
const infoSpan = document.querySelector(".weather-info");

const API = "da9eb322b77eef7603dd32e2e1507da5";

async function getWeather(url) {
  const response = await fetch(url);
  const json = await response.json();

  const city = json.name;
  const weather = json.weather[0].main;
  const temp = json.main.temp;

  citySpan.innerText = city;
  infoSpan.innerText = `${temp} ℃ / ${weather}`;
}

function success(pos) {
  const crd = pos.coords;

  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${crd.latitude}&lon=${crd.longitude}&appid=${API}&units=metric`;

  getWeather(url);
}

function error(err) {
  console.warn(`ERROR(${err.code}): ${err.message}`);
}

navigator.geolocation.getCurrentPosition(success, error);
