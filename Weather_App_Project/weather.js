const wDay = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const wMonth = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

const iconValue = {
    CLEARDAY: 'clear-day',
    CLEARNIGHT: 'clear-night',
    RAIN: 'rain',
    SNOW: 'snow',
    SLEET: 'sleet',
    WIND: 'wind',
    FOG: 'fog',
    CLOUDY: 'cloudy',
    PARTLY_CLOUDY_DAY: 'partly-cloudy-day',
    PARTLY_CLOUDY_NIGHT: 'partly-cloudy-night'
}

//Fecth the weather from the dark ski api
function fetchWeatherReport(apiKey, latitude, longitude) {

    //To avoid the cors issue you need to run through a proxy or make the call server side
    var DsProxyLink = 'https://cors-anywhere.herokuapp.com/';
    var DsApiLink = `${DsProxyLink}https://api.darksky.net/forecast/${apiKey}/${latitude},${longitude}?exclude=minutely,alerts,flags`;

    fetch(DsApiLink)
        .then(response => {
            return response.json()
        })
        .then(data => {
            //Work with JSON data here
            var resultsHTML = "";
            var tableHTML = "";
            var summary = data.currently.summary;
            var temperature = data.currently.temperature;
            var icon = data.currently.icon;
            var precipProbability = data.currently.precipProbability;
            var humidity = data.currently.humidity;
            var windSpeed = data.currently.windSpeed
            var ts = new Date(data.currently.time * 1000);
            var forecastDate = `${wDay[ts.getDay()]} ${wMonth[ts.getMonth()]} ${ts.getDate()}`

            //Set values for the current conditions
            //document.getElemenyById("location").innerHTML = name;
            document.getElementById("dayTime").innerHTML = forecastDate;
            document.getElementById("summary").innerHTML = summary;
            document.getElementById("currentTemp").innerHTML = `${Math.round(temperature)}&deg`;
            document.getElementById("weatherIcon").src = getICON(icon);
            document.getElementById("perciptation").innerHTML = `Precipitation ${precipProbability*100}%`;
            document.getElementById("humidty").innerHTML = `Humidity ${Math.round(humidity*100)}%`;
            document.getElementById("wind").innerHTML = `Winds ${Math.round(windSpeed)} mph`;

            //Render the forcasts tabs
            document.getElementById("dailyForecast").innerHTML = renderWeeklyForecast(data.daily);
            document.getElementById("weeklyForecast").innerHTML = renderDailyForecast(data.hourly);
        })
        
}

function fetchLocation(apiKey, latitude, longitude){

    // You don't need a proxy but you need to secure your key in the google developer console.
    var googleApiLink = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=${apiKey}`;

    fetch(googleApiLink)
    .then(response => {
        return response.json()
    })
    .then(data =>{
        //Work with JSON data here
        document.getElementById("location").innerHTML = data.results[4].formatted_address;
    })
    .catch (err =>{
        throw ('Sorry, an error occured ${err}');
    })

}

//Find the lat and long of the users location
function intiGeoLocation() {

    if (navigator.geolocation) {
        //Call getCurrentPosition with success and failure callbacks
        navigator.geolocation.getCurrentPosition(success, fail);
    }
    else {
        alert("Sorry, your browser does not support geolocation services.");
    }
}

function success(position) {
    //ADD your keys here. My keys are located in a key.js file but are not included in the sample code for security reasons.
    //var dsKey = "";
    //var googleApiKey= "";
    fetchLocation(googleApiKey, position.coords.latitude, position.coords.longitude)
    fetchWeatherReport(dsKey, position.coords.latitude, position.coords.longitude)
} 

function fail() {

    //You could default to your favorite city like Kernersville, NC the home of Coder Foundry!
    alert("Sorry, your browser does not support geolocation services.");
}