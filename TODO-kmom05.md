# TODO: kmom05

Innehållsgranskning 2026-08-11. Kvarstående punkter, tas en i taget.

---

1. `fetch.mdx` — kvarvarande `npx eslint public` / `npx http-server` i valideringskraven, ska vara `npm run lint` / `npm run server`.

2. `fetch-api/index.mdx:20` — trasig länk `./labbmiljo`, ska vara `/labbmiljo/` (samma bugg som fanns i kmom04).

3. `fetch-api/select.mdx:9` — stavfel "rullgardingsmeny" → "rullgardinsmeny".

4. `fetch-api/select.mdx:34` — stavfel "frut" → "frukt".

5. `fetch-api/select.mdx:22-26` — inkonsekvent formatering: `<select>`/`<option>` står i backticks men `disabled`/`selected`/`value` gör det inte i punktlistan.

6. `fetch-api/fetch.mdx:8` — kvarglömd utkommenterad import (`// import domtree from '@assets/kmom04/htmldom.png';`), rester från kmom04-mallen.

Åtgärdat: punkt 1 — `npx eslint public`/`npx http-server` ersatt med `npm run lint`/`npm run server` i `fetch.mdx` (2026-08-11).

Åtgärdat: punkt 2 — trasig länk `./labbmiljo` ändrad till `/labbmiljo/` i `fetch-api/index.mdx` (2026-08-11).

Åtgärdat: punkt 3 — "rullgardingsmeny" → "rullgardinsmeny" i `select.mdx` (2026-08-11).

Åtgärdat: punkt 4 — "frut" → "frukt" i `select.mdx` (2026-08-11).

Åtgärdat: punkt 5 — `disabled`/`selected`/`value` satta i backticks för konsekvens med `<select>`/`<option>` i punktlistan i `select.mdx` (2026-08-11).

Åtgärdat: punkt 6 — kvarglömd utkommenterad import borttagen ur `fetch-api/fetch.mdx` (2026-08-11).

7. Inför ht27: överväg att lägga till artiklar om HTML-formulär och HTML-tabeller i kmom05, som stöd för fetch- och formulärövningarna. Avgör om de ska ligga som egna artiklar under `kmom05/` eller i `studieguide/`, och att innehållet inte dubblerar `fetch-api/select.mdx` (2026-10-06).
