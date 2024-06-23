const inputBox = document.querySelector('.input-box');
const searchBtn = document.getElementById('search-btn');
const weather_img = document.querySelector('.weather-img');
const temperature = document.querySelector('.temperature');
const description = document.querySelector('.description');
const humidity = document.getElementById('humidity'); // Corrected typo in variable name
const wind_speed = document.getElementById('wind-speed');
const location_not_found = document.querySelector('.location-not-found')
const weather_body = document.querySelector('weather-body')







async function checkWeather(city) {
    const api_key = "5d353ba6dff3cdcc09767bbc43b35bea";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`;

    const weather_data = await fetch(url).then(response => response.json());

    if (weather_data.cod === '404') {
        location_not_found.style.display = "flex";
    } else {
        location_not_found.style.display = "none";
        temperature.innerHTML = `${Math.round(weather_data.main.temp - 273.15)}`;
        description.innerHTML = weather_data.weather[0].description;
        humidity.innerHTML = `${weather_data.main.humidity}%`;
        const windSpeedKmH = Math.round(weather_data.wind.speed * 3.6);
        wind_speed.innerHTML = `${windSpeedKmH} km/h`;

        switch (weather_data.weather[0].main) {
            case 'Clouds':
                weather_img.src = "./cloud.jpg";
                break;
            case 'Clear':
                weather_img.src = "./clear.jpg";
                break;
            case 'Rain':
                weather_img.src = "./rainy.jpg";
                break;
            case 'Mist':
                weather_img.src = "./mist.jpg";
                break;
            case 'Snow':
                weather_img.src = "./snow.jpg";
                break;
            case 'Haze':
                weather_img.src = "./mist.jpg";
                break;
        }
    }
}

searchBtn.addEventListener('click', () => {
    checkWeather(inputBox.value);
});
