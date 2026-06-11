---
title: "Bygg webbsidor med HTML, CSS och JavaScript (kmom01)" 
description: Uppgift att bygga en webbplats i kmom01.
revision:
    "2025-09-18": "(A) Lade till filnamnet css/style.css."
sidebar:
    order: 0010
---

Denna uppgift görs som en del av kmom01 och den sätter kraven för den webbplats du skall bygga.



## Förutsättning

Innan du gör uppgiften så behöver du ha jobbat igenom övningen "[Skapa en webbsida med HTML, CSS och JavaScript](/ovning/skapa-en-webbsida-med-html-css-och-javascript)" som hjälper dig att komma igång och stegvis bygga en webbplats med HTML, CSS och JavaScript.

Du behöver också ha skapat ditt git-repo, kopplat det till kursens organisation på GitHub och du behöver ha strukturerat ditt repo på det viset som beskrivs i dokumentet "[Utvecklingsmiljö i ditt kursrepo](/laromaterial/kursrepo-utvecklingsmiljo)".



## Allmänt

Om du har utfört övningarna så har du gjort 80% av uppgiften.



## Krav

Utför följande krav.

1. Din webbplats skall vara byggd i den katalogstruktur som visas i övningen och ha den namngivning som finns i övningen.

1. Ditt repo skall innehålla den utvecklingsmiljö som beskrivs.

1. Din webbplats skall ha en **header och navbar** som har ett liknande utseende som finns i övningen, du får gärna justera det men tänk på att kommande uppgifter kan bygga vidare på den strukturen som nu presenteras.

1. Din **footer** skall vara indelad i tre delar och skall minst innehålla den informationen som visas i övningen. Du får gärna lägga till fler saker i footern.

1. Gör klart din `me.html` och skriv en kort presentation om dig själv (eller om din påhittade alter ego) och lägg in en representativ bild. Sidan skall vara byggd i en kolumn. Det skall finnas en byline.

1. I din `me.html` skall du använda JavaScript för att generera nuvarande år och lägga till det i ditt copyright notice. Webbsidan skall inkludera `js/hello.js` där du placerar js-koden.

1. Gör klart din `report.html` och skriv redovisningstexten för kmom01. Sidan skall vara byggd i två kolumner (main/aside) och det skall gå att länka direkt till en specifik redovisningstext på sidan via interna länkar.

1. Gör klart sidan `about.html`.

    1. Bygg sidan i två kolumner (main/aside), lägg till innehåll i båda kolumnerna.
    
    1. Skriv en kort beskrivning av den kurs du går. Lägg till en länk till kursens kursrepo på GitHub och infoga en bild som du anser är representativ för kursen.

1. Du kan behålla den style som finns i övningen och stylen skall utgå från filen `css/style.css` och där importerar du övriga css-moduler likt övningen. Du ska justera stilen till att bli mer "din egen style" för din variant av kursens webbplats. Vi kommer jobba mer med stylen under de kommande kursmomenten.

1. Dina webbsidor skall validera i W3C HTML validator.

1. Dina webbsidor skall validera i W3C CSS validator.

1. Din webbplats skall passera `npx eslint`.

1. Din webbplats skall gå att starta via `npx http-server`.



## Övrigt

Här finns övriga saker som är bra att tänka på.

1. Prova att validera dina webbsidor och använd lintern ofta, så slipper du en massa fel i slutet.

1. Gör många och små commits i ditt git repo, du kan ha ungefär 5-20 commits för en sådan här uppgift. 
