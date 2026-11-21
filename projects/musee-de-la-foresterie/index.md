---
# Musée de la Foresterie
# FR/DE text translated from the English with DeepL.
# Web images live in ./images/ next to this file (full-resolution
# originals are in /originals). To add one, drop it in ./images/ and add
# an entry under "images:".

# No article before the name since 21 Nov (his ask: "remove the le, la and l' from the project names"); it was "Le Musée de la Foresterie".
title: Musée de la Foresterie
order: 5
year: '2026'
location: Routhierville, Québec

# Type, one of: Cultural, Hospitality, Infrastructure, Residential, Transportation
#   FR: Culturel, Hôtellerie, Infrastructure, Résidentiel, Transport
#   DE: Kultur, Hotellerie, Infrastruktur, Wohnen, Verkehr
type:
  fr: Culturel
  en: Cultural
  de: Kultur

status:
  fr: En cours
  en: In progress
  de: In Bearbeitung

context:
  fr: Mémoire de maîtrise « Railway-Oriented Tourism », Harvard Graduate School of Design
  en: Thesis “Railway-Oriented Tourism”, Harvard Graduate School of Design
  de: Masterarbeit „Railway-Oriented Tourism“, Harvard Graduate School of Design

summary:
  fr: Un musée de la foresterie et une tour d’observation à Routhierville, dans la vallée de la Matapédia, au Québec.
  en: A forestry museum and lookout tower in Routhierville, in Quebec’s Matapédia Valley.
  de: Ein Forstmuseum und ein Aussichtsturm in Routhierville im Matapédia-Tal in Québec.

# Leave a blank line between paragraphs.
text:
  fr: |
    [Description du projet à venir : emplacement, programme, concept et construction. Deux à quatre courts paragraphes.]
  en: |
    [Project description to come: site, programme, concept and construction. Two to four short paragraphs.]
  de: |
    [Projektbeschreibung folgt: Standort, Programm, Konzept und Bauausführung. Zwei bis vier kurze Absätze.]

cover: ./images/render-tower-head.jpg
coverCaption: { fr: 'Perspective', en: 'Perspective', de: 'Perspektive' }

# size: full (whole width), half (two side by side) or half-right (one image on the right half)
# src2x: drawings only, the same drawing at twice the size; both files are then
#   served exactly as exported (never recompressed), so the lines stay crisp
# caption: a simple name (never the sheet title), shown in the left column of
#   the project page and used as alt text; scale: shown under it (drawings only).
#   FR/DE from DeepL, asked as "<name>, <scale>" so it reads them as drawings.
#
# The path view (the forest path to the tower's foot) was taken off the site on
# 19 Nov (his call): the head-on view above is the tower's only render.
images:
  - src: ./images/plan-lookout.jpg
    src2x: ./images/plan-lookout@2x.jpg
    size: full
    caption: { fr: 'Plan d’étage du belvédère', en: 'Lookout plan', de: 'Grundriss der Aussichtsplattform' }
    scale: '1:50'
  - src: ./images/section-long.jpg
    src2x: ./images/section-long@2x.jpg
    size: half
    caption: { fr: 'Coupe longitudinale', en: 'Longitudinal section', de: 'Längsschnitt' }
    scale: '1:50'
  - src: ./images/section-cross.jpg
    src2x: ./images/section-cross@2x.jpg
    size: half
    caption: { fr: 'Coupe transversale', en: 'Cross section', de: 'Querschnitt' }
    scale: '1:50'
---
