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
  2. Kort intro om Streams?
5. Workshop:
  1. [LearnYouNode](https://github.com/rvagg/learnyounode)
  2. [Async You](https://github.com/bulkan/async-you) (om mye tid)


22. okt - Kim
================

Server-opplegg. io. Sockets. websockets. Streaming.

Trenger ikke være web.

Terminal-chat. Http, tcp, fs, pipe, multiplex

Lær mer: Stream-adventures

5. nov - Stian
==============

1. Node og npm for frontend
  - verktøyplatform
    - Litt om hvilke verktøy som brukes
  - js tools for js developers
    - Litt om motivasjonen for node som verktøyplatform
    - Hvorfor node fremfor alternativene (ruby og python)
  - Forskjellen mellom node og browser
    - DOM APIs
    - "missing window"
  - tasks med npm run
    - Hvordan verktøy brukes (CLI og som js-api)
    - Hvordan npm run slår opp modules
    - Format på npm run
2. JS Modules og Browserify
  - Hvorfor modules?
  - Hvorfor browserify?
  - Hva er egentlig require og module.exports?
    - Litt om lookup-algoritmen
    - require og module.exports er bare globals
  - Hva gjør browserify?
  - Hvordan bruker vi browserify
    - CLI
    - JS API
  - Browserify-extended
    - Transforms
    - Watchify
    - Debug-mode og sourcemaps
3. Avansert Browserify
  - Browserify-shim og Browser-field
  - Built-ins
  - Browserify handbook
