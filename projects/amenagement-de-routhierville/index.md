---
# Aménagement de Routhierville: the site-level drawings (the title is Michael's own,
# in French in every language like the other project names)
# FR/DE text translated from the English with DeepL.
# Web images live in ./images/ next to this file (full-resolution
# originals are in /originals/site). To add one, drop it in ./images/ and
# add an entry under "images:".

title: Aménagement de Routhierville
order: 0
year: '2026'
location: Routhierville, Québec

# Type, one of: Cultural, Hospitality, Infrastructure, Residential, Transportation
#   FR: Culturel, Hôtellerie, Infrastructure, Résidentiel, Transport
#   DE: Kultur, Hotellerie, Infrastruktur, Wohnen, Verkehr
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

summary:
  fr: 'Infrastructures touristiques de Routhierville, dans la vallée de Matapédia, au Québec : une gare, une auberge et un musée de la foresterie.'
  en: 'Tourism infrastructure for Routhierville, in Quebec’s Matapédia Valley: a train station, an inn and a forestry museum.'
  de: 'Touristische Infrastruktur in Routhierville im Matapédia-Tal in Québec: ein Bahnhof, ein Gasthaus und ein Forstmuseum.'

# Leave a blank line between paragraphs.
text:
  fr: |
    [Description du projet à venir : emplacement, programme, concept et construction. Deux à quatre courts paragraphes.]
  en: |
    [Project description to come: site, programme, concept and construction. Two to four short paragraphs.]
  de: |
    [Projektbeschreibung folgt: Standort, Programm, Konzept und Bauausführung. Zwei bis vier kurze Absätze.]

# No cover: the project page and the Work page thumbnails start with the first
# image below.
#
# size: full (whole width), half (two side by side) or half-right (one image on the right half)
# src2x: drawings only, the same drawing at twice the size; both files are then
#   served exactly as exported (never recompressed), so the lines stay crisp
# caption: a simple name (never the sheet title), shown in the left column of
#   the project page and used as alt text; scale: shown under it (drawings only).
#   FR/DE from DeepL, asked as "<name>, <scale>" so it reads them as drawings.
images:
  # The thesis abstract, as live text in the bio's type. Text: Mayer_Thesis_Fall2026/
  # Writing/Abstract/abstract_round29.html (14 Nov), word for word, in English,
  # without the name and advisor lines (his call, 17 Nov).
  # abstract.png is only its Work page thumbnail (tools/abstract-sheet/render.mjs).
  - src: ./images/abstract.png
    size: full
    caption: { fr: 'Résumé', en: 'Abstract', de: 'Zusammenfassung' }
    textSlide: |
      Designing the Ship of Theseus: Robustness through Redundancy along *Les Routes touristiques du Québec*

      This thesis suggests designing buildings the same way as tourism economies, by providing robustness through redundancy of structural members and tourism infrastructure.

      In 2009, the covered bridge of Routhierville was designated a historic monument and underwent restoration in the following years. A 1931 Québec Town truss, the bridge was designed to be built of local timber by local carpenters, pinned together into a lattice to span impressive distances. Because of the multiple load paths, no single piece is critical, and members could be easily removed and replaced under maintenance conditions. Within the framework of design for maintenance, this thesis applies the bridge’s construction logic to three new buildings as prototypes for the Ship of Theseus: redundant light timber assemblies designed so that members could be perpetually replaced as they decay, to prevent structural obsolescence. The replacements could be made by local workers, with local timber sized to what the nearby forest could reasonably supply.

      This thesis looks at Routhierville as one of many stops that could be developed along *Les Routes touristiques du Québec* to promote regional economic development. Drawing on the success of Norway’s National Tourist Routes, this thesis proposes developing tourism infrastructure along existing passenger railways to simultaneously increase ridership and support regional economies. In Routhierville, a new train station, inn, and forestry museum are proposed to support comfortable tourism by rail within the Gaspésie touristic region, which already hosts over 700,000 car-dependent tourists each summer.
  - src: ./images/site-plan.jpg
    src2x: ./images/site-plan@2x.jpg
    size: full
    caption: { fr: 'Plan d’ensemble', en: 'Site plan', de: 'Lageplan' }
    scale: '1:1000'
  - src: ./images/site-section-a.jpg
    src2x: ./images/site-section-a@2x.jpg
    size: full
    caption: { fr: 'Coupe A à travers le site', en: 'Site section A', de: 'Querschnitt A durch das Gelände' }
    scale: '1:1000'
  - src: ./images/site-section-b.jpg
    src2x: ./images/site-section-b@2x.jpg
    size: full
    caption: { fr: 'Coupe B à travers le site', en: 'Site section B', de: 'Querschnitt B durch das Gelände' }
    scale: '1:1000'
  # VIA's Ocean, Montréal–Halifax, 20–26 July 2025, as a timetable graph: the trains
  # (thin lines), the night (stipple) and each train passing Routhierville (black
  # circles). Exported whole, as an A5 spread (Drawings/Diagrams_Gap_2026-11-18), 18 Nov.
  # Caption from DeepL; French asked as "Railway timetable diagram" (the shorter
  # phrase came back ambiguous), German as "Timetable diagram".
  - src: ./images/diagram-ocean-week.jpg
    src2x: ./images/diagram-ocean-week@2x.jpg
    size: full
    caption: { fr: 'Schéma des horaires ferroviaires', en: 'Timetable diagram', de: 'Fahrplandiagramm' }
---
