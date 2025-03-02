function junat(data) {

    var teksti = "";

    teksti = "<h1>Helsingistä Tampereelle lähtevät junat</h1>";

    for (var i = 0; i < data.length; i++) {
        var asemat = data[i].timeTableRows


        if (asemat[0].stationShortCode == "HKI") {

            var lahto = asemat[0].scheduledTime;
            var pvm = lahto.substring(0, 10);
            var aika = lahto.substring(11, 16);
            teksti = teksti + pvm + " kello " + aika + "<br>"
        }
    }

    document.getElementById("vastaus").innerHTML = teksti;

}


fetch('https://rata.digitraffic.fi/api/v1/live-trains/station/tpe?departing_trains=10&include_nonstopping=false')


    .then(function (response) {

        return response.json();

    })


    .then(function (responseJson) {

        junat(responseJson);

    })

    .catch(function (error) {

        document.getElementById("vastaus").innerHTML = "<p>Tietoa ei pystytä hakemaan</p>";

    })