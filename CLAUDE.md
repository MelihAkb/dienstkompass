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
- News-Workflow: Artikel in Directus schreiben (draft → review → published), manuelles Freischalten, Next.js holt nur published Artikel
- Kommentarfunktion: Nur für eingeloggte User sichtbar und nutzbar, Kommentare in DB, optionale Moderation vor Freischaltung
- News-Artikel werden von KI generiert und vor Publish manuell humanisiert/bearbeitet
- Stellenbörse: Bundesagentur für Arbeit API (kostenlos) für externe Stellen, später eigene Inserate
- Google Analytics 4: vollständiges Tracking (Seitenaufrufe, Klicks, Verweildauer, Conversions, Pro-Signups, Stripe-Events)
- Cookie-Banner: DSGVO-konform, Consent Management vor GA4-Aktivierung (z.B. Cookiebot oder eigene Lösung)
- Newsletter: Brevo (ehemals Sendinblue) – kostenlos bis 300 Mails/Tag, DSGVO-konform, EU-Server, Double-Opt-In. Use Cases: Willkommensmail, Tarifalarm, wöchentlicher Newsletter, Pro-Upgrade Reminder
- Kontaktseite (/kontakt) mit Formular – Name, Email, Betreff, Nachricht. Versand über Brevo API, Bestätigungsmail an User
- Blog (/blog) – zeitlose Ratgeber & Guides (z.B. Stufenaufstieg, Eingruppierung, Elternzeit, Quereinstieg). KI generiert, manuell humanisiert, über Directus verwaltet. Starker SEO-Hebel für Long-Tail Keywords
- Announcement Bar: schmaler Banner direkt unter der Navigation, über Directus WYSIWYG befüllbar, ein/ausschaltbar. Für Tarifrunden-News, wichtige Hinweise etc.
- Sitemap: automatisch generierte XML-Sitemap (/sitemap.xml) für Google + HTML-Sitemap-Seite (/sitemap) für User mit allen Seiten übersichtlich aufgelistet
- FAQ Sections: unter jeder Tabellen/Rechner-Seite, tarifspezifische Fragen & Antworten. Über Directus pflegbar. Auch als JSON-LD Schema Markup für Google (FAQ Rich Snippets)
- Tarif Finder (/tarif-finder): Landing Page mit Schritt-für-Schritt Fragebogen (Arbeitgeber-Typ, Bundesland, Berufsfeld, Ausbildung etc.) → zeigt welcher Tarifvertrag gilt. Besonders für Gen Z / Berufseinsteiger / Quereinsteiger. Prominenter Button in der Sidebar auf allen Seiten.
- Anwärter-Sections: auf jeder Beamte-Länderseite eine eigene Section mit Anwärterbezügen je Laufbahngruppe (einfacher, mittlerer, gehobener, höherer Dienst), Infos zu Anwärtersonderzuschlägen, Dauer des Vorbereitungsdienstes und Übernahme nach Prüfung. Kein Konkurrent bietet das aktuell an.

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
  - Werbefrei (keine Ads)
- **Jobbörse:** Stellenanzeigen für öffentliche Arbeitgeber
- **Display Ads:** Nach Traffic-Aufbau (Ezoic/Mediavine)

## Wichtige Entscheidungen
- Tarifdaten aktuell hardcoded in /src/lib/tarifDaten.ts
- Ziel: Daten in Directus pflegen, Next.js holt per API
- Keine externe Auth-Library entschieden (kommt noch)
- PostgreSQL (Directus) statt MySQL (war ursprünglich geplant)
- Beihilfe-Erinnerungen: für Beamte je nach Dienstherr (Bund/Land) – Erinnerung an Fristen für Beihilfeeinreichung, Hinweise auf beihilfefähige Leistungen, Ausschlussfristen (meist 1 Jahr). Als persönliche Benachrichtigung im Userpanel (Pro Feature).
