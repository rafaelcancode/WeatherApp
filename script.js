const apiKey = "ab7c4e0252b0c3c7352919ad71ab38a7";
const url = "https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";
const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");

async function checkWeather(city) {
  const response = await fetch(url + city + `&appid=${apiKey}`);
  const data = await response.json();

  if (response.status == 404) {
    document.querySelector(".error").style.display = "block";
    document.querySelector(".weather").style.display = "none";
  } else {
    if (data.weather[0].main == "Clouds") {
      weatherIcon.src = "images/images/clouds.png";
    } else if (data.weather[0].main == "Clear") {
      weatherIcon.src = "images/images/clear.png";
    } else if (data.weather[0].main == "Drizzle.png") {
      weatherIcon.src = "images/images/drizzle.png";
    } else if (data.weather[0].main == "Rain.png") {
      weatherIcon.src = "images/images/rain.png";
    } else if (data.weather[0].main == "Snow.png") {
      weatherIcon.src = "images/images/snow.png";
    } else if (data.weather[0].main == "Mist.png") {
      weatherIcon.src = "images/images/mist.png";
    }
  }

  document.querySelector(".city").innerHTML = data.name;
  document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + " °";
  document.querySelector(".humidity").innerHTML = data.main.humidity;
  document.querySelector(".wind").innerHTML =
    Math.round(data.wind.speed) + " km/h";

  document.querySelector(".weather").style.display = "block";
  document.querySelector(".error").style.display = "none";
}

searchBtn.addEventListener("click", () => {
  checkWeather(searchBox.value);
});

searchBox.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    checkWeather(searchBox.value);
  }
});
