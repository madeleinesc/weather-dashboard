var button = document.querySelector('button')

var apiKey = "78196b2ec1caf4656d01a3423931079a"; // key to access weather api's

// TODAY'S DAY AND DATE FOR JUMBOTRON 
// set current date and time 
var currentDay = moment().format("dddd, MMMM Do");

// display current date/time 
$("#currentDay").text(currentDay);