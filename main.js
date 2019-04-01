$('button').on('click',checking);

function checking()
{
    var city = $("#city").val();
    $.ajax({
        type: 'GET',
        url: "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=metric" + "&APPID=af3f72199c0b9f7577f413ba180fecc7",
        dataType: 'json',
        success: function (data) {
            console.log(data.main.temp);
            $("#temp").html(data.main.temp);
            $(".icon").attr('src', "http://openweathermap.org/img/w/" + data.weather[0].icon + ".png");
        }
    });
}