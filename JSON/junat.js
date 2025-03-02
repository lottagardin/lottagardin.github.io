function junat(data) {

    //Tekstimuuttujan alustaminen
    var teksti = "<h1>Helsingistä Tampereelle lähtevät junat</h1>";

    //Iteroi kaikkien Tampereen kautta kulkevien junien läpi
    for (var i = 0; i < data.length; i++) {
        //Poimii asema-arrayt talteen
        var asemat = data[i].timeTableRows

        //Etsii junat, joiden ensimmäinen asema on Helsinki.
        if (asemat[0].stationShortCode == "HKI") {

            var lahto = asemat[0].scheduledTime; // Ottaa junan lähtöajan talteen
            var pvm = lahto.substring(0, 10); //Erittelee lähtöajasta päivämäärän
            var aika = lahto.substring(11, 16); //Erittelee lähtöajasta kellonajan
            var junatyyppi = data[i].trainType; // Junan tyyppi
            var junanumero = data[i].trainNumber; // Junan numero
            teksti = teksti + junatyyppi + " " + junanumero + ": " + pvm + " kello " + aika + "<br>" // Lisätään Helsingistä Tampereelle kulkevan junan tiedot listaan
        }
    }

    document.getElementById("vastaus").innerHTML = teksti; //Välitetään vastaus html -sivulle

}

//Hakee junien aikataulut
fetch('https://rata.digitraffic.fi/api/v1/live-trains/station/tpe?departing_trains=10&include_nonstopping=false')

    //Muokkaa vastauksen json-muotoon
    .then(function (response) {

        return response.json();

    })

    //Vie json-muotoisen vastauksen parametrinä junat -funktiolle
    .then(function (responseJson) {

        junat(responseJson);

    })

    //Virheidenhallintaa
    .catch(function (error) {

        document.getElementById("vastaus").innerHTML = "<p>Tietoa ei pystytä hakemaan</p>";

    })