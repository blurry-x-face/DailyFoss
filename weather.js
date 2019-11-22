function weatheria() {

    var city1 = document.getElementById('value').value;
    var link_api = 'http://api.openweathermap.org/data/2.5/weather?q=' + city1 + '&appid=e8cde246c8e175455f7354975fd34a4a&units=metric';
    fetch(link_api)
        .then(
            function (dat) {
                if (dat.status !== 200) {
                    document.getElementById('distemp').innerHTML = '<br>Please enter correct city';
                    return;
                }

                dat.json().then(function (data) {
                    document.getElementById('distemp').innerHTML = '<p>City : ' + city1 + ' <p>Temperature : ' + (data.main.temp) + '&#8451;</p><p>Humidity : ' + data.main.humidity + '%</p>';
                    document.getElementById('disimg').src = 'https://raw.githubusercontent.com/Subhash2807/Weather-App-JavaScript/master/icons/' + data.weather[0].icon + '.png';
                    imge(data.weather[0].main);
                    
                });
            }
        )
        ;
}

function defult() {

    var link_api = 'http://api.openweathermap.org/data/2.5/weather?q=lucknow&appid=e8cde246c8e175455f7354975fd34a4a&units=metric';
    fetch(link_api)
        .then(
            function (dat) {

                dat.json().then(function (data) {
                    document.getElementById('distemp').innerHTML = '<p>City : Lucknow <p>Temperature : ' + (data.main.temp) + '&#8451;</p><p>Humidity : ' + data.main.humidity + ' %</p>';
                    document.getElementById('disimg').src = 'https://raw.githubusercontent.com/Subhash2807/Weather-App-JavaScript/master/icons/' + data.weather[0].icon + '.png';
                   

                });
            }
        )
        .catch(function (error) {
            console.log('Fetch Error :-S', error);
        });
}