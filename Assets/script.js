<src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js">

// OpenWeather API key  ""
var APIKey = "87256196de89d20e22c222771dbc9601";

// OpenWeather URL to query the database
var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=Bujumbura,Burundi&appid=" + APIKey;

// OpenWeather URL to query the database for the UV data
var queryURLuv = "http://api.openweathermap.org/data/2.5/uvi?lat={lat}&lon={lon}&appid=" + APIKey;



// Create an AJAX call

$("#city-input").on("click", function(event) {

    // event.preventDefault() can be used to prevent an event's default behavior.
    // Here, it prevents the submit button from trying to submit a form when clicked
    event.preventDefault();

    // text from the input box
    var city = $("#city-input").val();

    // Create an AJAX call

    $.ajax({
    url: queryURL,
    method: "GET"
}).then(function(response) {
        $("#city-input").text(JSON.stringify(response));

    // create variables for city, wind, humidity, UV Index and temperature

        var cityDiv = $(".city").text("");
        var windDiv = $(".wind").text(response.wind.speed);
        var humDiv = $(".humidity").text(respsone.main.humidity);
        var uvIndexDiv = $(".uvIndex").text( )

        // convert Kelvin to Farenheit temperature 
        var kelvTemp = parseInt(response.main.temp)
        var farTemp = (kelvTemp - 273.5) * 1.80 + 32;
        var tempDiv = (".temp").text(farTemp)
    });    

});