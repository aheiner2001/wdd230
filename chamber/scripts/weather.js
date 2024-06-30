const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('#caption-desc');

const forecastContainer = document.querySelector('#forecast');
const banner = document.querySelector('#meet-greet-banner');
const apiKey = "5ca84e25ba24c56088236b3cf8ff4323"; // Replace with your actual API key
const lat = 43.586157;
const lon = -116.645294;
const currentWeatherUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=imperial&appid=${apiKey}`;
const forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=imperial&appid=${apiKey}`;

async function fetchWeather() {
    try {
        const response = await fetch(currentWeatherUrl);
        if (response.ok) {
            const data = await response.json();
            displayCurrentWeather(data);
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.error(error);
    }
}

async function fetchForecast() {
    try {
        const response = await fetch(forecastUrl);
        if (response.ok) {
            const data = await response.json();
            displayForecast(data);
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.error(error);
    }
}

function displayCurrentWeather(data) {
    const temp = data.main.temp;
    const weather = data.weather[0];
    const icon = weather.icon;
    const desc = weather.description;
  

    currentTemp.innerHTML = `${temp}&deg;F`;
    const iconsrc = `https://openweathermap.org/img/w/${icon}.png`;
    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', desc);
    captionDesc.textContent = desc;
    
}

function displayForecast(data) {
    forecastContainer.innerHTML = '';
    const forecastData = data.list.filter((item, index) => index % 8 === 0).slice(0, 3);

    forecastData.forEach(forecast => {
        const date = new Date(forecast.dt_txt).toLocaleDateString();
        const temp = forecast.main.temp;
        const desc = forecast.weather[0].description;
        const icon = forecast.weather[0].icon;
        const iconsrc = `https://openweathermap.org/img/w/${icon}.png`;

        const forecastElem = document.createElement('div');
        forecastElem.classList.add('forecast-day');
        forecastElem.innerHTML = `
            <h4>${date}</h4>
            <img src="${iconsrc}" alt="${desc}">
            <p>${temp}&deg;F</p>
            <p>${desc}</p>
       
        `;
        forecastContainer.appendChild(forecastElem);
    });
}


function showBanner() {
    const today = new Date();
    const dayOfWeek = today.getDay(); // Sunday = 0, Monday = 1, ..., Saturday = 6
    if (dayOfWeek >= 1 && dayOfWeek <= 3) { // Monday to Wednesday
        banner.classList.remove('hidden');
    }
}

function closeBanner() {
    banner.classList.add('hidden');
}

document.addEventListener('DOMContentLoaded', () => {
    fetchWeather();
    fetchForecast();
    showBanner();
});
