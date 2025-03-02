function tapahtumat(data) {

    var teksti = "<h1>Tampereella tapahtuu</h1>"; //Alustaa tekstimuuttujan

    //Iteroi tapahtuma-arrayn läpi ja poimii sieltä tarvittavat tiedot 
    for (var i = 0; i < data.length; i++) {

        teksti = teksti + "<h3>" + data[i].title + "</h3>";

        teksti = teksti + "<p>" + data[i].description + "</p>";

        teksti = teksti + "<p> <a href=" + data[i].url + ">" + data[i].url + "</a></p>";

    }

    //Vie tekstin tapahtumat.html -sivulle
    document.getElementById("vastaus").innerHTML = teksti;

}

//Hakee tapahtumien tiedot
fetch('https://api.visittampere.com/api/v1/visittampere/event/published/all/?format=json&lang=fi')

    //Muuttaa vastauksen json-objektiksi
    .then(function (response) {

        return response.json();

    })

    //Kutsuu tapahtumat -funktiota ja vie sille json-objektin parametrina
    .then(function (responseJson) {

        tapahtumat(responseJson);

    })

    //Virheenhallintaa
    .catch(function (error) {

        document.getElementById("vastaus").innerHTML = "<p>Tietoa ei pystytä hakemaan</p>";

    })