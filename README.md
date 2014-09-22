1. okt - Mikael
============

## Struktur

1. Intro
  1. Slide: Introduksjon av Node.js (lansert 2009, Ryan Dahl, V8 + C++ API, JavaScript)
  2. Slide: Eksempler: Native API-er (filesystem, http, path) (viser moduler)
  3. Slide: Vise hvordan lage egne moduler
  4. Oppgaver:
    1. Gjør enkle Node-operasjoner (forskjellige oppgaver)
    2. Splitte ut i egne moduler
2. Eksterne moduler
  1. Slide: Presentere NPM som konsept
  2. Slide: Vise statistikk og massiv vekst (graf?)
  3. Slide: Vise CLI til NPM og mest vanlige operasjoner (npm i -S/-D)
  4. Slide: SemVer / Versjonskontroll?
  5. Slide: Bilde av npmjs.org ?
  6. Eksempel: Vise installering av node og bruke det via REPL?
  5. Oppgaver:
    1. Bruk eksisterende moduler til å oppnå noe fra tidligere oppgaver?
3. Asynkron kode
  1. Slide: Introdusere asynkronitet (og sammenheng med Node.js eventloop)
  2. Slide: Vise forskjellige måter å håndtere asynkronitet på
    1. Callbacks (vise "callback hell"? Drite i det?)
    2. Async bibliotek (async.js / tilsvarende?)
    3. Promises (denodify?)
4. Avansert
  1. EventEmitter
  2. Kort intro om Streams
5. Workshop:
  1. [LearnYouNode](https://github.com/rvagg/learnyounode)
  2. [Stream adventure](https://github.com/substack/stream-adventure) (om mye tid)

22. okt - Kim
================

Server-opplegg. io. Sockets. websockets. Streaming.

Trenger ikke være web.

Terminal-chat. Http, tcp, fs, pipe, multiplex

Lær mer: Stream-adventures

5. nov - Stian
==============

npm som kilde til frontend-kode. Browserify.

web-chat?

webgl?

tema som folk kan noe om og kan løse oppgaver til

koble til større kontekst --> frontend

Abstrahere DOM? require('bekk-chat')? setName(), setTitle(), ... Gjør det idiotsikkert

Sette opp Heroku, koble på slik at alle kan prate sammen

Lær mer: Browserify-adventurs
