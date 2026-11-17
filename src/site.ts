// Contact details shown on the About page.
// Leave a value empty ('') to hide it.

export const site = {
  name: 'Atelier Mayer',
  city: 'Montréal, Québec',
  phone: '+1 514 209 0729', // shown under the city; tapping it calls on phones
  // Shown in this order, each with its title above it (titles translated with DeepL, except French
  // "Informations", Michael's own word). Each address forwards to Michael's inbox (set up at
  // Porkbun > Email forwarding); a new one must be added there too.
  contacts: [
    { email: 'info@ateliermayer.ca', title: { fr: 'Informations', en: 'General', de: 'Allgemeines' } },
    {
      email: 'emplois@ateliermayer.ca',
      title: { fr: 'Emplois', en: 'Jobs', de: 'Stellenangebote' },
      // Optional line under the address, after a blank line, set as a narrow column (DeepL); delete `note` to hide it.
      note: {
        fr: 'Nous recherchons actuellement des stagiaires pour des stages de trois mois.',
        // a no-break space after "for" keeps "for interns" together, so "for" starts line 2
        en: 'We are currently looking for\u00a0interns for 3-month internships.',
        de: 'Wir suchen derzeit Praktikanten für ein dreimonatiges Praktikum.',
      },
    },
  ] as { email: string; title: Record<'fr' | 'en' | 'de', string>; note?: Record<'fr' | 'en' | 'de', string> }[],
  instagram: '', // e.g. 'https://www.instagram.com/ateliermayer/'
  linkedin: '', // e.g. 'https://www.linkedin.com/in/...'
};
