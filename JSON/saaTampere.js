function saa(data) {

    //Alustaa muuttujat
    var kaupunki = "Kaupunki: Tampere"; //Kaupunkia ei tarvitse hakea objektista, sillä eri kaupunkien hakufunktiot ovat eri tiedostoissa.
    var lampotila = "Lämpötila: " + data.current.temp_c + " C";
    var tuuli = "Tuulen nopeus: " + data.current.wind_kph + " km/h";
    var kuva = "<img src='" + data.current.condition.icon + "' >"


    //Vie tiedot saa.html -sivulle. 
    document.getElementById("tampereSaa").innerHTML = kaupunki + "<br>" + lampotila + "<br>" + tuuli + "<br>" + kuva;

}


//Hakee Tampereen säätiedot
fetch('https://api.weatherapi.com/v1/current.json?key=feb2dc7e7a7b45dea9b163808250203&q=Tampere&aqi=no')

    //Muokkaa vastauksen json-objektiksi
    .then(function (response) {

        return response.json();

    })

    //Kutsuu saa -funktiota ja vie sille json-objektin parametrina 
    .then(function (responseJson) {
        console.log(responseJson);

        saa(responseJson);

    })
    //Virheenhallintaa
    .catch(function (error) {

        document.getElementById("vastaus").innerHTML = "<p>Tietoa ei pystytä hakemaan</p>";

    })
