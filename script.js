const apiKey = "ab7c4e0252b0c3c7352919ad71ab38a7";
const url = "https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";
const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");

async function checkWeather(city) {
  const response = await fetch(url + city + `&appid=${apiKey}`);
  var data = await response.json();

  console.log(data);
  document.querySelector(".city").innerHTML = data.name;
}

searchBtn.addEventListener("click", () => {
  checkWeather(searchBox.value);
});
