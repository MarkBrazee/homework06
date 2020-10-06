<src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js">

// OpenWeather API key  ""
var APIKey = "87256196de89d20e22c222771dbc9601";

// OpenWeather URL to query the database
var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=Bujumbura,Burundi&appid=" + APIKey;

// OpenWeather URL to query the database for the UV data
var queryURLuv = "http://api.openweathermap.org/data/2.5/uvi?lat={lat}&lon={lon}&appid=" + APIKey;


// Create an AJAX call

$.ajax({
    url: queryURL,
    method: "GET"
}).then(function(response) {
    console.log(response);

    // create variables for city, wind, humidity, UV Index and temperature

    var cityDiv = $(".city").text(response.main.name);
    var windDiv = $(".wind").text(response.wind.speed);
    var humDiv = $(".humidity").text(respsone.main.humidity);
    var uvIndexDiv = $(".uvIndex").text( )

    // convert Kelvin to Farenheit temperature 
    var kelvTemp = parseInt(response.main.temp)
    var farTemp = (kelvTemp - 273.5) * 1.80 + 32;
    var tempDiv = (".temp").text(farTemp)


});