# Atelier Mayer — ateliermayer.ca

Portfolio site in French, English and German, built with [Astro](https://astro.build).

## Folder structure

```
Website/
├── projects/                      what the site shows, one folder per project
│   ├── gare-de-routhierville/
│   │   ├── index.md               text in FR / EN / DE, facts, which images to show
│   │   └── images/                web-sized renders and drawings
│   ├── auberge-de-la-matapedia/
│   └── musee-de-la-foresterie/
├── about/                         About page: fr.md, en.md, de.md
├── originals/                     full-resolution renders (PNG) and drawing sheets (PDF)
│   ├── gare-de-routhierville/     renders/ and drawings/
│   ├── auberge-de-la-matapedia/
│   ├── musee-de-la-foresterie/
│   └── site/                      site model render, site plan, site sections
├── src/                           the site's code (pages, layout, styles, labels)
└── public/                        files served as they are (favicon)
```

`originals/` stays on this Mac only (it is in `.gitignore`); its README
lists where each file came from in the thesis folder.

## Where things are

| To change…                         | Edit                                                     |
| ---------------------------------- | -------------------------------------------------------- |
| A project's text, facts, images    | `projects/<project>/index.md`                            |
| A project's images                 | `projects/<project>/images/`                             |
| The About page (bio, CV)           | `about/fr.md`, `en.md`, `de.md`                          |
| Email and social links             | `src/site.ts`                                            |
| Menu labels and other small text   | `src/i18n/ui.ts`                                         |
| Colours, type sizes, layout        | `src/styles/global.css`                                  |

Every piece of project text has a `fr:`, `en:` and `de:` version.
Images in `images/` can be large (JPG or PNG); the build makes smaller
versions for each screen size automatically. Drawing sheets (PDF) need to
be turned into JPGs first.

**Add a project:** copy one project folder, rename it (the folder name
becomes the web address, e.g. `/fr/work/new-project/`), replace the
images, edit `index.md` and set its `order:`.

## Run it on your Mac

```bash
npm install      # first time only
npm run dev      # preview at http://localhost:4321
npm run build    # produce the finished site in dist/
```

## Publishing

The site is stored on GitHub and published by GitHub Pages. Every change
that reaches the `main` branch is built and published automatically by
`.github/workflows/publish.yml` (a minute or two). Publishing runs only
while the repository variable `PUBLISH` is `true`; set it to `false` to pause.

Until ateliermayer.ca is connected, the site lives at a temporary
`https://<user>.github.io/<repository>/` address; the workflow adapts the
links to whichever address is set in the repository's Pages settings.

## Addresses

- `/` sends visitors to their language (last used, else browser language, else English)
- `/fr/`, `/en/`, `/de/` — home
- `/<lang>/work/` — project index
- `/<lang>/work/<project>/` — project page
- `/<lang>/about/` — about and contact
