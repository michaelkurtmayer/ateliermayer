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

# The cover, the view from the tower's foot: H1 (h1_square_40mm_eye2p4_full, Blender Cycles, 1024
# samples, finished 23 Nov), at the foot of the tower, upright, eye level 2.4 m, 40 mm lens,
# overcast: the log columns with their bolts, the stainless mesh fabric, the straightened
# ground-floor cables, the flagstone paving inside the dry-stone wall, a stainless bench.
# Sent 23 Nov by the tower render session (Michael asked it to send the render here); not yet
# marked final in the thesis. It replaces the clear-cut photomontage (render-tower-head.jpg,
# Blender + FLUX, 18 Nov), removed from the site at his ask ("remove the previous rendering").
# Cropped centred from the 3532 x 5000 PNG to 3374 x 5000, the
# renders' 1.48 : 1 upright.
cover: ./images/render-tower-foot.jpg
coverCaption: { fr: 'Perspective', en: 'Perspective', de: 'Perspektive' }

# size: full (whole width), half (two side by side) or half-right (one image on the right half)
# src2x: drawings only, the same drawing at twice the size; both files are then
#   served exactly as exported (never recompressed), so the lines stay crisp
# caption: a simple name (never the sheet title), shown in the left column of
#   the project page and used as alt text; scale: shown under it (drawings only).
#   FR/DE from DeepL, asked as "<name>, <scale>" so it reads them as drawings.
#
# The path view (the forest path to the tower's foot) was taken off the site on
# 19 Nov (his call). The tower's renders are the cover (H1), H2 and D3 below.
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
images:
  # H2 (h2_turned_clearing_40mm_p16_full, Blender Cycles, 1024 samples, finished overnight
  # 24-25 Nov): H1's companion, the same distance, eye level 2.4 m and 40 mm lens, turned 90
  # degrees, square onto the tower's long face, the clearing past the corner; the mesh 50 %
  # open. Sent 25 Nov by the tower render session (his words there: "Send all 4 to website
  # session"); not in Final_Renders or the book. Cropped centred from the 3532 x 5000 PNG to
  # 3374 x 5000.
  - src: ./images/render-tower-clearing.jpg
    size: full
    caption: { fr: 'Perspective', en: 'Perspective', de: 'Perspektive' }
  # D3 (f1b_fly_south_40mm_meadow_p16_d3_full, Blender Cycles, 1024 samples, finished
  # overnight 24-25 Nov, the speck-fixed copy): F1b's view from the air, head-on from the
  # south, 40 mm lens, overcast with fog, with the eye lowered so the underside of the roof
  # shows, and the newer model (the roof sheet on the timber, the mesh 50 % open). Sent with
  # H2. Since 25 Nov in place of F1b (f1b_fly_south_40mm_full, 24 Nov, sent with "Send to
  # website session and publish it."; still in /originals). Not in Final_Renders or the book.
  # Cropped centred from the 5000 x 3532 PNG to 5000 x 3374 (79 px off the top and bottom),
  # the renders' 1.48 : 1.
  - src: ./images/render-tower-aerial.jpg
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
