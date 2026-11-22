let harjoitukset = [
    {
        joukkue: "Juniorit",
        paiva: "Tiistai",
        aika: "17:00–18:30"
    },
    {
        joukkue: "Miehet",
        paiva: "Keskiviikko",
        aika: "19:00–20:30"
    },
    {
    joukkue: "Naiset",
    paiva: "Torstai",
    aika: "18:00–19:30"
    }
];
let lista = document.getElementById("harjoituslista");
let tila = document.getElementById("tila");

function naytaLista(taulukko) {
    lista.innerHTML = "";
    tila.textContent = "Näytetään " + taulukko.length + " / " + harjoitukset.length;
    
    if (taulukko.length === 0) {
        let p = document.createElement("p");
        p.textContent = "Ei tuloksia.";
        lista.appendChild(p);
    }


    taulukko.forEach(function(harjoitus){
        let p = document.createElement("p");
        p.textContent = harjoitus.joukkue + " - " + harjoitus.paiva + " " + harjoitus.aika;
        lista.appendChild(p);
        
    });
}
naytaLista(harjoitukset)

let hakukentta = document.getElementById("haku");

hakukentta.addEventListener("input", function() {
    let hakusana = hakukentta.value.toLowerCase();

    let tulokset = harjoitukset.filter(function(harjoitus) {
        
        return harjoitus.joukkue.toLowerCase().includes(hakusana);
    });

    naytaLista(tulokset)
});

function process() {
    let msg = document.getElementById("message");

    msg.textContent = "Ilmoittautuminen onnistui!";

    return false;
}