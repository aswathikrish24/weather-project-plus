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
  //console.log(response);
  //let description = response.data.condition.description;
  //let humidity = response.data.temperature.humidity;
  //let wind_speed = response.data.wind.speed;
  //let time = response.data.time;
  //let icon_url = response.data.condition.icon_url;
  let temperatureElement = document.querySelector("#weather-temperature");
  temperatureElement.innerHTML = response.data.temperature.current.toFixed(1);
}

getWeather("Paris");
