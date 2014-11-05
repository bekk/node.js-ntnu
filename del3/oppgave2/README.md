# Oppgave 2

**Steg 1**: `npm start`

**Steg 2**: gå til [localhost:8080](http://localhost:8080)

## 2A Hello World

Start i "app.js", når du er ferdig med koden så kompilerer du filen med browserify ved å kjøre `npm run browserify`.

Hvis du har gjort det riktig så vil du se `"Hello World"` printa i konsollet i browseren når du refresher.

## 2B Bruke ting fra npm

I "app.js" er det en liste med tall. Bruk npm-pakken [uniq](http://npm.im/uniq) (den er allerede installert for deg) for å hente ut en liste av de unike tallene og print dem til konsollen.

Hvis du har gjort det riktig vil du se `[0, 1, 2, 3, 4, 5, 6, 7, 8, 9]` printa i konsollen i browseren når du refresher.

## 2C Flere moduler

Lag en modul som genererer tilfeldige tall mellom 1 og 6. Bruk denne modulen i "app.js" til å lage en funksjon som kan kalles fra konsollet.

Hvis du har gjort det riktig vil du kunne kalle en funksjon i konsollet og få ut et tall mellom 1 og 6.

**hint:** Det er en modul som heter random.js som tar inn øvre og nedre grense for random heltall. Denne kan du benytte i modulen din.

**hint:** Husk at du ikke kan ha implisitte globale verdier når du bruker modules. Hvis en verdi skal være tilgjengelig må du legge den på en av de eksisterende globale variablene, feks `window`.
