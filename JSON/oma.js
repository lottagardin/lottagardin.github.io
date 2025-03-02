function kerro(data) {

    // Yksinkertaistaa koodia siirtämällä tarvittavat tiedot muuttujiin
    var otsikko = data.otsikko;
    var kuvaus = data.kuvaus;
    var kuva = data.kuva;
    var opintojakso = data.opintojakso;
    var sisalto = opintojakso.sisalto;
    var tekniikat = opintojakso.tekniikat;

    //Teksti ennen tekniikoiden iterointia
    var alkuteksti =
        "<h1>" + otsikko + "</h1><br><h3>"
        + kuvaus + "</h3>" +
        "<img src='" + kuva + "' ><br>" +
        "<p>Opintojakso: " + opintojakso.nimi + " <br>Tunnus: </h4>" + opintojakso.tunnus + "<br>Opintopisteet: " + opintojakso.opintopisteet +
        "<br> <h4>Sisältö: </h4> " + sisalto.nolla + ", " + sisalto.yksi + ", " + sisalto.kaksi + ", " + sisalto.kolme
        + "<br>"

    //Iteroi tekniikoiden läpi ja noukkii sieltä aiheen sekä linkin ja lisää ne listaan
    var tekniikkateksti = "<h4> Tekniikat: </h4>"
    for (var i = 0; i < tekniikat.length; i++) {
        tekniikkateksti = tekniikkateksti + "<p>Aihe: " + tekniikat[i].aihe + "<br>Linkki: " + tekniikat[i].linkki + "</p>";
    }

    //Yhdistää alkutekstin ja tekniikkatekstin ja vie sen kurssitoteutuksen html -sivulle
    document.getElementById("vastaus").innerHTML = alkuteksti + "<br>" + tekniikkateksti;

}

//Hakee esimerkkidatan gihtubista
fetch('https://lottagardin.github.io/esimerkkidata.json')

    //Muuttaa vastauksen json-objektiksi
    .then(function (response) {

        return response.json();

    })

    //Kutsuu kerro -funktiota ja vie sille json-objektin parametrina
    .then(function (responseJson) {
        console.log(responseJson);

        kerro(responseJson);

    })

    //Virheenhallintaa
    .catch(function (error) {

        document.getElementById("vastaus").innerHTML = "<p>Tietoa ei pystytä hakemaan</p>";

    })