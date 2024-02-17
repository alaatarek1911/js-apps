const apiKey = "33bb0f56e522d7e96e2efb07d6c5ff16";
const apiUrl =
  "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");
async function checkWeather(city) {
  const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
  if (response.status == 404) {
    document.querySelector(".error").style.display = "block";
    document.querySelector(".weather").style.display = "none";
  } else {
    let data = await response.json();
    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML =
      Math.round(data.main.temp) + " °C";
    document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";
    document.querySelector(".humidity").innerHTML = data.main.humidity + " %";
    if (data.weather[0].main == "Clouds") {
      weatherIcon.src = "./assets/images/clouds.jpg";
    } else if (data.weather[0].main == "Clear") {
      weatherIcon.src = "./assets/images/clear.jpg";
    } else if (data.weather[0].main == "Rain") {
      weatherIcon.src = "./assets/images/rain.jpg";
    } else if (data.weather[0].main == "Mist") {
      weatherIcon.src = "./assets/images/mist.jpg";
    } else if (data.weather[0].main == "Drizzle") {
      weatherIcon.src = "./assets/images/drizzle.jpg";
    }
    document.querySelector(".error").style.display = "none";
    document.querySelector(".weather").style.display = "block";
  }
}
searchBtn.addEventListener("click", () => {
  checkWeather(searchBox.value);
});
