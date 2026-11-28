---
# Auberge de la Matapédia
# FR/DE text translated from the English with DeepL.
# Web images live in ./images/ next to this file (full-resolution
# originals are in /originals). To add one, drop it in ./images/ and add
# an entry under "images:".

# No article before the name since 21 Nov (his ask: "remove the le, la and l' from the project names"); it was "L’Auberge de la Matapédia".
title: Auberge de la Matapédia
order: 4
year: '2026'
location: Routhierville, Québec

# Type, one of: Cultural, Hospitality, Infrastructure, Research, Residential, Transportation
#   FR: Culturel, Hôtellerie, Infrastructure, Recherche, Résidentiel, Transport
#   DE: Kultur, Hotellerie, Infrastruktur, Forschung, Wohnen, Verkehr
type:
  fr: Hôtellerie
  en: Hospitality
  de: Hotellerie

status:
  fr: En cours
  en: In progress
  de: In Bearbeitung

context:
  fr: Mémoire de maîtrise « Railway-Oriented Tourism », Harvard Graduate School of Design
  en: Thesis “Railway-Oriented Tourism”, Harvard Graduate School of Design
  de: Masterarbeit „Railway-Oriented Tourism“, Harvard Graduate School of Design

summary:
  fr: Une auberge à Routhierville, dans la vallée de la Matapédia, au Québec.
  en: An inn in Routhierville, in Quebec’s Matapédia Valley.
  de: Ein Gasthaus in Routhierville im Matapédia-Tal in Québec.

# Leave a blank line between paragraphs.
text:
  fr: |
    [Description du projet à venir : emplacement, programme, concept et construction. Deux à quatre courts paragraphes.]
  en: |
    [Project description to come: site, programme, concept and construction. Two to four short paragraphs.]
  de: |
    [Projektbeschreibung folgt: Standort, Programm, Konzept und Bauausführung. Zwei bis vier kurze Absätze.]

# The cover since 28 Nov, the view from the water (inn_water_n1_full, Blender Cycles, 1024
# samples, no denoiser, the glass depth fix on, finished 27 Nov 23:25): from the Matapédia,
# the bedroom volumes on their posts with cable cross-bracing over the bank's shrubs, the
# lounge and kitchen / dining volumes behind, the forest in haze above, the river in front.
# Sent by the inn perspective session (his words there: "Send to website session as primary
# photo of auberge"); not in Final_Renders or the book. That session may later replace the
# file with a finish fixing two faint spots in the glass (lounge's left pane, kitchen's second
# pane), the same at web size. In /originals as inn_water_n1_full.png; cropped centred from
# the 5000 x 3532 PNG to 5000 x 3374 (79 px off the top and bottom), the renders' 1.48 : 1.
# View 34, the cover before it, follows it (first under "images:").
# (Older images, not shown: ./images/axo.jpg, plan-ground.jpg, section.jpg.)
cover: ./images/render-water.jpg
coverCaption: { fr: 'Perspective', en: 'Perspective', de: 'Perspektive' }

#
# size: full (whole width), half (two side by side) or half-right (one image on the right half)
# src2x: drawings only, the same drawing at twice the size; both files are then
#   served exactly as exported (never recompressed), so the lines stay crisp
# caption: a simple name (never the sheet title), shown in the left column of
#   the project page and used as alt text; scale: shown under it (drawings only).
#   FR/DE from DeepL, asked as "<name>, <scale>" so it reads them as drawings.
images:
  # View 34, the inn's first render and its cover 27-28 Nov (inn_shore_34_full, Blender Cycles,
  # 1024 samples, no denoiser, the speck fill on, finished 26 Nov): from the shore of the
  # Matapédia, along the glazed river side of a bedroom volume standing on its legs over the
  # bank: open top-hung windows, the bed behind the glass, a second volume further along the
  # bank, the river on the right, the far bank fading into fog. Sent by the inn render session
  # (his words there, 27 Nov: "Send to website session"); not in Final_Renders or the book. The
  # window pistons and the door up to the window head are that session's reading, not yet
  # confirmed by him. Cropped centred from the 5000 x 3532 PNG to 5000 x 3374 (79 px off the
  # top and bottom). Second since 28 Nov, when the water view became the cover; kept on the
  # page as nothing said to take it off. Until 27 Nov the page had no cover and started with
  # the cross section.
  - src: ./images/render-shore.jpg
    size: full
    caption: { fr: 'Perspective', en: 'Perspective', de: 'Perspektive' }
  - src: ./images/section-d.jpg
    src2x: ./images/section-d@2x.jpg
    size: full
    caption: { fr: 'Coupe transversale', en: 'Cross section', de: 'Querschnitt' }
    scale: '1:50'
---
