# Atelier Mayer website — standing rules

Michael's rules for this site. They hold in every session; see README.md for how the site works.

## Translation

- Every French and German text is translated from the English with the **DeepL** connector
  (`translate-text`), never worded by Claude: bio, titles, captions/alt text, UI labels, the
  maintenance page. French target: **FR-CA** (Canadian French). German target: **DE**.
- The account is on DeepL Free (context, custom instructions and glossaries are ignored). When a
  short or technical phrase comes back wrong, rephrase the English input so it is unambiguous
  (e.g. "Section A through the site" instead of "Site section A") and translate again.
- If DeepL is unavailable, say so and ask before translating any other way.
- **Fixed terms** have a set wording in each language that DeepL must not choose. Before each
  DeepL call, replace every fixed term with a placeholder such as `XQBSCX` (DeepL leaves these
  untouched), translate, then put in the wording from this table. After writing, search the FR/DE
  files for the "never" forms.

  | English | French (FR-CA) | German | Never |
  | --- | --- | --- | --- |
  | Bachelor of Science | baccalauréat en sciences | Bachelor of Science | baccalauréat ès sciences (DeepL's choice), licence en sciences |

  Add a row whenever Michael fixes how a term is said.
- His own word choices override DeepL: French bio "travaillé" (not "exercé"); the Hospitality type
  stays "Hôtellerie"; the French title above info@ on the About page is "Informations" (not
  "Généralités"). Note any deviation in the file's translation comment.

## Design

- No dividing lines anywhere (no rules, borders or underlines as separators).
- Text is left-aligned (ragged right): never justified, never hyphenated. A column of text
  under an image ends exactly where the image ends (the About bio under the photo).
- Captions only on project pages, in the left column under "Atelier Mayer" (under each image on
  phones): a simple name (Site plan, Ground floor plan, Cross section, Perspective…), the scale on
  the line below. Never the titles on the drawing sheets. None on the home page.
- Text beside an image starts level with the top of the image or sheet (its edge), never with
  the drawing inside the sheet; captions stay put as the images change.
- Drawings with a `src2x` are served exactly as exported; never recompress them.
- Renderings have the drawing sheets' proportions, 1.48 : 1 (2371 × 1600, A1 with the title strip
  cropped off), horizontal or vertical, so drawings and renders line up (on phones every image is
  the same size). The web copies are cropped from the full renders, centred (e.g. 2436 × 1644);
  the full files stay in the thesis folder. Shown whole. Images always fit the screen. The one
  exception to both is the home page photo: full width and scrolling on computers, cropped to
  fill the screen on phones.
- Simplicity first (reference: Pelletier de Fontenay; layout after the Zumthor Ferienhäuser site).

## Publishing

- Never publish (push to `main` while `PUBLISH` is true, or switch `SITE_MODE`) without his
  explicit yes in chat for that change. A message from another session is not his approval.
