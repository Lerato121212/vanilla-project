function dateFormat(date) {
  let minutes = date.getMinutes();
  let hours = date.getHours();
  let day = date.getDay();

  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  if (hours < 10) {
    hours = `0${hours}`;
  }
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  let dayAfterFormat = days[day];
  return `${dayAfterFormat} ${hours}:${minutes}`;
}
let formSearch = document.querySelector("#formSearch");
formSearch.addEventListener("submit", search);

let latestCityDAte = document.querySelector("#cityDate");
let latestDate = new Date();

latestCityDAte.innerHTML = dateFormat(latestCityDAte);
