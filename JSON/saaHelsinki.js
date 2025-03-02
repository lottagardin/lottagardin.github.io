function helsinkiSaa(data) {

    // Alustaa muuttujat, jotka viedään tekstinä html-sivulle
    var kaupunki = "Kaupunki: Helsinki"; //Koska funktiot ovat eri tiedostoissa, kaupunkia ei tarvitse hakea json-objektista. 
    var lampotila = "Lämpötila: " + data.current.temperature + " C";
    var tuuli = "Tuulen nopeus: " + data.current.wind_speed + " m/s";
    var kuvaus = "Sää: ";
    var kuvaukset = data.current.weather_descriptions; //Alustaa sääkuvaukset -arrayn
    var kuvat = data.current.weather_icons; //Alustaa sääikonit -arrayn
    var kuva = "";

    //Tarkistaa, onko kuvauksia enemmän kuin yksi. Mikäli on, ne lisätään listaan allekkain. 
    if (kuvaukset.length > 1) {
        for (var i = 0; i < kuvaukset.length; i++) {
            kuvaus = kuvaus + kuvaukset[i] + "<br>"
        }
    }
    else {
        kuvaus = kuvaus + kuvaukset[0];
    }

    //Tarkistaa, onko kuvia enemmän kuin yksi. Mikäli on, ne lisätään yhteen.
    if (kuvat.length > 1) {
        for (var i = 0; i < kuvat.length; i++) {
            kuva = kuva + "<img src='" + kuvat[i] + "'>";
        }
    }
    else {
        kuva = kuva + "<img src='" + kuvat[0] + "' >";
    }

    //Vie tiedot saa.html -tiedostolle.
    document.getElementById("helsinkiSaa").innerHTML = kaupunki + "<br>" + kuvaus + "<br>" + lampotila + "<br>" + tuuli + "<br>" + kuva;

}

//Hakee säätiedot
fetch('https://api.weatherstack.com/current?access_key=11644898d7933ad3b678ce8516e01553&query=Helsinki')


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