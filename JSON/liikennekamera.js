function kuvat(data) {

    var teksti = "";
    var kuvat = data.properties.presets;
    var aika = data.properties.dataUpdatedTime;

    teksti = "<h1>Autolla tampereelle</h1><br><p>Minkälainen keli siellä on?</p>";

    for (var i = 0; i < kuvat.length; i++) {

        teksti = teksti + aika + "<br><img src='" + kuvat[i].imageUrl + "'><br>";

    }

    document.getElementById("vastaus").innerHTML = teksti;

}


fetch('https://tie.digitraffic.fi/api/weathercam/v1/stations/C04507')


    .then(function (response) {

        return response.json();

    })


    .then(function (responseJson) {
        console.log(responseJson);

        kuvat(responseJson);

    })

    .catch(function (error) {

        document.getElementById("vastaus").innerHTML = "<p>Tietoa ei pystytä hakemaan</p>";

    })