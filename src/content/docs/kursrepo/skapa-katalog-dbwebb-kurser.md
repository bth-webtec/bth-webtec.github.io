---
title: "Skapa katalogen dbwebb-kurser" 
description: Skapa ditt kursrepo för kursen, ett git repo som du kommer att jobba med genom hela kursen.
author: mos
revision:
    "2025-06-24": "(A, mos) Första utkastet."
sidebar:
    order: 0010
---

Börja med att skapa en katalog i ditt filsystem som heter `dbwebb-kurser`. Tanken är att du kan spara allt ditt kursmaterial, från alla kurser, under denna katalog.

För att skapa katalogen så öppnar du din terminal och går till din hemmakatalog, därefter skapar du katalogen.

```bash title="Skapa katalogen dbwebb-kurser under din hemmakatalog"
# Gå till din hemmakatalog i terminalen
cd

# Kontrollera vilken katalog du nu står i
pwd

# Skapa katalogen dbwebb-kurser, om den redan finns händer inget
mkdir -p dbwebb-kurser

# Flytta in i katalogen dbwebb-kurser
cd dbwebb-kurser

# Kontrollera vilken katalog du står i
pwd

# Katalogen bör normalt vara tom, men du kan dubbelkolla 
ls -l
```

Kör varje kommando var för sig och kontrollera att du inte får någon typ av felmeddelande.
