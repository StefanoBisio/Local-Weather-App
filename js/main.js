var api = "";
var long;
var lat;

if (navigator.geolocation) {navigator.geolocation.getCurrentPosition(function(position) {
    long = position.coords.longitude;
    lat = position.coords.latitude;
    api = "http://api.openweathermap.org/data/2.5/weather?lat="+lat+"&lon="+long+"&appid=01f76ff80809736b4b25533f9daffbe6";
    $("#city").html("your coordinates are: Lat "+lat+"<br>"+"Longitude: "+long+"<br>"+api);

          
    });
                            
                            
}

