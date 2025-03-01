function kerro(data) {

    var osallistujat = data.osallistujat;
    var kuva = data.kuva;

    var teksti =
        "<h1>Toteutus</h1><br><h4>Nimi: </h4>" + data.nimi +
        "<br><h4> Osallistujien lukumäärä: </h4> " + data.osallistujalkm +
        "<br><h4> Osallistujat: </h4> " + osallistujat.nolla + ", " + osallistujat.yksi + ", " + osallistujat.kaksi + ", " + osallistujat.kolme + " & " + osallistujat.neljä +
        "<br><h4> Alkamisaika: </h4> " + data.alkamisaika +
        "<br><h4> Loppumisaika: </h4>" + data.loppumisaika +
        "<br><h4> Kesto viikkoina: </h4>" + data.kesto +
        "<img src='" + kuva + "' >"
    document.getElementById("vastaus").innerHTML = teksti;

}

fetch('https://lottagardin.github.io/toteutusdata.json')


    .then(function (response) {

        return response.json();

    })


    .then(function (responseJson) {
        console.log(responseJson);

        kerro(responseJson);

    })

    .catch(function (error) {

        document.getElementById("vastaus").innerHTML = "<p>Tietoa ei pystytä hakemaan</p>";

    })