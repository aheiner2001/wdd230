// select HTML elements in the document
const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');


const apiKey = "5ca84e25ba24c56088236b3cf8ff4323"; // Replace with your actual API key
const lat = 49.75;
const lon = 6.64;
const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=imperial&appid=${apiKey}`;



async function apiFetch() {
    try {
    const response = await fetch(url); 
    if (response.ok) {
    const data = await response.json();
    displayResults(data);
    } else {
    throw Error(await response.text());
    }
    } catch (error) {
    console.log(error);
    }
    }

 

    function displayResults(data){
        const temp = data.main.temp;
        const weather = data.weather[0];
        const icon = weather.icon;
        const desc = weather.description;

       
        // currentTemp.innerHTML = "big";
        currentTemp.innerHTML = `${temp}&deg;F`;
        const iconsrc = `https://openweathermap.org/img/w/${icon}.png`;
        weatherIcon.setAttribute('src', iconsrc);
        weatherIcon.setAttribute('alt', desc);
        captionDesc.textContent = desc;
}

apiFetch();