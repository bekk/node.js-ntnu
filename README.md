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

1. Teori
  - Hvorfor moduler i frontend?
  - node-require
    - hva er egentlig `module.export` og `require`?
    - lookup algoritme
  - Browserifys forhold til `require` og `module`
  - `browserify`-kommandoen
  - Demo og oppgave
2. Praktisk
  - Debug-mode og sourcemaps
  - Watchify
    - Beefy
  - Kode-deling
    - Builtins
    - Browser-field
  - Transforms
  - Verdt å vite om options
    - `no-parse`
    - `exclude` og `external`
    - `standalone`
  - [Browserify Handbook]()
  - Demo og oppgave
3. Avansert eksempel (motivasjon)
4. Viderekommende
  - browserify-shim og Browser field
  - glslify og WebGL
5. Workshops
  - [Browserify Adventure]()
