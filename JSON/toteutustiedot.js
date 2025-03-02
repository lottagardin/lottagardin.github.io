function kerro(data) {
    //Alustaa osan muuttujista koodin yksinkertaistamiseksi
    var osallistujat = data.osallistujat;
    var kuva = data.kuva;

    //Rakentaa tekstin objektin tiedoista
    var teksti =
        "<h1>Toteutus</h1><br><h4>Nimi: </h4>" + data.nimi +
        "<br><h4> Osallistujien lukumäärä: </h4> " + data.osallistujalkm +
        "<br><h4> Osallistujat: </h4> " + osallistujat.nolla + ", " + osallistujat.yksi + ", " + osallistujat.kaksi + ", " + osallistujat.kolme + " & " + osallistujat.neljä +
        "<br><h4> Alkamisaika: </h4> " + data.alkamisaika +
        "<br><h4> Loppumisaika: </h4>" + data.loppumisaika +
        "<br><h4> Kesto viikkoina: </h4>" + data.kesto +
        "<img src='" + kuva + "' >"

    //Vie tekstin html-sivulle
    document.getElementById("vastaus").innerHTML = teksti;

}

//Hakee tiedot 
fetch('https://lottagardin.github.io/toteutusdata.json')

    //Muuttaa vastauksen json-objektiksi
    .then(function (response) {

        return response.json();

    })

    //Kutsuu kerro -funktiota ja vie sille parametrina json-objektin
    .then(function (responseJson) {
        console.log(responseJson);

        kerro(responseJson);

    })
    //Virheenhallintaa
    .catch(function (error) {

        document.getElementById("vastaus").innerHTML = "<p>Tietoa ei pystytä hakemaan</p>";

    })