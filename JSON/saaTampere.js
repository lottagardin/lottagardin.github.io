function saa(data) {

    var kaupunki = "Kaupunki: Tampere";
    var lampotila = "Lämpötila: " + data.current.temperature + " C";
    var tuuli = "Tuulen nopeus: " + data.current.wind_speed + " m/s";
    var kuvaus = "Sää: ";
    var kuvaukset = data.current.weather_descriptions;
    var kuvat = data.current.weather_icons;
    var kuva = "";

    if (kuvaukset.length > 1) {
        for (var i = 0; i < kuvaukset.length; i++) {
            kuvaus = kuvaus + kuvaukset[i]
        }
    }
    else {
        kuvaus = kuvaus + kuvaukset[0];
    }

    if (kuvat.length > 1) {
        for (var i = 0; i < kuvat.length; i++) {
            kuva = kuva + "<img src='" + kuvat[i] + "'>";
        }
    }
    else {
        kuva = kuva + "<img src='" + kuvat[0] + "' >";
    }

    document.getElementById("tampereSaa").innerHTML = kaupunki + "<br>" + kuvaus + "<br>" + lampotila + "<br>" + tuuli + "<br>" + kuva;

}



fetch('http://api.weatherstack.com/current?access_key=7435afc4877ffc442b19d0d4f4086b9d&query=Tampere')


    .then(function (response) {

        return response.json();

    })


    .then(function (responseJson) {
        console.log(responseJson);

        saa(responseJson);

    })

    .catch(function (error) {

        document.getElementById("vastaus").innerHTML = "<p>Tietoa ei pystytä hakemaan</p>";

    })
