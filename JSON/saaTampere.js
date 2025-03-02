function saa(data) {

    //Alustaa muuttujat
    var kaupunki = "Kaupunki: Tampere"; //Kaupunkia ei tarvitse hakea objektista, sillä eri kaupunkien hakufunktiot ovat eri tiedostoissa.
    var lampotila = "Lämpötila: " + data.current.temperature + " C";
    var tuuli = "Tuulen nopeus: " + data.current.wind_speed + " m/s";
    var kuvaus = "Sää: ";
    var kuvaukset = data.current.weather_descriptions; //Alustaa sääkuvaukset -arrayn
    var kuvat = data.current.weather_icons; //Alustaa sääikonit -arrayn
    var kuva = "";

    if (kuvaukset.length > 1) { //Tarkistaa, onko kuvauksia useampi kuin yksi. Jos on, ne lisätään listaan allekkain.
        for (var i = 0; i < kuvaukset.length; i++) {
            kuvaus = kuvaus + kuvaukset[i] + "<br>";
        }
    }
    else {
        kuvaus = kuvaus + kuvaukset[0];
    }

    if (kuvat.length > 1) { //Tarkistaa, onko sääikoneita useampi kuin yksi. Mikäli on, ne lisätään yhteen. 
        for (var i = 0; i < kuvat.length; i++) {
            kuva = kuva + "<img src='" + kuvat[i] + "'>";
        }
    }
    else {
        kuva = kuva + "<img src='" + kuvat[0] + "' >";
    }

    //Vie tiedot saa.html -sivulle. 
    document.getElementById("tampereSaa").innerHTML = kaupunki + "<br>" + kuvaus + "<br>" + lampotila + "<br>" + tuuli + "<br>" + kuva;

}


//Hakee Tampereen säätiedot
fetch('http://api.weatherstack.com/current?access_key=7435afc4877ffc442b19d0d4f4086b9d&query=Tampere')

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
