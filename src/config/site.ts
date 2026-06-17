export const siteConfig = {
  name: 'Groupe Scolaire International La Petite Gloria',
  shortName: 'GSIPG',
  description:
    'École internationale bilingue à Yaoundé combinant excellence académique et parcs d\'attractions éducatifs.',
  url: 'https://gsipg.com',
  locale: 'fr_CM',
  contact: {
    phone: '+237 6 99 00 00 00',
    email: 'contact@gsipg.com',
    address: 'Yaoundé, Cameroun',
    hours: 'Lun – Ven : 7h30 – 17h00',
  },
} as const;

export const mainNav = [
  { label: 'Accueil', href: '/' },
  { label: 'Vie Scolaire', href: '/vie-scolaire' },
  { label: 'Actualités', href: '/actualites' },
  { label: 'Résultats', href: '/resultats' },
  { label: 'Galerie', href: '/galerie' },
  { label: 'À Propos', href: '/qui-sommes-nous' },
] as const;

export const footerQuickLinks = [
  { label: 'Qui sommes-nous', href: '/qui-sommes-nous' },
  { label: 'Nos niveaux', href: '/niveaux' },
  { label: 'Actualités', href: '/actualites' },
  { label: 'Contact', href: '/contact' },
] as const;

export const footerLevels = [
  { label: 'Maternelle', href: '/niveaux#maternelle' },
  { label: 'Primaire', href: '/niveaux#primaire' },
] as const;

export const legalLinks = [
  { label: 'Mentions légales', href: '/mentions-legales' },
  { label: 'Confidentialité', href: '/confidentialite' },
] as const;

export const socialLinks = [
  {
    label: 'Facebook',
    href: 'https://facebook.com/gsipg',
    icon: 'facebook',
  },
  {
    label: 'Instagram',
    href: 'https://instagram.com/gsipg',
    icon: 'instagram',
  },
  {
    label: 'LinkedIn',
    href: 'https://linkedin.com/company/gsipg',
    icon: 'linkedin',
  },
  {
    label: 'YouTube',
    href: 'https://youtube.com/@gsipg',
    icon: 'youtube',
  },
  {
    label: 'TikTok',
    href: 'https://tiktok.com/@gsipg',
    icon: 'tiktok',
  },
] as const;

export function formatPageTitle(pageTitle: string): string {
  return `${pageTitle} | GSIPG Yaoundé`;
}

export function isActiveNav(href: string, pathname: string): boolean {
  if (href === '/') return pathname === '/';
  return pathname.startsWith(href);
}
