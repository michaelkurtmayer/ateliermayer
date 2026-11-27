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

# Type, one of: Cultural, Hospitality, Infrastructure, Research, Residential, Transportation
#   FR: Culturel, Hôtellerie, Infrastructure, Recherche, Résidentiel, Transport
#   DE: Kultur, Hotellerie, Infrastruktur, Forschung, Wohnen, Verkehr
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

# The cover since 25 Nov, the tower from the air: D3 (f1b_fly_south_40mm_meadow_p16_d3_full,
# Blender Cycles, 1024 samples, finished overnight 24-25 Nov, the speck-fixed copy): F1b's
# view from the air, head-on from the south, 40 mm lens, overcast with fog, with the eye
# lowered so the underside of the roof shows, and the newer model (the roof sheet on the
# timber, the mesh 50 % open). Sent by the tower render session (his words there: "Send all 4
# to website session"); in place of F1b since 25 Nov (f1b_fly_south_40mm_full, 24 Nov; still
# in /originals), and the cover since the same day (his ask: "Put tower aerial render first").
# Not in Final_Renders or the book. Cropped centred from the 5000 x 3532 PNG to 5000 x 3374
# (79 px off the top and bottom), the renders' 1.48 : 1.
# Since 27 Nov the re-render of D3 (previews/2026-11-27_d3_inset_charcoal, same file name,
# 1024 samples): the same camera, sky, light and timber, but the tower's metal mesh 0.19 m
# inside the column grid instead of outside it, and charcoal metallic instead of stainless.
# Sent by the tower render session (his words there: "Send h2 and d3 to website"). The 25 Nov
# copy stays in /originals (f1b_fly_south_40mm_meadow_p16_d3_full.png); the new one is
# f1b_fly_south_40mm_meadow_p16_d3_full_27nov_inset_charcoal.png. Same crop.
# The cover before it, H1 (h1_square_40mm_eye2p4_full, at the foot of the tower, upright, 23
# Nov), was taken off on 25 Nov at his ask ("Same for the old tower base render", after the
# station's old track view); H2 below is the view at the tower's foot now. H1 stays in
# /originals and the thesis folder. (H1 had replaced the 18 Nov clear-cut photomontage.)
cover: ./images/render-tower-aerial.jpg
coverCaption: { fr: 'Perspective', en: 'Perspective', de: 'Perspektive' }

# size: full (whole width), half (two side by side) or half-right (one image on the right half)
# src2x: drawings only, the same drawing at twice the size; both files are then
#   served exactly as exported (never recompressed), so the lines stay crisp
# caption: a simple name (never the sheet title), shown in the left column of
#   the project page and used as alt text; scale: shown under it (drawings only).
#   FR/DE from DeepL, asked as "<name>, <scale>" so it reads them as drawings.
#
# The path view (the forest path to the tower's foot) was taken off the site on
# 19 Nov (his call). The tower's renders are the cover (D3) and H2 below.
#
# The three drawings: Sections_v6g/Plan_TowerV6cLookout, Section_TowerV6cLongLabelled and
# Section_TowerV6cCrossLabelled (A1, 1:50), exported by export_web.py (Tower_Plan_Lookout,
# Tower_Section_Long, Tower_Section_Cross). Reprinted 23 Nov (plan 17:55, sections 18:46-18:47)
# in the tower session (his words there: "send the most up to date tower drawings to the
# website session"): no steel face sheets, so the Ø26 cable cross-bracing with turnbuckles
# shows; the fabric (168 flat mesh sheets on rods and hooks); the tower lowered 0.51 m; the
# lookout guardrail (rail, posts, cables every 10 cm); the long section's ground and trees
# reworked. They replace the 17-18 Nov exports. The tower's ground floor plan is retired, so
# the lookout plan stays its only plan. The plan reprinted again 19:46 (his words there:
# "Yes, send it"): only the lookout floor's own beams, no longer doubled by the planks of
# the floor below a few millimetres beside them.
# Both sections reprinted again 22:11-22:12 (tower session, his words there: "nice, update the
# ones on the website"): the ground-storey cables straight on their line of action, the two
# cables in front of the stair entrance gone; nothing else changed. The 19:06 exports are in
# Drawings/Archive/Web exports (before straight ground-storey cables and no cables at the stair entrance, Nov 23)/.
# All three reprinted 24 Nov (plan 17:08, labelled sections 17:43-17:44) in the tower drawings
# session (his words there: "lets stop having the text for structural members on these drawings,
# we will make structural drawings later. send these drawings without the structural text to the
# website session"): no member tags (grid, levels and dimensions stay), a post at every kink of
# the stair rails, the stair rail wrapping round the opening, a 1.20 m guard at the lookout,
# cables every 10 cm. The 23 Nov exports are in Drawings/Archive/Web exports (before no member
# tags, stair rail posts and the 1.20 m guard, Nov 24)/.
# The lookout plan reprinted 27 Nov 14:09 in the tower plan session (his words there: "send to
# website session for upload") and exported by export_web.py (Tower_Plan_Lookout, same frame and
# size): the paving's retaining wall and coping stones drawn in stipple, no lines; the lookout
# guardrail drawn as its top rail only, round the lookout and along the stair opening, no posts
# or cables under it. The 24 Nov export is in Drawings/Archive/Web exports (before wall stipple
# and the lookout top rail only, Nov 27)/.
images:
  # H2 (h2_turned_clearing_40mm_p16_full, Blender Cycles, 1024 samples, finished overnight
  # 24-25 Nov): made as H1's companion (the same distance, eye level 2.4 m and 40 mm lens),
  # turned 90 degrees, square onto the tower's long face, the clearing past the corner; the
  # mesh 50 % open. Since 25 Nov the tower's only view at its foot (H1 taken off). Sent 25 Nov by the tower render session (his words there: "Send all 4 to website
  # session"); not in Final_Renders or the book. Cropped centred from the 3532 x 5000 PNG to
  # 3374 x 5000.
  # Since 27 Nov the re-render of H2 (previews/2026-11-27_h2_inset_charcoal, same view), with
  # D3's new one ("Send h2 and d3 to website"): the mesh 0.19 m inside the column grid and
  # charcoal metallic, nothing else changed. The 25 Nov copy stays in /originals
  # (h2_turned_clearing_40mm_p16_full.png); the new one is
  # h2_turned_clearing_40mm_p16_full_27nov_inset_charcoal.png. Same crop.
  - src: ./images/render-tower-clearing.jpg
    size: full
    caption: { fr: 'Perspective', en: 'Perspective', de: 'Perspektive' }
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
