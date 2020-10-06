<src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js">

// This is our API key. Add your own API key between the ""
var APIKey = "87256196de89d20e22c222771dbc9601";

// Here we are building the URL we need to query the database
var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=Bujumbura,Burundi&appid=" + APIKey;

// Create an AJAX call
$.ajax({
    url: queryURL,
    method: "GET"
}).then(function(response) {
    console.log(response);

    var cityDiv = $(".city").text(response.main.name);
    var windDiv = $(".wind").text(response.wind.speed);
    var humDiv = $(".humidity").text(respsone.main.humidity);
    var uvIndexDiv = $(".uvIndex").text( )

}