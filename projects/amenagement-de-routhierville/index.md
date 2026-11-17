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
images:
  - src: ./images/site-plan.jpg
    src2x: ./images/site-plan@2x.jpg
    size: full
    caption: { fr: 'Plan d’ensemble, à l’échelle 1:1 000', en: 'Site plan, 1:1000', de: 'Lageplan, Maßstab 1:1000' }
  - src: ./images/site-section-a.jpg
    src2x: ./images/site-section-a@2x.jpg
    size: full
    caption: { fr: 'Coupe A à travers le site, à l’échelle 1:1 000', en: 'Site section A, 1:1000', de: 'Querschnitt A durch das Gelände, Maßstab 1:1000' }
  - src: ./images/site-section-b.jpg
    src2x: ./images/site-section-b@2x.jpg
    size: full
    caption: { fr: 'Coupe B à travers le site, à l’échelle 1:1 000', en: 'Site section B, 1:1000', de: 'Querschnitt B durch das Gelände, Maßstab 1:1000' }
---
