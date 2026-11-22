## E3: listaussivu ja lomake

### Käytetyt tekoälyt
- Claude (opiskelutuutorina: selitykset, kysymykset, rungot)
- ChatGPT (CSS-tiedoston tekeminen ja parantelu) [tarkenna: mitä pyysit ja mitä käytit]

### Mitä kysyin ja mitä sain

**1. Hakutoiminto ja listan piirtäminen (JavaScript)**
Kysyin Claudelta, miksi hakukentän tyhjennys ei näyttänyt hakutuloksia sivulla. Sain selityksen, että suodatettu taulukko (`tulokset`) pitää piirtää sivulle uudelleen. Sain rungon funktioon `naytaLista(taulukko)`, jotta samaa koodia ei kirjoiteta kahteen paikkaan. Kirjoitin funktion ja molemmat kutsut itse, ja korjasin vaiheittain omat virheeni (puuttuva sulku, funktion nimi, `p.textContent`).

**2. Tilarivi ja "Ei tuloksia"**
Sain ohjausta tilarivin tekemiseen (`taulukko.length` / `harjoitukset.length`). Tilarivin valmiin funktion sain Claudelta suoraan, kun jäin jumiin. Tyhjän tuloksen viestin ("Ei tuloksia.") kirjoitin itse.

**3. Lomake ja tarkistukset**
Claude ohjasi poistamaan `onsubmit`-attribuutin ja käyttämään `submit`-tapahtumakuuntelijaa, `preventDefault()`-metodia ja `novalidate`-attribuuttia. Kirjoitin kenttäkohtaiset tarkistukset (etunimi, sukunimi, sähköposti, joukkue) ja virheviestit itse. Korjasin Clauden huomautusten perusteella väärän `id`:n, puuttuvat `return`-lauseet, väärinpäin olevan ehdon (`!`) ja sähköpostin tarkistuksen (`includes("@") || includes(".")`). Viestin tyhjennysrivin (`msg.textContent = ""`) sain Claudelta suoraan.

**4. Tallennus selaimeen ja popover**
Käytin `localStorage`-tallennusta etunimelle ja näytän sivun avautuessa viestin "Tervetuloa takaisin". Sain Claudelta mallin, ja sovelsin sen omaan koodiini. Popover on tehty HTML:n `popover`- ja `popovertarget`-attribuuteilla ilman JavaScriptiä, ja nappi on oikea `<button>`.

**5. CSS**
Tein ja paranteluin `style.css`-tiedostoa Clauden ja ChatGPT:n avulla. Claudelta kysyin, miksi virheviestin väri ei muuttunut. Se löysi kirjoitusvirheen `#messsage` (kolme s-kirjainta) ja ehdotti luokkia `.virhe` ja `.onnistui`, joiden väri asetetaan JavaScriptillä (`msg.className`). [Lisää: mitä ChatGPT:llä tein CSS:ssä.]

**6. Git ja GitHub**
Kysyin Claudelta, miten projekti siirretään läppäriltä päänkoneelle. Sain ohjeet Gitin asennukseen, asetuksiin, `git clone`-komentoon sekä `add`/`commit`/`push`-työnkulkuun. Korjasin itse virheet (`git config` puuttui komennosta, kulmasulut PowerShellissä, väärä kansio `web` / `web-kurssi`).

### Mitä tein itse
Kirjoitin suurimman osan koodista, korjasin virheet vihjeiden perusteella ja testasin sivun selaimessa.

### Mitä opin
- Funktio kannattaa kirjoittaa kerran ja kutsua parametreilla useasta paikasta.
- `return` lopettaa funktion, joten `else`-haaroja ei aina tarvita.
- Parametrin nimi ja globaali muuttuja voivat mennä sekaisin (varjostus).
- Lomakkeen tarkistukset tehdään `submit`-kuuntelijassa, ja `novalidate` tarvitaan omien viestien näyttämiseen.
- Pienikin kirjoitusvirhe `id`:ssä tai CSS-valitsimessa estää toiminnan.