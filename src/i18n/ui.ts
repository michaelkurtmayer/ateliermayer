// Languages, interface text and URL helpers.
// To change a menu label or any small piece of interface text, edit it here.

export const langs = ['fr', 'en', 'de'] as const;
export type Lang = (typeof langs)[number];

// Used when a visitor's browser language is not French, English or German.
export const defaultLang: Lang = 'en';

export const languageNames: Record<Lang, string> = {
  fr: 'Français',
  en: 'English',
  de: 'Deutsch',
};

const ui = {
  en: {
    'nav.work': 'Work',
    'nav.about': 'About',
    'nav.language': 'Language',
    'nav.menu': 'Menu',
    'nav.close': 'Close',
    'slides.previous': 'Previous image',
    'slides.next': 'Next image',
    'work.title': 'Work',
    'meta.type': 'Type',
    'meta.location': 'Location',
    'meta.year': 'Year',
    'meta.status': 'Status',
    'meta.context': 'Context',
    'about.title': 'About',
    'about.contact': 'Contact',
    'site.description':
      'Atelier Mayer — Michael Kurt Mayer, Montréal.',
    'skip': 'Skip to content',
  },
  fr: {
    'nav.work': 'Projets',
    'nav.about': 'À propos',
    'nav.language': 'Langue',
    'nav.menu': 'Menu',
    'nav.close': 'Fermer',
    'slides.previous': 'Image précédente',
    'slides.next': 'Image suivante',
    'work.title': 'Projets',
    'meta.type': 'Type',
    'meta.location': 'Emplacement',
    'meta.year': 'Année',
    'meta.status': 'Statut',
    'meta.context': 'Contexte',
    'about.title': 'À propos',
    'about.contact': 'Contact',
    'site.description':
      'Atelier Mayer — Michael Kurt Mayer, Montréal.',
    'skip': 'Aller au contenu',
  },
  de: {
    'nav.work': 'Projekte',
    'nav.about': 'Über',
    'nav.language': 'Sprache',
    'nav.menu': 'Menü',
    'nav.close': 'Schließen',
    'slides.previous': 'Vorheriges Bild',
    'slides.next': 'Nächstes Bild',
    'work.title': 'Projekte',
    'meta.type': 'Typ',
    'meta.location': 'Standort',
    'meta.year': 'Jahr',
    'meta.status': 'Status',
    'meta.context': 'Kontext',
    'about.title': 'Über',
    'about.contact': 'Kontakt',
    'site.description':
      'Atelier Mayer — Michael Kurt Mayer, Montréal.',
    'skip': 'Zum Inhalt springen',
  },
} as const;

export type UiKey = keyof (typeof ui)['en'];

export function useTranslations(lang: Lang) {
  return (key: UiKey): string => ui[lang][key] ?? ui[defaultLang][key];
}

// The folder the site is served from: '' on ateliermayer.ca, or e.g.
// '/ateliermayer' on a temporary GitHub address. Set at build time.
const BASE = import.meta.env.BASE_URL.replace(/\/$/, '');

/** '/fr/' -> '/fr/' on the real domain, '/ateliermayer/fr/' on a temporary address */
export function withBase(path: string): string {
  return BASE + (path.startsWith('/') ? path : `/${path}`);
}

/** '/work/' + 'fr' -> '/fr/work/' */
export function localize(lang: Lang, path = '/'): string {
  const clean = path.startsWith('/') ? path : `/${path}`;
  return withBase(`/${lang}${clean}`);
}

/** '/fr/work/x/' -> '/work/x/' */
export function stripLang(pathname: string): string {
  const path = BASE && pathname.startsWith(BASE) ? pathname.slice(BASE.length) || '/' : pathname;
  const parts = path.split('/');
  if (langs.includes(parts[1] as Lang)) {
    return '/' + parts.slice(2).join('/');
  }
  return path;
}

export function langPaths() {
  return langs.map((lang) => ({ params: { lang } }));
}

/**
 * Splits a block of text on blank lines into paragraphs.
 * A paragraph wrapped in [square brackets] is a placeholder still to be
 * written, and is left off the page.
 */
export function paragraphs(text: string): string[] {
  return text
    .split(/\n\s*\n/)
    .map((p) => p.trim())
    .filter((p) => p && !/^\[[\s\S]*\]$/.test(p));
}
