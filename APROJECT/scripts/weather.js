document.addEventListener('DOMContentLoaded', () => {
    fetchWeather();
    fetchForecast();
    showBanner();
});

const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('#caption-desc');
const humidityElement = document.querySelector('#humidity');
const nextDayTemp = document.querySelector('#next-day-temp');
const highTempBanner = document.querySelector('#high-temp-banner');
const highTempMessage = document.querySelector('#high-temp-message');
const banner = document.querySelector('#meet-greet-banner');
const apiKey = "5ca84e25ba24c56088236b3cf8ff4323"; 
const lat = 20.5000;
const lon = -86.9500;
const currentWeatherUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=imperial&appid=${apiKey}`;
const forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=imperial&appid=${apiKey}`;

async function fetchWeather() {
    try {
        const response = await fetch(currentWeatherUrl);
        if (response.ok) {
            const data = await response.json();
            displayCurrentWeather(data);
            displayHighTemp(data);
        } else {
            throw new Error(`Current weather fetch failed: ${response.statusText}`);
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
            throw new Error(`Forecast fetch failed: ${response.statusText}`);
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
    const humidity = data.main.humidity;

    currentTemp.innerHTML = `${temp}&deg;F`;
    const iconsrc = `https://openweathermap.org/img/w/${icon}.png`;
    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', desc);
    captionDesc.textContent = desc;
    humidityElement.textContent = `Humidity: ${humidity}%`;
}

function displayHighTemp(data) {
    const highTemp = data.main.temp_max;
    highTempMessage.innerHTML = `🛵 High temperature for today: ${highTemp}&deg;F 🛵` ;
    highTempBanner.classList.remove('hidden');
}

function displayForecast(data) {
    const forecastList = data.list;
    const nextDayForecast = forecastList.find(forecast => {
        const forecastDate = new Date(forecast.dt_txt);
        const today = new Date();
        return forecastDate.getDate() === today.getDate() + 1 && forecastDate.getHours() === 15;
    });

    if (nextDayForecast) {
        const nextDayTempValue = nextDayForecast.main.temp;
        nextDayTemp.innerHTML = `Temperature: ${nextDayTempValue}&deg;F at 3:00 PM`;
    } else {
        nextDayTemp.innerHTML = 'No forecast available for 3:00 PM tomorrow.';
    }
}

function showBanner() {
    const today = new Date();
    const dayOfWeek = today.getDay(); // Sunday = 0, Monday = 1, ..., Saturday = 6
    if (dayOfWeek >= 1 && dayOfWeek <= 3) { // Monday to Wednesday
        banner.classList.remove('hidden');
    }
}

function closeBanner() {
    highTempBanner.classList.add('hidden');
}
