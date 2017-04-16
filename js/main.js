$(document).ready(function () {

    var weather = "";
    var units = "";
    var icon = "";
    var wCode = "";
    var tempC = "";
    var tempF = "";
    var city = "";
    var degC = true

    //  Convert tempF - tempC
    $("#units").on("click", function () {
        if (degC == true) {
            degC = false;
            $("#temp").html(tempF);
        } else if (degC == false) {
            degC = true;
            $("#temp").html(tempC);
        }
    });

    $.getJSON("http://ip-api.com/json/?callback=?", function (data) {
        city = data.city;
        var lat = data.lat;
        var long = data.lon;
        //loop through location data to find city and lat and long coords
        $.ajax({
            url: 'http://api.openweathermap.org/data/2.5/weather?lat=' + lat + '&lon=' + long + '&units=metric&APPID=01f76ff80809736b4b25533f9daffbe6',
            type: 'GET',
            data: {},
            datatype: 'json',
            success: function (data1) {
                tempC = Math.round(data1.main.temp) + "°C";
                tempF = Math.round(data1.main.temp * 9 / 5 + 32) + "°F";
                //Celsius and Farenheit
                weather = data1.weather[0].description;
                //current weather
                icon = data1.weather[0].icon;
                //weather icon
                wCode = data1.weather[0].id;
                //alert(wCode)
                //get the weather code
                $("#city").html("The temperature in " + city + " now is:");
                $("#temp").html(tempC + "<br>");
                $("#Wea").html("Outlook: " + weather + "<br> <img src = 'http://openweathermap.org/img/w/" + icon + ".png'>");
                //create the information that will be shown inside the divs
                //alert(wCode);
                selectBg(wCode);
                document.body.style.backgroundImage = weatherPic;
                //alert(weatherPic)
                //apply the background image 
            },
            error: function (err) {
                alert("opsie daisies")
            },
            //on error show message
        });

    });

});
