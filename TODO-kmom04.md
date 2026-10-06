# TODO: kmom04

Innehållsgranskning 2026-08-11. Kvarstående punkter, tas en i taget.

---

1. `dom.mdx` — kvarvarande `npx eslint public` / `npx http-server` i valideringskraven, ska vara `npm run lint` / `npm run server`.

2. `dom.mdx` — dubblerad rubriknumrering: både "3.2 Tangenten `r`" och "3.2 Tangenten `i`" har numret 3.2. "i" bör bli 3.3.

3. `mera-javascript/index.mdx:28` — trasig länk `./labbmiljo`, ska vara `/labbmiljo/`.

4. `mera-javascript/arrays.mdx:34` — `console.log(myarray[1])` refererar odefinierad variabel `myarray`, ska vara `myArray3`.

5. `mera-javascript/arrays.mdx:42-43` — for-loopen använder `myArray2`/`myArray` istället för `myArray3`.

6. `mera-javascript/arrays.mdx:82` — `console.log(arr1) [ 1, 2 ]` saknar `//` innan resultatkommentaren.

7. `mera-javascript/hamta-element.mdx` — "queryselector" (rubrik + brödtext) har fel case, ska vara `querySelector`.

8. `mera-javascript/hamta-element.mdx:74-76` — `getElementsByClassName('myClass')` matchar inte klassen `content` i HTML-exemplet ovanför.

9. `mera-javascript/hamta-element.mdx:87` — extra backtick kvar efter punkt i slutet av meningen.

10. `kmom04/index.mdx:88` — stavfel "skijler sig åt" → "skiljer sig åt".

11. `mera-javascript/arrays.mdx:7` — stavfel "kännr igen" → "känner igen".

12. `mera-javascript/arrays.mdx:64` — stavfel "uppsätning" → "uppsättning".

13. `mera-javascript/arrays.mdx:66` — "konkatinera arrayer:" → "Konkatenera arrayer:".

14. `lab_04.md:13-19` — kvarglömda HTML-kommentarer (`<!-- [[_TOC_]] -->` och tomt `TODO`-block).

Åtgärdat: punkt 1 — `npx eslint public`/`npx http-server` ersatt med `npm run lint`/`npm run server` i `dom.mdx` (2026-08-11).

Åtgärdat: punkt 2 — dubblerad rubrik "3.2 Tangenten i" ändrad till "3.3 Tangenten i" i `dom.mdx` (2026-08-11).

Åtgärdat: punkt 3 — trasig länk `./labbmiljo` ändrad till `/labbmiljo/` i `mera-javascript/index.mdx` (2026-08-11).

Åtgärdat: punkt 4 — `console.log(myarray[1])` ändrad till `console.log(myArray3[1])` i `arrays.mdx` (2026-08-11).

Åtgärdat: punkt 5 — for-loopen i `arrays.mdx` ändrad till att konsekvent använda `myArray3` istället för `myArray2`/`myArray` (2026-08-11).

Åtgärdat: punkt 6 — saknad `//` tillagd före resultatkommentaren `[ 1, 2 ]` i `arrays.mdx` (2026-08-11).

Åtgärdat: punkt 7 — "queryselector" (rubrik + brödtext) ändrat till `querySelector` i `hamta-element.mdx` (2026-08-11).

Åtgärdat: punkt 8 — `getElementsByClassName('myClass')` ändrad till `getElementsByClassName('content')` för att matcha HTML-exemplet. Rättade samma sorts `myClass`/`content`-missmatch även i `querySelector('.myClass')`- och `querySelectorAll('.myClass')`-exemplen i samma artikel, för konsekvens (2026-08-11).

Åtgärdat: punkt 9 — extra backtick efter punkten i slutet av meningen borttagen i `hamta-element.mdx`. Rättade även "använda och querySelectorAll()" → "använda oss av querySelectorAll()" i samma mening (2026-08-11).

Åtgärdat: punkt 10 — "skijler sig åt" → "skiljer sig åt" i `kmom04/index.mdx` (2026-08-11).

Åtgärdat: punkt 11 — "kännr igen" → "känner igen" i `arrays.mdx` (2026-08-11).

Åtgärdat: punkt 12 — "uppsätning" → "uppsättning" i `arrays.mdx` (2026-08-11).

Åtgärdat: punkt 13 — "konkatinera arrayer:" → "Konkatenera arrayer:" i `arrays.mdx` (2026-08-11).

Åtgärdat: punkt 14 — kvarglömda HTML-kommentarer borttagna ur `lab_04.md` (2026-08-11).

15. Inför ht27: överväg att lägga in artikel/material om arrayer och funktioner i kmom04, gärna med en programmeringsövning med det fokuset. Inkludera problemlösning med pseudokod och flödesdiagram (se även `TODO-kmom06.md` punkt 13 om artikeln om problemlösning med krav, pseudokod och mermaid — bör samordnas så att artikeln inte skrivs två gånger) (2026-10-06).
