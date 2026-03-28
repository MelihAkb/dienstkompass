# Dienstkompass

## Projekt
Infoportal für den öffentlichen Dienst in Deutschland.
Zielgruppe: Beamte und Tarifbeschäftigte.
Domain: dienstkompass.de
Entwickler: Melih (melih@akbiyik.eu)

## Stack
- Next.js (App Router) + TypeScript + Tailwind
- Hosting: Hetzner VPS via Coolify
- CMS: Directus (PostgreSQL)
- Server IP: 37.27.249.108
- Coolify URL: http://37.27.249.108:8000
- Directus URL: http://directus-rcijyf5cfszthsug1gy13w7f.37.27.249.108.sslip.io
- GitHub Repo: https://github.com/MelihAkb/dienstkompass

## Projektstruktur
- /src/app → Next.js Pages (App Router)
- /src/components/Layout.tsx → Globales Layout mit Header, Sidebar (Desktop), Burger Menu (Mobile)
- /src/components/Rechner.tsx → Wiederverwendbarer Gehaltsrechner mit Stufenvergleich, Details-Button, Jahresbeträge
- /src/lib/tarifDaten.ts → Alle Tarifdaten (TVöD VKA, Bund, SuE, P, S, TV-L, Bundesbeamte, Caritas, Diakonie)
- /src/lib/beamteLaender.ts → Beamten-Besoldungsdaten der Länder (BW, BY, NW)

## Seiten Status
- / → Startseite mit Layout ✅
- /tvoed/vka → Übersicht mit aktuell/zukünftig nebeneinander, Archiv, Tarifrunden, SEO ✅
- /tvoed/vka/[jahr] → Dynamische Tabelle + Rechner (2024, 2025, 2026) ✅
- /tvoed/vka/tarifrunden/[jahr] → Tarifrunden Detail mit Live-Berichterstattung Timeline ✅
- /tvoed/bund → Rechner TVöD Bund ✅
- /tvoed/sue → Rechner TVöD SuE ✅
- /tvoed/p → Rechner TVöD-P Pflege ✅
- /tvoed/s → Rechner TVöD-S Sparkassen ✅
- /tv-l/allgemein → Rechner TV-L ✅
- /beamte/bund → Rechner Bundesbeamte ✅
- /beamte/bw → Rechner Beamte Baden-Württemberg ✅
- /beamte/by → Rechner Beamte Bayern ✅
- /beamte/nw → Rechner Beamte NRW ✅
- /wohlfahrt/caritas → Rechner Caritas AVR ✅
- /wohlfahrt/diakonie → Rechner Diakonie AVR ✅
- /news → News Seite ✅
- /stellen → Jobbörse mit externen Anzeigen ✅

## TODO / Offen
- Restliche 13 Bundesländer Beamte (BE, BB, HB, HH, HE, MV, NI, RP, SL, SN, ST, SH, TH)
- Übersichtsseiten für alle anderen Tarife (wie /tvoed/vka)
- Tarifrunden für alle Tarife
- Userpanel / Auth (Login, Registrierung) – bewusst noch nicht gebaut
- KI-Assistent (Claude API, RAG mit Tarifdaten aus Directus)
- Gehaltsabrechnungs-Checker (PDF Upload → KI prüft)
- Stripe Pro-Zugang (4,99€/Monat)
- Impressum / Datenschutzerklärung (Pflicht vor Launch)
- Domain SSL in Coolify eintragen (https://dienstkompass.de)
- Google Search Console einrichten
- Directus API mit Next.js verbinden (Tarifdaten aus DB statt hardcoded)

## Design
- Finanzfluss-Stil: hell, viel Weißraum, saubere Typografie
- Primärfarbe Blau: #1D6FB8
- Sidebar links auf Desktop mit aufklappbaren Tarifverträgen
- Mobile: Burger Menu mit Drawer
- Kein Login/Registrieren UI sichtbar (kommt später)
- Tailwind CSS, keine UI Library

## Rechner Komponente
Der Rechner (/src/components/Rechner.tsx) ist wiederverwendbar mit Props:
- titel, untertitel, gueltigAb
- tabelle (EntgeltTabelle aus tarifDaten.ts)
- activePath, breadcrumb
- isBeamte (boolean, für Besoldung statt Entgelt)
- vollzeitStunden (default 39)

Features:
- Stufenvergleich-Tabelle unter dem Ergebnis
- "Mehr Details" Button mit Jahresbeträgen, SV-Aufschlüsselung
- Klick auf Tabellenzelle → direktes Berechnen + Scroll nach oben

## Tarifrunden Seiten
Dynamisch unter /tvoed/vka/tarifrunden/[jahr]/page.tsx
- TARIFRUNDEN_DATA Objekt mit allen Daten pro Jahr
- Timeline mit Updates (abschluss, schlichtung, warnung, info)
- Live-Berichterstattung wird durch neue Einträge in updates[] ergänzt
- Gleiche Struktur für alle Tarife geplant

## Monetarisierung Plan
- **Pro Account:** 4,99€/Monat via Stripe
  - Gehaltsabrechnungs-Checker (PDF Upload)
  - Unbegrenzter KI-Assistent
  - Persönlicher Tarifalarm
  - Besoldungs-Widerspruchs-Guide
- **Jobbörse:** Stellenanzeigen für öffentliche Arbeitgeber
- **Display Ads:** Nach Traffic-Aufbau (Ezoic/Mediavine)

## Wichtige Entscheidungen
- Tarifdaten aktuell hardcoded in /src/lib/tarifDaten.ts
- Ziel: Daten in Directus pflegen, Next.js holt per API
- Keine externe Auth-Library entschieden (kommt noch)
- PostgreSQL (Directus) statt MySQL (war ursprünglich geplant)
