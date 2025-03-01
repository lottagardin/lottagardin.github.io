function kerro(data) {

    var otsikko = data.otsikko;
    var kuvaus = data.kuvaus;
    var kuva = data.kuva;
    var opintojakso = data.opintojakso;
    var sisalto = opintojakso.sisalto;
    var tekniikat = opintojakso.tekniikat;

    var alkuteksti =
        "<h1>" + otsikko + "</h1><br><h3>"
        + kuvaus + "</h3>" +
        "<img src='" + kuva + "' ><br>" +
        "<h4>Opintojakso:</h4>" + opintojakso.nimi + " <h4>Tunnus: </h4>" + opintojakso.tunnus + "<h4>Opintopisteet: </h4>" + opintojakso.opintopisteet +
        "<br> <h4>Sisältö: </h4> " + sisalto.nolla + ", " + sisalto.yksi + ", " + sisalto.kaksi + ", " + sisalto.kolme +
        "<br> <h4> Tekniikat: </h4>"
    console.log(tekniikat);
    var tekniikkateksti = ""
    for (var i = 0; i < tekniikat.length; i++) {
        tekniikkateksti = tekniikkateksti + "<p>Aihe: " + tekniikat[i].aihe + "<br>Linkki: " + tekniikat[i].linkki + "</p>";
    }

    document.getElementById("vastaus").innerHTML = alkuteksti + tekniikkateksti;

}

fetch('https://lottagardin.github.io/esimerkkidata.json')


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