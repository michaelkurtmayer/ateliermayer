---
# Gare de Routhierville
# FR/DE text translated from the English with DeepL.
# Web images live in ./images/ next to this file (full-resolution
# originals are in /originals). To add one, drop it in ./images/ and add
# an entry under "images:".

# No article before the name since 21 Nov (his ask: "remove the le, la and l' from the project names"); it was "La Gare de Routhierville".
title: Gare de Routhierville
order: 3
year: '2026'
location: Routhierville, Québec

# Type, one of: Cultural, Hospitality, Infrastructure, Research, Residential, Transportation
#   FR: Culturel, Hôtellerie, Infrastructure, Recherche, Résidentiel, Transport
#   DE: Kultur, Hotellerie, Infrastruktur, Forschung, Wohnen, Verkehr
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

cover: ./images/render-road.jpg
coverCaption: { fr: 'Perspective', en: 'Perspective', de: 'Perspektive' }

# size: full (whole width), half (two side by side) or half-right (one image on the right half)
# src2x: drawings only, the same drawing at twice the size; both files are then
#   served exactly as exported (never recompressed), so the lines stay crisp
# caption: a simple name (never the sheet title), shown in the left column of
#   the project page and used as alt text; scale: shown under it (drawings only).
#   FR/DE from DeepL, asked as "<name>, <scale>" so it reads them as drawings.
images:
  # The view along the tracks, upright: n48 (n48_other_end_20mm_up, 20 mm, on the near track
  # looking down the tracks, the station on the right), the Blender original without FLUX.
  # It replaced "back 3 m" (which had replaced S25) on 20 Nov, his ask from the renderings
  # session: "have it replace the perspective on the website". Cropped centred to
  # 3374 x 5000, the station renders' 1.48 : 1 upright.
  - src: ./images/render-main-track.jpg
    size: full
    caption: { fr: 'Perspective', en: 'Perspective', de: 'Perspektive' }
  # Front 3 (the head-on view of the track facade, from between the tracks) was taken
  # off on 20 Nov, his call; it is still in the thesis folder.
  # The two plans: Sections_v6g/Plan_StationV1Ground / First (A1, 1:50), exported by
  # export_web.py (Station_Plan_Ground / First). Reprinted 23 Nov 00:56 in the tower
  # Rhino session, at Michael's ask there to update the site: steel-hatched core walls,
  # the railings from the renders, downspouts at the end posts; on the first floor the
  # closet lined up with the bathroom door, the desk chair under the desk, a round rug.
  # Reprinted again 23 Nov 01:07 (same session, his ask): every door frame merged into its
  # wall, one outline with the steel hatch running through.
  # All four sheets (the two plans, the two sections) reprinted 23 Nov 18:36-18:41 in the
  # station railings session and exported there 19:02 (his words there: "send these new
  # station drawings to the website session"): the end and balcony railings inside the
  # columns, on the inner beams (a post in each balcony corner, the rail turning the
  # corner); Ø6 horizontal cables every 10 cm in both sections; in both plans the props
  # drawn down to their feet and the foundation fins shown. The previous exports are in
  # Drawings/Archive/Web exports (before station rails on the beams, cables, props and fins, Nov 23)/.
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
  # The long section: Sections_v6g/Section_StationV1LongLabelled (A1, 1:50), exported by
  # export_web.py (Station_Section_Long). Reprinted 23 Nov 12:52 in the tower Rhino session
  # (his words there: "Send to website"): each cut core wall one outline with the steel hatch,
  # as on the plans, the door heads merged into their walls; the pipes under the first floor
  # removed; the railings from the renders. It also carries the 20 Nov changes (stools,
  # vestibule doors, track glass into the cores).
  # The cross section: Section_StationV1CrossLabelled (A1, 1:50), export_web.py
  # Station_Section_Cross. Reprinted 23 Nov 13:23 in the same session (his words there:
  # "Please update the short section as well. There are lines there from the old frame that
  # should not be there anymore in the core, basically."): no seams between flush steel faces
  # in the core, the door frames part of the wall; the render's railings (the ramp's rail one
  # straight sloped bar, the platform guard straight). Replaces the 18 Nov export, so it also
  # carries the 20 Nov changes.
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
