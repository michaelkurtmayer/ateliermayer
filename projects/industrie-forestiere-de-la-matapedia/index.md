---
# Industrie forestière de la Matapédia: the forest industry of the Matapédia valley,
# between the province (Infrastructure touristique au Québec) and the site (Aménagement
# de Routhierville). Set up 21 Nov at his ask: "make a new project between quebec and
# amenagement called something like Industrie forestière de la Matapédia. put in the
# map i am about to send you, as well as the timetable diagram". The name is his own,
# in French in every language like the other project names.
# FR/DE text translated from the English with DeepL.
# Web images live in ./images/ next to this file (full-resolution
# originals are in /originals/industrie-forestiere-de-la-matapedia). To add one, drop it
# in ./images/ and add an entry under "images:".

title: Industrie forestière de la Matapédia
# Second on the Work page: the valley, between the province and the site
order: 1
year: '2026'
location: Vallée de la Matapédia, Québec

# Type, one of: Cultural, Hospitality, Infrastructure, Residential, Transportation
#   FR: Culturel, Hôtellerie, Infrastructure, Résidentiel, Transport
#   DE: Kultur, Hotellerie, Infrastruktur, Wohnen, Verkehr
# Infrastructure, like the two other projects at the scale of the region and the site
type:
  fr: Infrastructure
  en: Infrastructure
  de: Infrastruktur

status:
  fr: En cours
  en: In progress
  de: In Bearbeitung

context:
  fr: Mémoire de maîtrise « Railway-Oriented Tourism », Harvard Graduate School of Design
  en: Thesis “Railway-Oriented Tourism”, Harvard Graduate School of Design
  de: Masterarbeit „Railway-Oriented Tourism“, Harvard Graduate School of Design

# The page's description for search engines. FR/DE from DeepL; in French the train's
# name went in through a placeholder (DeepL kept the English « Ocean »), l’Océan as on
# viarail.ca/fr; "vallée de Matapédia" is DeepL's (asked twice, "Matapédia Valley" too).
summary:
  fr: 'L’industrie forestière de la vallée de Matapédia, au Québec, et le train l’Océan de VIA Rail, qui la traverse.'
  en: 'The forest industry of the Matapédia valley in Québec, and VIA Rail’s Ocean train, which runs through it.'
  de: 'Die Forstwirtschaft im Matapédia-Tal in Québec und der „Ocean“-Zug von VIA Rail, der dort durchfährt.'

# Leave a blank line between paragraphs.
text:
  fr: |
    [Description du projet à venir : emplacement, programme, concept et construction. Deux à quatre courts paragraphes.]
  en: |
    [Project description to come: site, programme, concept and construction. Two to four short paragraphs.]
  de: |
    [Projektbeschreibung folgt: Standort, Programm, Konzept und Bauausführung. Zwei bis vier kurze Absätze.]

# size: full (whole width), half (two side by side) or half-right (one image on the right half)
# src2x: drawings only, the same drawing at twice the size; both files are then
#   served exactly as exported (never recompressed), so the lines stay crisp
# caption: a simple name (never the sheet title), shown in the left column of the
#   project page and used as alt text; scale: shown under it (drawings only).
images:
  # Map 16, the Matapédia valley at 1:100,000, Lac Matapédia to the Restigouche: the river
  # and lakes in black, the forest in stipple (NRCan land cover 2020) with every harvest
  # since 1970 left open, 20 m contours, logging roads dashed, CN's Mont-Joli Subdivision,
  # VIA's four stops and Routhierville's disc. Drawings/Map_MatapediaValley_A1_1-100000.pdf
  # (QGIS, A1 portrait, 21 Nov, no legend), sent from the valley session (GIS/README_Map16_
  # MatapediaValley.md). Web files from export_web.py (Map_MatapediaValley), cropped to the
  # QGIS map frame (title lines dropped), copied unchanged. Caption: what the map shows, as
  # for maps 14c and 14d (the session's longer one is in its message), FR/DE from DeepL,
  # asked as "Railway and river through logged forest, 1:100,000".
  - src: ./images/map-matapedia-valley.jpg
    src2x: ./images/map-matapedia-valley@2x.jpg
    size: full
    caption: { fr: 'Voie ferrée et cours d’eau traversant une forêt exploitée', en: 'Railway and river through logged forest', de: 'Eisenbahnstrecke und Fluss durch abgeholzten Wald' }
    scale: { fr: '1:100 000', en: '1:100,000', de: '1:100.000' }
  # VIA's Ocean, Montréal–Halifax, 20–26 July 2025, as a timetable graph: the trains
  # (thin lines), the night (stipple) and each train passing Routhierville (black
  # circles). Exported whole, as an A5 spread (Drawings/Diagrams_Gap_2026-11-18), 18 Nov.
  # Caption his (20 Nov): "timetable diagram of VIA Rail's Ocean line (use the right
  # terms)": the Ocean is VIA's train (its French name is l'Océan, as on viarail.ca/fr),
  # the line is CN's, so "train". FR/DE from DeepL, asked as "Timetable diagram of VIA
  # Rail's Ocean train"; in French the name went in through a placeholder (DeepL kept
  # the English « Ocean »), German keeps the English name as DeepL gave it.
  # Moved here from the Aménagement page 21 Nov (his words: "timetable only on new project").
  - src: ./images/diagram-ocean-week.jpg
    src2x: ./images/diagram-ocean-week@2x.jpg
    size: full
    caption: { fr: 'Schéma des horaires du train l’Océan de VIA Rail', en: 'Timetable diagram of VIA Rail’s Ocean train', de: 'Fahrplandiagramm des „Ocean“-Zugs von VIA Rail' }
---
