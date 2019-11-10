function weathr(){
    
    var    city1 = document.getElementById('city').value;
    var  link_api='http://api.openweathermap.org/data/2.5/weather?q='+city1+'&appid=e8cde246c8e175455f7354975fd34a4a&units=metric';
    fetch(link_api)
   .then(
     function(valu) {
     if (valu.status !== 200) {
      document.getElementById('temp').innerHTML='<br>Please enter correct city';
     return;
    } 

valu.json().then(function(data) {
document.getElementById('temp').innerHTML='<br><p>City : ' + city1 + ' <p>Temperature : '+ (data.main.temp) + '&#8451;</p><p>Humidity : '+data.main.humidity+'%</p>';
document.getElementById('img').src='https://raw.githubusercontent.com/Subhash2807/Weather-App-JavaScript/master/icons/' + data.weather[0].icon+'.png';
// imge(data.weather[0].main);
});
}
)
;
}

function defult(){
    
    var  link_api='http://api.openweathermap.org/data/2.5/weather?q=lucknow&appid=e8cde246c8e175455f7354975fd34a4a&units=metric';
    fetch(link_api)
   .then(
     function(valu) {

valu.json().then(function(data) {
document.getElementById('temp').innerHTML='<br><p>City : Lucknow <p>Temperature : '+ Math.floor(data.main.temp) +'&#8451;</p><p>Humidity : '+data.main.humidity+' %</p>';
document.getElementById('img').src='https://raw.githubusercontent.com/Subhash2807/Weather-App-JavaScript/master/icons/' + data.weather[0].icon+'.png';
imge(data.weather[0].main);

});
}
)
.catch(function(err) {
console.log('Fetch Error :-S', err);
});
}




