const harjoitukset = [
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
const lista = document.getElementById("harjoituslista");
const tila = document.getElementById("tila");

function naytaLista(taulukko) {
    lista.innerHTML = "";
    tila.textContent = "Näytetään " + taulukko.length + " / " + harjoitukset.length;

    if (taulukko.length === 0) {
        const p = document.createElement("p");
        p.textContent = "Ei tuloksia.";
        lista.appendChild(p);
    }


    taulukko.forEach(function (harjoitus) {
        const p = document.createElement("p");
        p.textContent = harjoitus.joukkue + " - " + harjoitus.paiva + " " + harjoitus.aika;
        lista.appendChild(p);

    });
}
naytaLista(harjoitukset)

const hakukentta = document.getElementById("haku");

hakukentta.addEventListener("input", function () {
    const hakusana = hakukentta.value.toLowerCase();

    const tulokset = harjoitukset.filter(function (harjoitus) {

        return harjoitus.joukkue.toLowerCase().includes(hakusana);
    });

    naytaLista(tulokset)
});


const lomake = document.getElementById("ilmoittautumislomake");
const msg = document.getElementById("message");
const etunimi = document.getElementById("fname");
const sukunimi = document.getElementById("lname");
const sahkoposti = document.getElementById("email");
const joukkue = document.getElementById("joukkue");


lomake.addEventListener("submit", function (event) {
    event.preventDefault();
    msg.textContent = "";
    if (etunimi.value.trim() === "") {
        msg.textContent = "Etunimi puuttuu";
        msg.className = "virhe"
        return;
    }
    if (sukunimi.value.trim() === "") {
        msg.textContent = "Sukunimi puuttuu";
        msg.className = "virhe"
        return;
    }
    if (sahkoposti.value.trim() === "") {
        msg.textContent = "Sähköposti puuttuu";
        msg.className = "virhe"
        return;

    }
    if (!sahkoposti.value.includes("@",) || !sahkoposti.value.includes(".")) {
        msg.textContent = "Sähköposti on väärä";
        msg.className = "virhe"
        return;
    }
    if (joukkue.value.trim() === "") {
        msg.textContent = "Valitse joukkue";
        msg.className = "virhe"
        return;
    }
    msg.textContent = "Ilmoittautuminen onnistui!";
    msg.className = "onnistui"
    localStorage.setItem("ilmoittautunut", etunimi.value.trim());
});

const tallennettu = localStorage.getItem("ilmoittautunut");

if (tallennettu) {
    msg.textContent = "Tervetuloa takaisin, " + tallennettu;
    msg.className = "onnistui"
}