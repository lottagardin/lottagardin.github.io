

function naytaEtaisyys(data, kohde) {
    var teijo = {
        lat: 60.25,
        long: 22.95
    }

    var kohdeKaupunki = {
        lat: data.results[0].geometry.location.lat,
        long: data.results[0].geometry.location.lng
    }


    var R = 6371; // Earth radius in kilometers
    var phi1 = teijo.lat * Math.PI / 180;
    var phi2 = kohdeKaupunki.lat * Math.PI / 180;
    var deltaPhi = (kohdeKaupunki.lat - teijo.lat) * Math.PI / 180;
    var deltaLambda = (kohdeKaupunki.long - teijo.long) * Math.PI / 180;

    var a = Math.sin(deltaPhi / 2) * Math.sin(deltaPhi / 2) +
        Math.cos(phi1) * Math.cos(phi2) *
        Math.sin(deltaLambda / 2) * Math.sin(deltaLambda / 2);

    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

    var distance = R * c; // Distance in kilometers

    var hinta = distance * 0.5;

    document.getElementById("vastaus").innerHTML =
        "Matka linnuntietä välillä Teijo ja " + kohde + " on " + distance.toFixed(2) + " kilometriä! <br> Tämä tekee noin " + hinta.toFixed(0) + " euroa matkakustannuksia."

}

//Hakee käyttäjän antaman kaupungin sijaintitiedot ja vie ne naytaEtaisyys -funktiolle
function haeKaupunkitiedot() {
    var apiKey = "AIzaSyBmSmq3kSQ5o9c6wuIzhbKVyMSZOKFGjHA";
    var kohde = document.getElementById("paikkakunta").value;

    fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=${kohde}&key=${apiKey}`)

        //Muokkaa vastauksen json-muotoon
        .then(function (response) {
            return response.json();
        })

        //Vie json-muotoisen vastauksen parametrinä naytaEtaisyys -funktiolle
        .then(function (responseJson) {
            console.log(responseJson);
            naytaEtaisyys(responseJson, kohde);
        })

        //Virheidenhallintaa
        .catch(function (error) {
            document.getElementById("vastaus").innerHTML = "<p>Tietoa ei pystytä hakemaan, muista kirjoittaa kaupunki kenttään! </p>";
        })

}

