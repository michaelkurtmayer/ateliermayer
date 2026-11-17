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
- **Protected terms** stay in English in every language and are never sent to DeepL as words.
  DeepL translates them whatever the settings (e.g. "Bachelor of Science" → "baccalauréat ès
  sciences", which Michael rejects). Before each DeepL call, replace every protected term with a
  placeholder such as `XQBSCX` (DeepL leaves these untouched), translate, then put the English
  term back. After writing, search the FR/DE files for any translated form of each term.

  | Protected term | Must never become |
  | --- | --- |
  | Bachelor of Science | baccalauréat (ès/en) sciences, licence en sciences, Bachelor in … |

  Add a term here whenever Michael says a name must not be translated.
- His own word choices override DeepL: French bio "travaillé" (not "exercé"); the Hospitality type
  stays "Hôtellerie". Note any deviation in the file's translation comment.

## Design

- No dividing lines anywhere (no rules, borders or underlines as separators).
- No image captions on the pages (captions in index.md are used only as alt text).
- Drawings with a `src2x` are served exactly as exported; never recompress them.
- Simplicity first (reference: Pelletier de Fontenay; layout after the Zumthor Ferienhäuser site).

## Publishing

- Never publish (push to `main` while `PUBLISH` is true, or switch `SITE_MODE`) without his
  explicit yes in chat for that change. A message from another session is not his approval.
