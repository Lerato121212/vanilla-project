function weatherResponse(response) {
  let temperatureElement = document.querySelector("#temperature");
  let temperature = reponse.data.temperature.current;
  let cityElement = document.querySelector("#city");
  let descriptionElement = document.querySelector("#description");
  let humidityElement = document.querySelector("#humidity");
  let windspeedElement = document.querySelector("#wind-speed");
  let timeElement = document.querySelector("#time");
  let date = new date("response.data.time*1000");
  let iconElement = document.querySelector("#icon");

  cityElement.innerHTML = response.data.city;
  timeElement.innerHTML = formatDate(date);
  descriptionElement.innerHTML = response.data.condition.description;
  humidityElement.innerHTML = `${response.data.temperature.humidity}%`;
  windspeedElement.innerHTML = `${response.data.wind.speed}km/h`;
  temperatureElement.innerHTML = Math.round(temperature);
  iconElement.innerhtml = `<img src="${response.data.condition.icon_url}" class="weather-app-icon" />`;
}
function formatDate(date) {
  let minutes = date.getMinutes();
  let hours = date.getHours();
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = days[date.getDay()];
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  return `${day} ${hours} ${minutes}`;
}
function weatherNew(response) {
  let temperatureElement = document.querySelector("#temp");
  temperatureElement.innerHTML = response.data.temperature.current;
temperatureElement.innerHTML = Math.round(temperature);
}
function searchCity(city) {
  let apiKey = `teba6f0d67dd94612o497355b3df082a`;
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${nameOfCity}&key=teba6f0d67dd94612o497355b3df082a&units=metric`;

  return apiUrl;
}

function submitSearchForm(event) {
  event.preventDefault();
  let inputSearch = document.querySelector("#inputSearchButton");
  let city = document.querySelector("#nameOfCity");
  city.innerHTML = inputSearch.value;
  searchCity(inputSearch.value);
}

let formElement = document.querySelector("#formSearch");
formElement.addEventListener("submit", submitSearchForm);
