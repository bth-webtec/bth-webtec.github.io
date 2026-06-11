---
title: "Uppgift: Bygg en One-page webbplats" 
description: Uppgift att bygga en webbplats i kmom03.
sidebar:
    order: 900
---

Denna uppgift görs som en del av kmom03 och den sätter kraven för den webbplats du skall bygga.



## Förutsättning

Du har genomfört uppgifterna i kmom01 och i kmom02. Denna uppgiften bygger på att de kraven är uppfyllda i din webbplats.

Du har jobbat igenom övningen "[Bygg grunden för en One-page webbplats](../bygg-en-one-page-webbplats)" som ger dig grunden för webbplatsen du skall bygga.



## Inlämning, bedömning och betygsättning

Denna uppgiften skall lämnas in för bedömning och betygsättning.



### Inlämning

När du lämnar in denna uppgift skall du göra en pull request (PR) mot din branch `bth/submit/kmom03`. Instruktion för det finns längre ned i kraven för uppgiften.



### Bedömning

Inom 15 arbetsdagar (normalt sett) så tittar läraren på din inlämning och gör en bedömning. Betygsskalan är U (underkänt), Ux (komplettering) eller G (godkänd). 

Om du får U så har du missat väsentliga delar i kravspecen och du får göra en ny inlämning, av samma uppgift, vid nästa tillfälle.

Om du får Ux så får du komplettera för att bli godkänd. Det finns ingen bestämd deadline för när en komplettering måste ske, men gör den så fort du kan, gärna inom en vecka. Väntar du för länge så kan det hända att rättningen inte sker förrän vid nästa tillfälle.

Om du får G så har du uppfyllt kraven är är godkänd på uppgiften.



### Betygsättning och Ladok

Denna uppgiften betygsätts i Ladok enligt kursens struktur där en inlämning är mappad mot högskolepoäng. När du har fått ditt betyg så överförs det (direkt eller inom någon dag) till Ladok. Dubbelkolla alltid att du har fått ditt betyg i Ladok.



## Krav

Utför följande krav.



### Krav kmom01 & kmom02

1. Din webbplats som du byggt i kmom01 skall uppfylla alla krav från den uppgiften.

1. I kmom02 byggde du vidare på den webbplatsen, alla krav från den uppgiften skall vara uppfyllda i din webbplats.

1. I din webbplats, lägg till en länk "Onepage" i navbaren, som leder till den webbplatsen du skall bygga nedan.



### Krav One-page webbplats

1. Skapa en ny webbsida `public/onepage.html` med tillhörande stylesheet `public/css/onepage.css` och en JavaScript-fil `public/js/onepage.js`. 

1. Välj ett tema för din webbplats. Det kan vara på riktigt eller påhittat. När du skapar innehåll i form av text och bilder i webbplatsen så skall det vara anpassat till temat.

1. Välj en färgpalett som passar din webbplats. Definiera färgpaletten i CSS variabler.

1. Din webbplats skall vara responsiv och stacka innehåll när bredden blir för smal och det skall finnas en hamburger-meny som aktiveras när sidan blir för smal.

1. Din webbplats skall ha en header med logo, sidans titel.

1. Din sida skall ha en vanlig navbar och en responsiv navbar (hamburgermeny) som länkar till delar av sidan.

1. Din sida skall ha en footer med tre kolumner med relevant innehåll.

1. Innehållet i din webbplats skall vara uppdelat i sektioner (rader) och i varje rad delas innehållet upp i en, två eller tre kolumner. Det skall finnas minst 7 sektioner och du varvar sektionerna så att det finns minst en av varje 1/2/3 kolumner.

1. Det skall finnas minst en sektion med en bakgrundsbild.

1. Minst en sektion skall ha innehåll med horisontell skrollbar.

1. Minst en sektion skall ha innehåll som wrappas.

1. Din webbplats är byggd med HTML och CSS. JavaScript används till navbaren. Du använder inga ramverk eller extern kod.



### Krav inlämning

1. Skriv all din kod i din branch `main`. 

1. Dina webbsidor skall validera i W3C HTML validator.

1. Dina webbsidor skall validera i W3C CSS validator (när det är rimligt).

1. Din webbplats skall passera `npx eslint`.

1. Din webbplats skall gå att starta via `npx http-server`.

1. När du är klar så taggar du ditt repo och pushar till GitHub.

1. Din webbplats skall vara tillgänglig via en privat länk på GitHub Pages.

1. När allt är klart och fungerar så gör du en pullrequest (PR) mot branchen `bth/submit/kmom03`. [Läs om hur du gör en PR för kmom03](/laromaterial/instruktion/gor-en-pr-for-kmom03)".



## Övrigt

Här finns övriga saker som är bra att tänka på.

1. Prova att validera dina webbsidor och använd lintern ofta, så slipper du en massa fel i slutet.

1. Gör många och små commits i ditt git repo, du kan ha ungefär 10-20 commits för en sådan här uppgift. 
