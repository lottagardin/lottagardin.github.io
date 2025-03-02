function kuvat(data) {

    var teksti = "<h1>Autolla tampereelle</h1><br><p>Minkälainen keli siellä on?</p>"; //alustaa tekstimuuttujan
    var kuvat = data.properties.presets; //hakee kuva-arrayn json-objektista
    var aika = data.properties.dataUpdatedTime; //hakee kuvien ottoajan

    //Iteroi kuva-arrayn läpi
    for (var i = 0; i < kuvat.length; i++) {

        teksti = teksti + aika + "<br><img src='" + kuvat[i].imageUrl + "'><br>"; //Käyttää kuvan URL-osoitetta ja lisää kuvan listaan

    }

    document.getElementById("vastaus").innerHTML = teksti; //Vie vastauksen html-tiedostolle

}

//Hakee kuvatiedot
fetch('https://tie.digitraffic.fi/api/weathercam/v1/stations/C04507')

    //Muuttaa vastauksen json-objektiksi
    .then(function (response) {

        return response.json();

    })

    //Kutsuu kuvat -funktiota vieden sille parametrina haetun json-objektin
    .then(function (responseJson) {
        console.log(responseJson);

        kuvat(responseJson);

    })

    //Virheenhallintaa
    .catch(function (error) {

        document.getElementById("vastaus").innerHTML = "<p>Tietoa ei pystytä hakemaan</p>";

    })