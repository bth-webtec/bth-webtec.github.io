# TODO: kmom06

Innehållsgranskning 2026-08-11. Kvarstående punkter, tas en i taget.

---

1. `duckhunt.mdx` — `### Validering` (rad 106-114) är helt duplicerad av `### Krav inlämning` (rad 118-134); ingen annan kmom-uppgift har båda rubrikerna. Ta bort den fristående `### Validering`-sektionen och behåll enbart `### Krav inlämning`, i linje med mönstret i kmom03/kmom10.

2. `duckhunt.mdx:126` — `npx eslint` i "Krav inlämning", ska vara `npm run lint`.

3. `duckhunt.mdx:128` — `npx http-server` i "Krav inlämning", ska vara `npm run server`.

4. `duckhunt.mdx` — saknar raden "Ditt repo skall passera `npm run check kmom06`." i "Krav inlämning" (finns i motsvarande sektion i kmom03/kmom10).

5. `object-och-mer-fetch/index.mdx:20` — trasig länk `./labbmiljo`, ska vara `/labbmiljo/` (samma bugg som i kmom04 och kmom05).

6. `object-och-mer-fetch/fetchImage.mdx:8` — kvarglömd utkommenterad import (`// import draw from '@assets/kmom06/draw.png';`), oanvänd rest från mallen.

7. `object-och-mer-fetch/json.mdx:8` — samma kvarglömda utkommenterade import som punkt 6.

8. `object-och-mer-fetch/json.mdx:64` — kodbugg: `console.log(person.namn) // Lisa` ska vara `console.log(person.name) // Lisa` (egenskapen heter `name` i JSON-exemplet ovan; `person.namn` finns inte och skulle skriva ut `undefined`, inte "Lisa").

9. `object-och-mer-fetch/fetchImage.mdx:28` — `backgroundImage = URL.createObjectURL(blob)` saknar `let`/`const` och blir en implicit global variabel, inkonsekvent med övriga kodexempel i kursen som alltid deklarerar variabler.

10. `form-elements.mdx:28` — stavfel "Jag läger" → "Jag lägger".

11. `form-elements.mdx:120` — stavfel "sre man små pilar" → "ser man små pilar".

12. `form-elements.mdx:219` — stavfel "Ge dg gärna ut och testa like olika" → "Ge dig gärna ut och testa lite olika".

Åtgärdat: punkt 1 — den fristående `### Validering`-sektionen borttagen ur `duckhunt.mdx`, kvar är enbart `### Krav inlämning` (2026-08-11).

Åtgärdat: punkt 2 — `npx eslint` → `npm run lint` i `duckhunt.mdx` (2026-08-11).

Åtgärdat: punkt 3 — `npx http-server` → `npm run server` i `duckhunt.mdx` (2026-08-11).

Åtgärdat: punkt 4 — raden "Ditt repo skall passera `npm run check kmom06`." tillagd i `duckhunt.mdx` (2026-08-11).

Åtgärdat: punkt 5 — trasig länk `./labbmiljo` ändrad till `/labbmiljo/` i `object-och-mer-fetch/index.mdx` (2026-08-11).

Åtgärdat: punkt 6 — kvarglömd utkommenterad import borttagen ur `fetchImage.mdx` (2026-08-11).

Åtgärdat: punkt 7 — kvarglömd utkommenterad import borttagen ur `json.mdx` (2026-08-11).

Åtgärdat: punkt 8 — `person.namn` → `person.name` i `json.mdx` (2026-08-11).

Åtgärdat: punkt 9 — `let` tillagt framför `backgroundImage` i `fetchImage.mdx` (2026-08-11).

Åtgärdat: punkt 10 — "Jag läger" → "Jag lägger" i `form-elements.mdx` (2026-08-11).

Åtgärdat: punkt 11 — "sre man små pilar" → "ser man små pilar" i `form-elements.mdx` (2026-08-11).

Åtgärdat: punkt 12 — "Ge dg ... like olika" → "Ge dig ... lite olika" i `form-elements.mdx` (2026-08-11).

13. Inför ht27: överväg att lägga in artikeln om problemlösning (krav → pseudokod → flödesdiagram med mermaid) i kmom06, som stöd när studenterna planerar Duckhunt. Avgör var den ska ligga (kmom06 eller `studieguide/`), och kontrollera att mermaid-diagram går att rendera i Astro/Starlight (kräver ev. ett plugin) (2026-10-06).
