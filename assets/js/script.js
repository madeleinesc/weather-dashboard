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
