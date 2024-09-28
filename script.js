const apiKey = 'f66b88c6a1a24d52e4a1f65e16e0930e'; 

function getWeather() {
    const city = document.getElementById('city-input').value.trim();

    if (!city) {
        alert('Please enter a city name');
        return;
    }

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            console.log(data);  //  API response to the console

            if (data.cod === 200) {
                //  weather data
                document.getElementById('weather-result').style.display = 'block';
                document.getElementById('city-name').textContent = data.name;
                document.getElementById('weather-description').textContent = data.weather[0].description;
                document.getElementById('temperature').textContent = `Temperature: ${data.main.temp} °C`;
                document.getElementById('humidity').textContent = `Humidity: ${data.main.humidity}%`;
                
                //  weather icon
                const iconCode = data.weather[0].icon;
                const iconUrl = `https://openweathermap.org/img/wn/${iconCode}@2x.png`;
                document.getElementById('weather-result').innerHTML += `<img src="${iconUrl}" class="weather-icon" alt="Weather Icon">`;
            } else {
                alert('City not found');
            }
        })
        .catch(error => {
            console.error('Error fetching weather data:', error);
        });
}
