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

// Find the lat and long of the users location
function intiGeoLocation() {

    if(navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(success, fail)
    }
    else{
        alert("Sorry, your browser does not support geolocation services.")
    }
}

function success(position){
    //ADD your keys here. My keys are located in a key.js file but are not included in the sample code for security reasons.
    //var dsKey = "";
    //var googleApiKey= "";
    fetchLocation(googleApiKey, position.coords.latitude, position.coords.longitude)
    fetchWeatherReport(dsKey, position.coords.latitude, position.coords.longitude)
} 

