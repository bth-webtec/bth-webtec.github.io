---
title: "Automatiserade tester" 
description: Så här kan du testa ditt eget repo inför en inlämning.
sidebar:
    order: 0810
---

När du gör en inlämning så körs ett antal automatiserade tester för att kontroller att ditt repo innehåller tom som förväntas enligt kraven.

Det är bra att säkerställa att din inlämning passerar dessa tester, innan du gör taggen för ditt kmom och innan du skapar en PR.

Detta dokument visar hur du kan installera och använda verktyget.



## Dokumentation

Du kan läsa om verktyget via dess paket-sida [`@dbwebb/webtec`](https://www.npmjs.com/package/@dbwebb/webtec), därifrån kan du också nå dess källkod.



## Installera och uppdatera

Verktyget heter `@dbwebb/webtec` och finns redan installerat i ditt kursrepo.

<details>
<summary>Hur man installerar och uppdaterar verktyget.</summary>

Du går till ditt repo och sedan installerar du verktyget som en npm-modul.

```bash
npm i @dbwebb/webtec --save-dev
```

Uppdatera din lokala installation till den senaste versionen av verktyget.

```bash
npm update @dbwebb/webtec@latest
```

</details>



## Testkör ditt repo

Du kan köra tester mot ett specifikt kursmoment. Om du väljer ett högre kursmoment så kommer det även att köras tester för de tidigare kursmomenten.

I ditt repo finns ett skript som kör verktyget, du kan köra det så här.

```bash
npm run check kmom01
```

Du kan också köra verktyget direkt på detta sättet. För att tex testa ditt kmom03 så skriver du följande.

```bash
npx @dbwebb/webtec check kmom03
```

Om du vill testa dina labbar så anger du vilka labbar som du vill testa, så här kan du testa de labbar som omfattas av kmom03.

```bash
npx @dbwebb/webtec check lab lab_01 lab_02 lab_03
```
