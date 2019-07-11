$('button').on('click',checking);

function checking()
{
    var city  = document.getElementById("city").value;
    console.log(city);
    $.ajax({
        type: 'GET',
        url: "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=metric" + "&APPID=af3f72199c0b9f7577f413ba180fecc7",
        dataType: 'json',
        success: function (data) {
            console.log(data);
            $("#temp").html(data.main.temp+"<sup>o</sup> C");
            $(".icon").attr('src', "http://openweathermap.org/img/w/" + data.weather[0].icon + ".png");
        }
    });
}