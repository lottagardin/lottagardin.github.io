function helsinkiSaa(data) {

    // Alustaa muuttujat, jotka viedään tekstinä html-sivulle
    var kaupunki = "Kaupunki: Helsinki"; //Koska funktiot ovat eri tiedostoissa, kaupunkia ei tarvitse hakea json-objektista. 
    var lampotila = "Lämpötila: " + data.current.temp_c + " C";
    var tuuli = "Tuulen nopeus: " + data.current.wind_kph + " km/h";
    var kuva = "<img src='" + data.current.condition.icon + "' >"



    //Vie tiedot saa.html -tiedostolle.
    document.getElementById("helsinkiSaa").innerHTML = kaupunki + "<br>" + lampotila + "<br>" + tuuli + "<br>" + kuva;

}

//Hakee säätiedot
fetch('https://api.weatherapi.com/v1/current.json?key=feb2dc7e7a7b45dea9b163808250203&q=Helsinki&aqi=no')


    //Muokkaa vastauksen json-objektiksi
    .then(function (response) {

        return response.json();

    })

    //Kutsuu helsinkiSaa -funktiota ja vie sille json-objektin parametrina. 
    .then(function (responseJson) {
        console.log(responseJson);

        helsinkiSaa(responseJson);

    })
    //Virheenhallintaa
    .catch(function (error) {

        document.getElementById("vastaus").innerHTML = "<p>Tietoa ei pystytä hakemaan</p>";

    })