---
# Vallée de la Matapédia: the valley, between the province (Infrastructure touristique
# au Québec) and the site (Aménagement de Routhierville). Set up 21 Nov at his ask: "make
# a new project between quebec and amenagement called something like Industrie forestière
# de la Matapédia. put in the map i am about to send you, as well as the timetable
# diagram"; renamed the same day ("change the project title to Vallée de la Matapédia",
# folder and address too, as for the Québec project). The name is his own, in French in
# every language like the other project names.
# FR/DE text translated from the English with DeepL.
# Web images live in ./images/ next to this file (full-resolution
# originals are in /originals/vallee-de-la-matapedia). To add one, drop it
# in ./images/ and add an entry under "images:".

title: Vallée de la Matapédia
# Second on the Work page: the valley, between the province and the site
order: 1
year: '2026'
location: Vallée de la Matapédia, Québec

# Type, one of: Cultural, Hospitality, Infrastructure, Research, Residential, Transportation
#   FR: Culturel, Hôtellerie, Infrastructure, Recherche, Résidentiel, Transport
#   DE: Kultur, Hotellerie, Infrastruktur, Forschung, Wohnen, Verkehr
# Research since 21 Nov (his ask: "change the type of the first two projects to research"; FR/DE from DeepL)
type:
  fr: Recherche
  en: Research
  de: Forschung

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
  # QGIS map frame (title lines dropped), copied unchanged. Reprinted 21 Nov (his words:
  # "dont make the routhierville point bigger than the rest": the stops' 2.8 mm dot) and
  # again ("make sure the railway passes over the river": a white band under the rail at
  # its four crossings of the river), exported again each time. Caption his, in French (21 Nov, via the valley session: "change the
  # caption to Exploitation forestière autour de la Matapédia"; it replaced "Railway and
  # river through logged forest"); English from DeepL (FR to EN), German from DeepL from
  # that English, asked as "Logging around the Matapédia River, 1:100,000".
  - src: ./images/map-matapedia-valley.jpg
    src2x: ./images/map-matapedia-valley@2x.jpg
    size: full
    caption: { fr: 'Exploitation forestière autour de la Matapédia', en: 'Logging around the Matapédia River', de: 'Holzeinschlag im Gebiet um den Matapédia-Fluss' }
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
  # Spruce near Routhierville against every timber piece of the tower, station and inn:
  # across, the piece's length (0–5.5 m; dashed, the 4.88 m / 16 ft limit); up, how
  # many spruce within 20 km it takes to find one whose butt log can give it (1 in 1 to
  # 1 in 70, linear, dashed every 10; MRNF sample plots, Données Québec, CC-BY 4.0);
  # black = the pieces' true cross-sections at 1:40 (circles logs, rectangles sawn
  # timber), with the number of each piece the three buildings need over it (4,427 in
  # all: inn 2,281, tower 1,628, station 518). No stipple since the 22 Nov reprint (subsidy
  # session, his words there: "Can you send it to the website session to update the one
  # that's currently up there?"); the 21 Nov stipple version is archived in Drawings/Archive/
  # ("B3 stipple, live on the website, before the counts version"). Reprinted 23 Nov 16:38
  # (round 27, same session) at his ask here ("i think theres a new diagram for spruce?",
  # then "Yes, ask it"): the inn's beams cut where its 3D now splices them (cross pairs
  # mid-bay, long beams mid-bay but for the end bays), so 282 → 74 at the 4.88 m line,
  # 376 → 136, 92 → 508, new groups of 360 and 192; one-off log discs folded into their
  # neighbours. The 22 Nov counts version (4,075) is archived in Drawings/Archive/ ("live on
  # the website, before the inn's cross-pair splices").
  # Reprinted 23 Nov 20:18 (same session, his words there: "instead of the black fill, can we
  # try a stipple fill", then "Print it", "Reprint", "Send it"): each section filled with even
  # 0.18 mm stipple instead of black, no outline; the dashed lines stop at the sections. Same
  # data, counts and frame. The black version is archived in Drawings/Archive/ ("black
  # sections, live on the website, before the stipple fill").
  # Drawings/Wood_Supply_Demand/Diagram_WoodAvailability_A5spread.pdf (Rhino, A5 spread),
  # exported whole by export_web.py (Diagram_WoodAvailability). On the Aménagement page
  # 19–20 Nov, then taken off at his ask; here since 21 Nov ("put the diagram in the
  # matapedia valley project"). The caption is Michael's ("spruce availability within a
  # 20-kilometer radius", 19 Nov; "of Routhierville" added 22 Nov at his ask: "add to
  # caption that it is within 20km of Routhierville"), FR/DE from DeepL, except his
  # "épinette" for DeepL's "épinettes" (the wood, not the trees: "I think épinette should
  # probably be without an s because we are talking about the Wood"); the credit is
  # what CC BY 4.0 asks (source and a link to the licence), "Data:" from DeepL.
  - src: ./images/diagram-wood-availability.jpg
    src2x: ./images/diagram-wood-availability@2x.jpg
    size: full
    caption: { fr: 'Disponibilité d’épinette dans un rayon de 20 km de Routhierville', en: 'Spruce availability within 20 km of Routhierville', de: 'Verfügbarkeit von Fichtenholz im Umkreis von 20 km um Routhierville' }
    credit:
      fr: 'Données : MRNF, Données Québec, [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/deed.fr)'
      en: 'Data: MRNF, Données Québec, [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/)'
      de: 'Daten: MRNF, Données Québec, [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/deed.de)'
---
