let searchFormElement = document.querySelector("#search-form");
searchFormElement.addEventListener("submit", getCityWeather);

function getCityWeather(event) {
  event.preventDefault();
  let searchInputElement = document.querySelector("#search-input");
  let cityElement = document.querySelector("#city");
  cityElement.innerHTML = searchInputElement.value;
}
