# Oppgave 3

Du skal implementere den manglende funksjonaliteten i en chat-app.

**steg 1:** `npm start` for å starte opp serveren som appen skal kommunisere med.

**steg 2:** `npm watch` for å starte opp `watchify` som kjører `browserify` på `client\app.js`

**steg 3:** Implementer manglende funksjonalitet i `client\app.js`

## Manglende funksjonalitet

### Sende melding til server når man klikker på send

Hent ut teksten fra meldingsfeltet når du trykker på send og bruk [socket.io](http://socket.io) til å sende en meldingen til serveren. Måten du sender meldinger med socket.io ser omtrent slik ut:

```js
var socketIo = require('socket.io-client');
var io = socketIo();

io.emit('message', someMessage);
```

For å hjelpe deg litt på vei finnes det en modul for å lage message-objekter basert på teksten du skal sende i `client\createMessage.js`. Denne kan du require og bruke.

### Vise meldinger fra serveren

Når serveren mottar meldinger vil den sende en beskjed til alle påkoblede klienter. Denne meldingen vil komme på en WebSocket som socket.io håndterer for oss.

For å rendre meldinger kan du bruke renderMessage-modulen som ligger i `client\renderMessage`. Denne tar inn et message-object og gir deg tilbake en DOM Node (en bit med parsed HTML). Denne DOM Noden kan du så sette inn i DOMen:

```js
document.appendChild(someDOMNode);
```
