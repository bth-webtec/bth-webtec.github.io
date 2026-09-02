# TODO: Allmänt (repo-övergripande)

Punkter som inte hör till ett specifikt kmom.

---

1. Lägg till scriptet `lint:fix` i `package.json` i studentmallrepot (webtec-abcd25) — det saknas idag. Artiklarna i kmom01 hänvisar nu till `npm run lint:fix` (uppdaterat 2026-08-10) för att ersätta `npx eslint --fix`, så scriptet måste finnas i mallrepot för att instruktionen ska stämma.

Åtgärdat: `lint:fix`-scriptet (`eslint . --fix`) tillagt i `package.json` och dokumenterat i README-tabellen i studentmallrepot `webtec-abcd25`, committat och pushat (`ea9e6b2`) (2026-08-11).

2. Kvarvarande referenser till det gamla repot `/website` hittade vid genomsökning (2026-09-02):
   - `lab/download_lab.bash`: `BASE`-variabeln pekade fortfarande på `bth-webtec/website/.../src/content/docs/laromaterial/lab` (gammal repostruktur, katalogen finns inte längre). Commit `851cc0e` fixade tidigare bara usage-kommentaren på rad 6, inte denna rad.
   - `src/content/docs/studieguide/lab.md`: curl-kommandot studenten kopierar saknade repo-namnet (`bth-webtec/refs/heads/main/...` istället för `bth-webtec/bth-webtec.github.io/refs/heads/main/...`) och pekade på samma numera obefintliga `laromaterial`-sökväg.
   - `astro.config.mjs` rad 36: en utkommenterad `social.github`-rad som pekar på `bth-webtec/website` — ofarlig (redan avaktiverad), kan städas bort som död kod.
   - `lab/README.md` (lärar-internt dokument, inte del av den byggda sajten): flera exempel refererar ännu äldre struktur (repo `webtec-2024`, sökväg `laromaterial/lab/target`). Dokumentet flaggar redan självt (rad 13–15) att det är inaktuellt sedan 2025-08-22 — lämnat orört.
   - `src/content/docs/studieguide/versioner.md` rad 16 nämner medvetet den gamla adressen som historik — korrekt som den är.

Åtgärdat: `BASE` i `lab/download_lab.bash` och url:erna i `studieguide/lab.md` uppdaterade till `https://raw.githubusercontent.com/bth-webtec/bth-webtec.github.io/refs/heads/main/lab...` (2026-09-02).
