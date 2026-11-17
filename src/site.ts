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
    { email: 'emplois@ateliermayer.ca', title: { fr: 'Emplois', en: 'Jobs', de: 'Stellenangebote' } },
  ],
  instagram: '', // e.g. 'https://www.instagram.com/ateliermayer/'
  linkedin: '', // e.g. 'https://www.linkedin.com/in/...'
};
