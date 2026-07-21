document.getElementById('search-btn').addEventListener('click', fetchWeather);

// Triggers search when 'Enter' key is pressed
document.getElementById('city-input').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        fetchWeather();
    }
});

function fetchWeather() {
    const city = document.getElementById('city-input').value.trim();
    const weatherInfo = document.getElementById('weather-info');
    const errorMsg = document.getElementById('error-msg');

    if (!city) {
        showError('Please enter a city name.');
        return;
    }

    // API_KEY is loaded directly from config.js
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;

    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error('City not found or API key invalid');
            }
            return response.json();
        })
        .then(data => {
            // Update HTML text with API response data
            document.getElementById('city-name').textContent = `${data.name}, ${data.sys.country}`;
            document.getElementById('temperature').textContent = Math.round(data.main.temp);
            document.getElementById('condition').textContent = data.weather[0].description;
            document.getElementById('humidity').textContent = data.main.humidity;

            // Show weather data layout, hide errors
            weatherInfo.classList.remove('hidden');
            errorMsg.classList.add('hidden');
        })
        .catch(err => {
            showError(err.message);
            weatherInfo.classList.add('hidden');
        });
}

function showError(message) {
    const errorMsg = document.getElementById('error-msg');
    errorMsg.textContent = message;
    errorMsg.classList.remove('hidden');
}