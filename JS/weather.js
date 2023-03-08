// API_KEY = 3b9f01fac5768ab53ac2483503953b21
// City ID =  2964574
function getWeatherData(cityID) {
	var key = '3b9f01fac5768ab53ac2483503953b21';
	fetch('https://api.openweathermap.org/data/2.5/weather?id=' + cityID + '&appid=' + key)
		.then(function (resp) {
			return resp.json();
		})
		.then(function (data) {
			drawWeather(data);
		})
		.catch(function () {
			// catch any errors
		});
}

function drawWeather(d) {
	var celcius = Math.round(parseFloat(d.main.temp) - 273.15);
	document.getElementById('desc').innerHTML = d.weather[0].description;
	document.getElementById('temp').innerHTML = celcius + '&deg;C';
	document.getElementById('location').innerHTML = d.name;
}

function cityWeather() {
	var city = document.getElementById('city-select');
	const value = city.value;
	switch (value) {
		case 'dublin':
			getWeatherData(2964574);
			break;
		case 'london':
			getWeatherData(2643743);
			break;
		case 'sydney':
			getWeatherData(2147714);
			break;
		case 'new-york':
			getWeatherData(5128581);
			break;
		case 'tokyo':
			getWeatherData(1850147);
		default:
			break;
	}
}

document.getElementById('city-select').addEventListener('change', function () {
	getWeatherData(cityWeather());
});
getWeatherData(cityWeather());

window.onload = function () {
	getWeatherData(cityWeather());
};

// getWeatherData(2964574);
