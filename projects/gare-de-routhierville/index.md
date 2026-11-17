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

cover: ./images/render-down-tracks.jpg

# size: full (whole width), half (two side by side) or half-right (one image on the right half)
# src2x: drawings only, the same drawing at twice the size; both files are then
#   served exactly as exported (never recompressed), so the lines stay crisp
images:
  - src: ./images/render-across-tracks.jpg
    size: full
    caption: { fr: 'Vue depuis l’autre côté des voies', en: 'View across the tracks', de: 'Blick über die Gleise' }
  - src: ./images/plan-ground.jpg
    src2x: ./images/plan-ground@2x.jpg
    size: full
    caption: { fr: 'Plan du rez-de-chaussée, 1:50', en: 'Ground floor plan, 1:50', de: 'Grundriss des Erdgeschosses, 1:50' }
  - src: ./images/plan-upper.jpg
    src2x: ./images/plan-upper@2x.jpg
    size: full
    caption: { fr: 'Plan de l’étage supérieur, 1:50', en: 'Upper floor plan, 1:50', de: 'Grundriss des Obergeschosses, 1:50' }
  - src: ./images/section-long.jpg
    src2x: ./images/section-long@2x.jpg
    size: full
    caption: { fr: 'Coupe longitudinale, 1:50', en: 'Long section, 1:50', de: 'Längsschnitt, 1:50' }
  - src: ./images/section-cross.jpg
    src2x: ./images/section-cross@2x.jpg
    size: full
    caption: { fr: 'Coupe transversale, 1:50', en: 'Cross section, 1:50', de: 'Querschnitt, 1:50' }
---
