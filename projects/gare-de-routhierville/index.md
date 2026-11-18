---
# La Gare de Routhierville
# FR/DE text translated from the English with DeepL.
# Web images live in ./images/ next to this file (full-resolution
# originals are in /originals). To add one, drop it in ./images/ and add
# an entry under "images:".

title: La Gare de Routhierville
order: 1
year: '2026'
location: Routhierville, Québec

# Type, one of: Cultural, Hospitality, Infrastructure, Residential, Transportation
#   FR: Culturel, Hôtellerie, Infrastructure, Résidentiel, Transport
#   DE: Kultur, Hotellerie, Infrastruktur, Wohnen, Verkehr
type:
  fr: Transport
  en: Transportation
  de: Verkehr

status:
  fr: En cours
  en: In progress
  de: In Bearbeitung

context:
  fr: Mémoire de maîtrise « Railway-Oriented Tourism », Harvard Graduate School of Design
  en: Thesis “Railway-Oriented Tourism”, Harvard Graduate School of Design
  de: Masterarbeit „Railway-Oriented Tourism“, Harvard Graduate School of Design

summary:
  fr: Une gare à Routhierville, dans la vallée de la Matapédia, au Québec.
  en: A train station for Routhierville, in Quebec’s Matapédia Valley.
  de: Ein Bahnhof in Routhierville im Matapédia-Tal in Québec.

# Leave a blank line between paragraphs.
text:
  fr: |
    [Description du projet à venir : emplacement, programme, concept et construction. Deux à quatre courts paragraphes.]
  en: |
    [Project description to come: site, programme, concept and construction. Two to four short paragraphs.]
  de: |
    [Projektbeschreibung folgt: Standort, Programm, Konzept und Bauausführung. Zwei bis vier kurze Absätze.]

cover: ./images/render-main-track.jpg
coverCaption: { fr: 'Perspective', en: 'Perspective', de: 'Perspektive' }

# size: full (whole width), half (two side by side) or half-right (one image on the right half)
# src2x: drawings only, the same drawing at twice the size; both files are then
#   served exactly as exported (never recompressed), so the lines stay crisp
# caption: a simple name (never the sheet title), shown in the left column of
#   the project page and used as alt text; scale: shown under it (drawings only).
#   FR/DE from DeepL, asked as "<name>, <scale>" so it reads them as drawings.
images:
  - src: ./images/render-front.jpg
    size: full
    caption: { fr: 'Perspective', en: 'Perspective', de: 'Perspektive' }
  - src: ./images/plan-ground.jpg
    src2x: ./images/plan-ground@2x.jpg
    size: full
    caption: { fr: 'Plan du rez-de-chaussée', en: 'Ground floor plan', de: 'Grundriss des Erdgeschosses' }
    scale: '1:50'
  - src: ./images/plan-upper.jpg
    src2x: ./images/plan-upper@2x.jpg
    size: full
    caption: { fr: 'Plan de l’étage supérieur', en: 'Upper floor plan', de: 'Grundriss des Obergeschosses' }
    scale: '1:50'
  - src: ./images/section-long.jpg
    src2x: ./images/section-long@2x.jpg
    size: full
    caption: { fr: 'Coupe longitudinale', en: 'Longitudinal section', de: 'Längsschnitt' }
    scale: '1:50'
  - src: ./images/section-cross.jpg
    src2x: ./images/section-cross@2x.jpg
    size: full
    caption: { fr: 'Coupe transversale', en: 'Cross section', de: 'Querschnitt' }
    scale: '1:50'
---
