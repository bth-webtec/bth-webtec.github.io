# CLAUDE.md – Kursen webtec (bth-webtec.github.io)

## Vad är detta?

Webbplats för kursen **Webbteknologier** (smeknamn webtec), kurskod **DV1704**, vid Blekinge Tekniska Högskola (BTH). Kursen ges för första årets studenter på högskoleprogrammet Webbprogrammering, normalt på hösten.

- **Webbplats**: https://bth-webtec.github.io/
- **GitHub**: https://github.com/bth-webtec/bth-webtec.github.io

## Teknisk stack

**Astro** + **Starlight** (statisk dokumentationswebbplats).

```
npm run dev      # Dev-server på localhost:4321
npm run build    # Bygg till ./dist/
npm run preview  # Förhandsgranska bygget
```

## Filstruktur

```
astro.config.mjs          # Sidopanel, plugins, config
src/
  assets/                 # Bilder och statiska filer
  components/             # CustomFigure.astro, YouTube.astro
  styles/dbwebb.css       # Anpassad CSS
  plugins/                # remark-reading-time.mjs
  content/docs/
    index.mdx             # Startsidan
    intro/                # Kursplan, lärarteam, studieplan, bedömning
    kmom/                 # Kursmomenten kmom01–kmom10
    laromaterial/
      forelasning/        # Inspelade föreläsningar
      labbmiljo/          # Installationsguider (terminal, git, node, etc.)
      kursrepo/           # Skapa och konfigurera kursrepo
      kursrepo-utvecklingsmiljo/  # Dev-miljö i kursrepo (eslint, editorconfig etc.)
      ovning/             # Övningar kopplade till kmom
      lab/                # Laborationer lab_01–lab_04 (JavaScript)
      uppgift/            # Uppgiftsbeskrivningar per kmom
      instruktion/        # Redovisning, PR-instruktioner, etc.
    studieguide/          # AI, deadline, dialog, fusk
    ovrigt/               # Övrigt
```

Sidopanelens struktur konfigureras i `astro.config.mjs` (autogenerate från kataloger).

## Kursstruktur

| Kmom | Titel | Innehåll |
|------|-------|----------|
| kmom01 | Kom igång med HTML, CSS och JavaScript | Bygga första webbplatsen, validatorer |
| kmom02 | Responsiv webbplats | Media queries, flexbox, hamburgarmeny |
| kmom03 | One-page website | One-page med sektioner och kolumner |
| kmom04 | DOM | JavaScript DOM-manipulation |
| kmom05 | Fetch | Fetch API, JSON, formulär |
| kmom06 | Duckhunt | Eventlyssnare, timingevents, spel |
| kmom10 | Projekt och examination | Duckhunt 2 (eller eget spel), onepage |

## Betygsättning

- **40%** kursmoment (kmom01–06): 30p (+ 10p för utmärkt kvalitet)
- **60%** projekt (kmom10): krav 1–3 obligatoriska (30p), krav 4–6 optionella (30p)
- Betygsgränser: E ≥ 55p | D ≥ 60p | C ≥ 70p | B ≥ 80p | A ≥ 90p

## Lärarteam

- **Mikael Roos (mos)** – Examinator, kursansvarig, lärare (mos@bth.se)
- **Kenneth Lewenhagen (klw)** – Examinator, lärare (klw@bth.se)

## Viktigt att tänka på

- Innehållet är riktat till **nybörjare** (första årets studenter).
- Nytt innehåll ska vara konsistent med befintlig ton och struktur.
- Filer är `.md` eller `.mdx`; MDX används när Astro-komponenter behövs.
- Sidopanelen uppdateras automatiskt via `autogenerate` i `astro.config.mjs`; manuella poster finns för `lab/`.
- Canvas-plattformen hanterar exakta inlämningsdatum – de finns inte i detta repo.
