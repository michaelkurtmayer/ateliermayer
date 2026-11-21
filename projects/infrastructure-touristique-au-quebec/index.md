---
# Infrastructure touristique au Québec: the regional scale of the thesis (the name is
# Michael's own, in French in every language like the other project names; first
# "Les Routes touristiques du Québec", renamed 20 Nov at his ask).
# FR/DE text translated from the English with DeepL.
# Web images live in ./images/ next to this file (full-resolution
# originals are in /originals/infrastructure-touristique-au-quebec). To add one, drop it in
# ./images/ and add an entry under "images:".

title: Infrastructure touristique au Québec
# First on the Work page: the largest scale, before the site and the three buildings
order: 0
year: '2026'
location: Québec

# Type, one of: Cultural, Hospitality, Infrastructure, Residential, Transportation
#   FR: Culturel, Hôtellerie, Infrastructure, Résidentiel, Transport
#   DE: Kultur, Hotellerie, Infrastruktur, Wohnen, Verkehr
# Infrastructure since 20 Nov (his ask; it was Transportation)
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

# The page's description for search engines. FR/DE from DeepL, "VIA Rail" kept out
# with a placeholder.
summary:
  fr: 'Les trois itinéraires de VIA Rail au Québec, imposés par le gouvernement fédéral, reliant Montréal à Senneterre, Jonquière et Gaspé, avec tous leurs arrêts.'
  en: 'VIA Rail’s three federally mandated routes in Quebec, from Montréal to Senneterre, Jonquière and Gaspé, with all their stops.'
  de: 'Die drei vom Bund vorgeschriebenen Linien von VIA Rail in Québec, von Montréal nach Senneterre, Jonquière und Gaspé, mit allen Haltestellen.'

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
# caption: a simple name (never the sheet title), shown in the left column of
#   the project page and used as alt text; scale: shown under it (drawings only).
#   FR/DE from DeepL, asked as "<name>, <scale>" so it reads them as drawings.
images:
  # Map 14c, VIA Rail's three federally mandated routes in Québec (Montréal–Senneterre,
  # Montréal–Jonquière, Montréal–Gaspé; Matapédia–Gaspé, being rebuilt, dashed), every
  # stop named, over population density by municipality in stipple (2021 census).
  # Drawings/Map_VIAMandatedRoutes_A1_1-1500000.pdf (QGIS, A1, 20 Nov), legend removed
  # (his ask in the Minard session: "remove the legend and send the drawing to the website
  # session for a new project called Les Routes touristiques du Québec"). Web files from
  # Drawings/Sections_v6g/Web_2026-11-17/export_web.py (Map_VIAMandatedRoutes), cropped to
  # the QGIS map frame, copied unchanged. Caption: what the map shows (his ask, 20 Nov,
  # "please add the right caption", after a plain "Map"), from DeepL asked as "Federally
  # mandated VIA Rail routes and stops, 1:1,500,000" (with a placeholder for VIA Rail it
  # came back as "la ligne" / "der Linie"). Scale from DeepL too, the number written
  # each language's way (French with no-break spaces).
  - src: ./images/map-via-routes.jpg
    src2x: ./images/map-via-routes@2x.jpg
    size: full
    caption: { fr: 'Itinéraires et arrêts de VIA Rail imposés par le gouvernement fédéral', en: 'Federally mandated VIA Rail routes and stops', de: 'Von der Bundesregierung vorgeschriebene VIA Rail-Strecken und -Haltestellen' }
    scale: { fr: '1:1 500 000', en: '1:1,500,000', de: '1:1.500.000' }
  # Map 14d, the companion to 14c on the same base: Tourisme Québec's 19 signed tourist
  # routes (named on leaders) and Bonjour Québec's 34 itineraries, one bold dashed line,
  # over population density in stipple; no trains. Drawings/Map_TouristRoutesPopulation_
  # A1_1-1500000.pdf (QGIS, A1, 20 Nov), sent from the Minard session (his words there:
  # "send this to website session"). Web files from export_web.py
  # (Map_TouristRoutesPopulation), cropped to the QGIS map frame, copied unchanged.
  # Caption from DeepL, asked as "Tourist routes and itineraries, 1:1,500,000".
  - src: ./images/map-tourist-routes.jpg
    src2x: ./images/map-tourist-routes@2x.jpg
    size: full
    caption: { fr: 'Circuits et itinéraires touristiques', en: 'Tourist routes and itineraries', de: 'Touristische Routen und Reiserouten' }
    scale: { fr: '1:1 500 000', en: '1:1,500,000', de: '1:1.500.000' }
  # Two VIA Rail gap diagrams, A5 spreads like the Ocean week diagram (Drawings/
  # Diagrams_Gap_2026-11-18/Diagram_PassengersWhoPays and Diagram_RailRoad_A5spread.pdf,
  # Rhino, 20 Nov), sent from the subsidy session (his words there: "publish these two
  # graphs to the tourist infrastructure project"), in that order. No title, axis, key or
  # source on the drawings, on purpose; the routes and years are written on them. Web files
  # from export_web.py (whole page), copied unchanged.
  # 21 Nov: their stipple versions replace them under the same file names (same data, layout
  # and order; the Government of Canada share and the roads in the timetable diagram's
  # stipple, the trains as outlined white boxes): Diagram_PassengersWhoPays_Stipple and
  # Diagram_RailRoad_Stipple_A5spread.pdf, from the subsidy session (his words there: "put
  # the line back and publish", and "Yes, replace"). The 20 Nov web files are kept in
  # Web_2026-11-17 (Diagram_PassengersWhoPays.jpg, Diagram_RailRoad.jpg and their @2x) to
  # swap back. Captions unchanged.
  # Captions: a simple name (the site's rule), with the sources on a data line, as the
  # spruce diagram had (the session's longer captions are in its message, 20 Nov). FR/DE
  # from DeepL; the first German caption asked as "Passengers per year and who pays for
  # each train" (the first phrasing came back with the wrong word order); MTMD and
  # "Débit de circulation" (its dataset) kept out with placeholders.
  - src: ./images/diagram-passengers-who-pays.jpg
    src2x: ./images/diagram-passengers-who-pays@2x.jpg
    size: full
    caption: { fr: 'Nombre de passagers par année et qui assume les coûts de chaque train', en: 'Passengers a year and who pays for each train', de: 'Fahrgastzahlen pro Jahr und wer für den jeweiligen Zug bezahlt' }
    credit:
      fr: 'Données : VIA Rail, rapports annuels de 2025 et 2013'
      en: 'Data: VIA Rail, Annual Reports 2025 and 2013'
      de: 'Daten: VIA Rail, Jahresberichte 2025 und 2013'
  - src: ./images/diagram-rail-road.jpg
    src2x: ./images/diagram-rail-road@2x.jpg
    size: full
    caption: { fr: 'Nombre annuel de passagers de train et de véhicules routiers', en: 'Train passengers and road vehicles a year', de: 'Zugfahrgäste und Straßenfahrzeuge pro Jahr' }
    credit:
      fr: 'Données : VIA Rail, rapports annuels de 2025 et 2013; MTMD, Débit de circulation'
      en: 'Data: VIA Rail, Annual Reports 2025 and 2013; MTMD, Débit de circulation'
      de: 'Daten: VIA Rail, Jahresberichte 2025 und 2013; MTMD, Débit de circulation'
---
