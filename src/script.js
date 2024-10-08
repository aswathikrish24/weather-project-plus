let searchFormElement = document.querySelector("#search-form");
searchFormElement.addEventListener("submit", setCityName);

function setCityName(event) {
  event.preventDefault();
  let searchInputElement = document.querySelector("#search-input");
  let cityElement = document.querySelector("#city");
  cityElement.innerHTML = searchInputElement.value;
  getWeather(searchInputElement.value);
}

function getWeather(cityName) {
  let api_key = "cb600a4o3187t2f77232fbd6703a2aba";
  let api_url = `https://api.shecodes.io/weather/v1/current?query=${cityName}&key=${api_key}&units=metric`;
  axios.get(api_url).then(updateWeather);
}

function updateWeather(response) {
  let time = new Date(response.data.time * 1000);
  console.log(time);
  let timeElement = document.querySelector("#time");
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  let minutes = time.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  timeElement.innerHTML = `${
    days[time.getDay()]
  } ${time.getHours()}:${minutes}`;

  let icon_url = response.data.condition.icon_url;
  let weatherIconElement = document.querySelector("#icon");
  weatherIconElement.innerHTML = `
    <img src=${icon_url} class="weather-icon" />
  `;
  let temperatureElement = document.querySelector("#weather-temperature");
  temperatureElement.innerHTML = response.data.temperature.current.toFixed(1);
  let weatherDescriptionElement = document.querySelector(
    "#weather-description"
  );
  weatherDescriptionElement.innerHTML = response.data.condition.description;
  let humidityElement = document.querySelector("#humidity");
  humidityElement.innerHTML = response.data.temperature.humidity + "%";
  let windElement = document.querySelector("#wind-speed");
  windElement.innerHTML = response.data.wind.speed + " km/h";
}

getWeather("Paris");
