// OpenWeather API key  ""
var APIKey = "87256196de89d20e22c222771dbc9601";

// create variable for local storage
var searchedCities = JSON.parse(localStorage.getItem("searchedCities")) || []

// OpenWeather URL to query the database
function createQueryUrl(cityQuery) {
    return `https://api.openweathermap.org/data/2.5/weather?q=${cityQuery}&appid=${APIKey}`
};

// OpenWeather URL to query the database for the UV data
function createUVQueryUrl(lat,lon) {
    return `http://api.openweathermap.org/data/2.5/uvi?lat=${lat}&lon=${lon}&appid=${APIKey}`
};


//Local Storage

function addCity(cityToAdd) {
    searchedCities.push(cityToAdd)

    localStorage.setItem("searchedCities", JSON.stringify(searchedCities))

    // To do: show list of city buttons on the screen

    // To do: add a click event listener to the buttons so that they search for that city's weather when clicked.

}

// Create an AJAX call

$("#city-btn").on("click", function(event) {

    // event.preventDefault() can be used to prevent an event's default behavior.
    // Here, it prevents the submit button from trying to submit a form when clicked
    event.preventDefault();

    // text from the input box
    var city = $("#city-input").val();

    // Create an AJAX call for the city, temperature, wind and humidity.

    $.ajax({
    url: createQueryURL(city),
    method: "GET"
    }).then(function(response) {
        
        // Add the searched city to the search history
        addCity(city)
        
        // city, wind, humidity, UV Index and temperature

        $(".city").text(respnse.name);
        $(".wind").text(response.wind.speed);
        $(".humidity").text(respsone.main.humidity);
       

        // convert Kelvin to Farenheit temperature 
        var kelvTemp = parseInt(response.main.temp)
        var farTemp = (kelvTemp - 273.5) * 1.80 + 32;
        var tempDiv = (".temp").text(farTemp)
    });    

    // Search for the UV Index
    $.ajax({
        url: createUVQueryUrl(city),
        method: "GET"
        }).then(function(response) {
            console.log(resposne)

        $(".uvIndex").text(respnse.name);
    });
});