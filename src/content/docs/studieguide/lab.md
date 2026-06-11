---
title: "Labbar" 
description: Laborationer som läromedel.
sidebar:
    order: 0100
---

Labbar, eller laborationer, är övningar som är del i kursmoment och syftar till att träna dig inför att lösa uppgifter eller för att förstå och träna på de koncept som kursen innehåller.

Se instruktionen för kursmomenten för att se vilket kmom som innehåller vilken lab.



## Hämta en lab

För att hämta en lab så öppnar du terminalen och går till roten av ditt kursrepo och sedan kör du följande kommando.

```bash title="Gå till kursrepot och hämta en lab."
# Gå till roten av ditt kursrepo

# Hämta en lab
bash <(curl -Ls https://raw.githubusercontent.com/bth-webtec/refs/heads/main/src/content/docs/laromaterial/lab/download_lab.bash)
```

Det kan se ut så här när du kör skriptet. Ange en siffra som motsvarar labben du vill ladda ned.

```bash title="Ladda ned en lab."
$ bash <(curl -Ls https://raw.githubusercontent.com/bth-webtec/refs/heads/main/src/content/docs/laromaterial/lab/download_lab.bash)
What lab do you want to get? (1, 2, 3 or 4): 1
Great! I will download lab_01 into the directory 'lab/lab_01'.
✅ lab/lab_01/README.md
✅ lab/lab_01/lab.js
✅ lab/lab_01/answer.js
✅ lab/lab_01/.solution.js
✅ lab/lab_01/.dbw.js
```

Bra, då ser det ut som allt är nedladdat.

Om du försöker ladda ned samma lab en gång till så kommer filerna inte att skrivas över, i de fallen ser du ett ❌ som anger att filen inte laddats ned.



## Vad innehåller katalogen lab

Dubbelkolla vad katalogen innehåller när du är klar.

```bash title="Kontrollera vad lab-katalogen innehåller."
lab                    
└── lab_01             
    ├── README.md      
    ├── answer.js      
    └── lab.js         
                       
2 directories, 4 files 
```

I filen `README.md` finns detaljer om själva labbens innehåll.

I filen `answer.js` finns uppgifterna du skall lösa och där skall du skriva din kod.

Filen `lab.js` är en del av labbverktyget och main-programmet som kör labben.




## Kör en lab

Nu kan du flytta ned i katalogen och köra labben.

```bash title="Flytta ned till katalogen för labben"
# Flytta till katalogen för labben
cd lab/lab_01

# Öppna din texteditor i labb-katalogen 
code .
```

Det är alltså filen `answer.js` som du skall jobba i. Läs kommentarerna i filen för att se vad du skall göra.

Du kör labben så här i terminalen.

```bash title="Kör labben"
node lab
```



<details>

<summary>Dolda filer i labben.</summary>

Det finns också ett par dolda filer i katalogen, de börjar med en punkt i filnamnet. 

```bash title="Lab-katalogens dolda filer."
$ tree -a lab             
lab                       
└── lab_01                
    ├── .dbw.js           
    ├── .solution.js      
    ├── README.md         
    ├── answer.js         
    ├── lab.html          
    └── lab.js            
                          
2 directories, 6 files    
```

Filen `.dbw.js` är en del av labbverktyget.

Filen `.answer.js` innehåller lösningsförslag till labben. Titta inte i den om du verkligen inte behöver.

För skojs skull kan du provköra och se om lösningsfilen ger rätt svar till labben.

```bash title="Kör lösnignsfilen för labben"
node lab -s
```

</details>

