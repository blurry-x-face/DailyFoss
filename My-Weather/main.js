$(document).ready(function(){
    $('#btn').click(function(){ 
      var city = $('#city').val();
      //alert(city);
      $('#temp').attr('style','"display: block;"')     
      
      let key='d04a2f7e083913ea5b3767657fbc6a38';

      var tempr = {
        "async": true,
        "crossDomain": true,
        "url": `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${key}`,
        "method": "GET"
      }
      
      $.ajax(tempr).done(function (response) {
      
        $(".temprature").empty();
        var content = response.main.temp;
        $(".temprature").append(content);
      
        $(".humid").empty();
        var humidity = response.main.humidity;
        $(".humid").append(humidity);
      
      });

    });
  });
  