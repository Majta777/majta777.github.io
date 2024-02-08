document.getElementById('datetime').innerHTML = new Date().toLocaleString();

fetch('https://api.openweathermap.org/data/2.5/weather?q=Warsaw,pl&appid=2a0ea58bebb82e7cc708cdbdef0f9dd6&units=metric&lang=pl')
    .then(response => response.json())
    .then(data => {
        const weatherInfo = `Temperatura: ${data.main.temp}°C, ${data.weather[0].description}`;
        document.getElementById('weather').innerHTML = weatherInfo;
    })
    .catch(error => console.error('Błąd:', error));
