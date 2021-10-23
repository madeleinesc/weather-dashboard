var button = document.querySelector('button')

var apiKey = "78196b2ec1caf4656d01a3423931079a"; // key to access weather api's

// TODAY'S DAY AND DATE FOR JUMBOTRON 
// set current date and time 
var currentDay = moment().format("dddd, MMMM Do");

// display current date/time 
$("#currentDay").text(currentDay);

// function to get current weather for a city
function getWeather(city) {

    fetch(
        "https://api.openweathermap.org/data/2.5/weather?q="
        // + city as a parameter
        + city
        // temp will be in metric (celsius) as the most common in the world
        + "&units=metric&appid="
        + this.apiKey // app key
    )
        .then((response) => response.json())
        .then((data) => this.displayWeather(data));
}

// function to display the current weather
function displayWeather(data) {
    
    //console.log(data);

    const { name } = data; // for city mame in api
    const { icon } = data.weather[0]; // for current weaather icon in api
    const { temp, humidity } = data.main; // for current temp and humidity in api
    const { speed } = data.wind; // for current wind speed in api
    const { lat, lon } = data.coord;
    // in console: dailyWeather.getWeather("City Name")
    //console.log(name, icon, temp, humidity, speed, lat, lon);
    // to get city name to display in page (using class .city)
    document.querySelector(".city").innerText = "Today in " + name;
    // to get icon to show in page (using class .weatherIcon)
    document.querySelector(".weatherIcon").src = "https://openweathermap.org/img/wn/" + icon + "@2x.png";
    // to get temp 
    document.querySelector(".temp").innerText = temp + "ºC";
    // to get humidty & wind
    document.querySelector(".wind").innerText = "Wind: " + speed + " km/h"; // not working: saying undefined
    document.querySelector(".humidity").innerText = "Humidity: " + humidity + "%";

    fetch(
        "https://api.openweathermap.org/data/2.5/onecall?lat="
        + lat
        + "&lon=" + lon
        + "&units=metric&appid="
        + apiKey
    )
        .then((response) => response.json(response))
        .then((data) => {
            const { uvi } = data.current
            console.log(uvi)
            document.querySelector(".uv").innerText = "UV Index: " + uvi

        });

}

function get5day(city) {

    fetch(
        "https://api.openweathermap.org/data/2.5/forecast?q="
        // + city as a parameter
        + city
        // temp will be in metric (celsius) as the most common in the world
        + "&units=metric&appid="
        + apiKey // app key
    )
    .then(response => response.json())
    .then((data) => this.display5day(data));

}


// event listener for search button 
// will take user input and return weather parameters for that city
button.addEventListener('click', function () {
    var city = document.querySelector(".searchBar").value;

    getWeather(city);

   
})