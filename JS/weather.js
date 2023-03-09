// API_KEY = 3b9f01fac5768ab53ac2483503953b21
// cityID =  2964574
function getWeatherData(cityID) {
	let key = '3b9f01fac5768ab53ac2483503953b21';
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
	let celcius = Math.round(parseFloat(d.main.temp) - 273.15);
	document.getElementById('desc').innerHTML = d.weather[0].description;
	document.getElementById('temp').innerHTML = celcius + '&deg;C';
	document.getElementById('location').innerHTML = d.name;
}

function cityChoice() {
	let city = document.getElementById('city-select');
	const value = city.value;
	switch (value) {
		case 'dublin':
			return 2964574;
		case 'london':
			return 2643743;
		case 'sydney':
			return 2147714;
		case 'new-york':
			return 5128581;

		case 'tokyo':
			return 1850147;
		default:
			return 2964574;
	}
}

document.getElementById('city-select').addEventListener('change', function () {
	getWeatherData(cityChoice());
});
getWeatherData(cityWeather());

window.onload = function () {
	getWeatherData(cityWeather());
};

// getWeatherData(2964574);
